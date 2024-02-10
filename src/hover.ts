import * as vscode from "vscode";
import asm from "./asm";
import { ramSuperMetroid } from "./ramSuperMetroid";
import { getRamText, RamAddress } from "./ram";

//------------------------------------------------------
// Build a list of "per opcode" documentation once
//------------------------------------------------------

const docs: { code: string; docs: string }[] = [];

Object.entries(asm.docs).forEach(d => {
  d[0].split(' ').forEach(c => {
    docs.push({
      code: c,
      docs: d[1]
    })
  })
});

//------------------------------------------------------
//
//------------------------------------------------------

const getText = (name: string, description?: string) => {
  if (description == undefined) {
    return name;
  }
  return name + "  \n  \n" + description;
}

//------------------------------------------------------
// Handle hovering over opcodes
//------------------------------------------------------

export const opcodeHoverProvider: vscode.HoverProvider = {
  provideHover(
    document: vscode.TextDocument,
    position: vscode.Position,
    token: vscode.CancellationToken
  ): vscode.Hover | Thenable<vscode.Hover> {
    // Get the word under the cursor
    const wordRange = document.getWordRangeAtPosition(position);
    const word = wordRange ? document.getText(wordRange) : "";

    // Define hover content based on the word
    let hoverText = "";
    const a = asm.opcodes.find(p => p.name == word);
    if (a != undefined) {
      const h = docs.find(p => p.code == word);
      if (h != undefined) {
        hoverText = getText(a.description,h.docs);
      }
    } else {
      const config = vscode.workspace.getConfiguration("65816Snes");
      const gameSupport = config.get<string>("gameSupport", "none");
      if (gameSupport == "Super Metroid") {
        hoverText = getRamHoverText(document, position, ramSuperMetroid);
      }
    }

    // Create a Hover object with the defined content
    const hover = new vscode.Hover(new vscode.MarkdownString(hoverText));
    return hover;
  },
};

const getPreviousCharacter = (document: vscode.TextDocument, range: vscode.Range) => {
  const startPosition = new vscode.Position(range.start.line, range.start.character - 1);
  const beforeRange = new vscode.Range(startPosition, range.start);
  return document.getText(beforeRange);
}

const getRamAddresses = (entry: RamAddress, mask: number) => {
  const options: string[] = [];
  const padNum = mask.toString(16).length;
  for (let i = 0; i < entry.length; i++) {
    const addr = (entry.address + i) & mask;
    options.push("$" + addr.toString(16).padStart(padNum, "0"));
  }
  return options;
}

const getRamHoverText = (
  document: vscode.TextDocument,
  position: vscode.Position,
  ramData: RamAddress[]
): string => {
  let hoverText = "";

  const fourDigits = document.getWordRangeAtPosition(position, /\$[0-9A-Fa-f]{4}\b/);
  if (fourDigits && '#' != getPreviousCharacter(document, fourDigits)) {
    const word = document.getText(fourDigits).toLowerCase();
    const data = ramData.find(p => getRamAddresses(p, 0xFFFF).includes(word));
    if (data != undefined) {
      hoverText = getRamText(data);
    }
  }

  const sixDigits = document.getWordRangeAtPosition(position, /\$[0-9A-Fa-f]{6}\b/);
  if (sixDigits && '#' != getPreviousCharacter(document, sixDigits)) {
    const word = document.getText(sixDigits).toLowerCase();
    const data = ramData.find(p => getRamAddresses(p, 0xFFFFFF).includes(word));
    if (data != undefined) {
      hoverText = getRamText(data);
    }
  }

  return hoverText;
};