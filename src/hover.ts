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

const getRamHoverText = (
  document: vscode.TextDocument,
  position: vscode.Position,
  ramData: RamAddress[]
): string => {
  let hoverText = "";

  const fourDigits = document.getWordRangeAtPosition(position, /\$[0-9A-Fa-f]{4}\b/);
  if (fourDigits) {
    const word = document.getText(fourDigits).toLowerCase();
    const data = ramData.find(p => {
      const temp = "$" + (p.address & 0xFFFF).toString(16).padStart(4, "0");
      return word == temp;
    });
    if (data != undefined) {
      hoverText = getRamText(data);
    }
  }

  const sixDigits = document.getWordRangeAtPosition(position, /\$[0-9A-Fa-f]{6}\b/);
  if (sixDigits) {
    const word = document.getText(sixDigits).toLowerCase();
    const data = ramData.find(p => {
      const temp = "$" + p.address.toString(16);
      return word == temp;
    });
    if (data != undefined) {
      hoverText = getRamText(data);
    }
  }

  return hoverText;
};