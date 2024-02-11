import * as vscode from "vscode";
import asm from "./asm";
import { ramSuperMetroid } from "./ramSuperMetroid";
import { getRamText, inAddressRange, RamAddress } from "./ram";

//------------------------------------------------------
// Handle hovering over opcodes
//------------------------------------------------------

export const opcodeHoverProvider: vscode.HoverProvider = {
  provideHover(
    document: vscode.TextDocument,
    position: vscode.Position,
    token: vscode.CancellationToken
  ): vscode.Hover | Thenable<vscode.Hover> | null {
    // Get the word under the cursor
    const wordRange = document.getWordRangeAtPosition(position);
    const word = wordRange ? document.getText(wordRange) : "";

    // Trim opcode length specifiers
    const code = /\.(b|w|l)$/.test(word) ? word.slice(0, -2) : word;

    const a = asm.opcodes.find(p => p.name == code);
    if (a != undefined) {
      let hoverText = `**${a.description}**`;

      if (word != code) {
        const opcodeLen = word.at(word.length - 1);
        if (opcodeLen == 'b') {
          hoverText += " _(byte length)_";
        } else if (opcodeLen == 'w') {
          hoverText += " _(word length)_";
        } else if (opcodeLen == 'l') {
          hoverText += " _(long length)_";
        }
      }

      hoverText += `  \n\n${a.docs}`;
      return new vscode.Hover(new vscode.MarkdownString(hoverText));
    }

    const config = vscode.workspace.getConfiguration("65816Snes");
    const gameSupport = config.get<string>("gameSupport", "none");
    if (gameSupport == "Super Metroid") {
      return new vscode.Hover(
        new vscode.MarkdownString(
          getRamHoverText(document, position, ramSuperMetroid)
        )
      );
    }

    return null;
  },
};

const getPreviousCharacter = (document: vscode.TextDocument, range: vscode.Range) => {
  const startPosition = new vscode.Position(range.start.line, range.start.character - 1);
  const beforeRange = new vscode.Range(startPosition, range.start);
  return document.getText(beforeRange);
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
    const num = parseInt(word.slice(1), 16);
    const data = ramData.find(p => inAddressRange(p, num, 0xFFFF));
    if (data != undefined) {
      hoverText = getRamText(data);
    }
  }

  const sixDigits = document.getWordRangeAtPosition(position, /\$[0-9A-Fa-f]{6}\b/);
  if (sixDigits && '#' != getPreviousCharacter(document, sixDigits)) {
    const word = document.getText(sixDigits).toLowerCase();
    const num = parseInt(word.slice(1), 16);
    const data = ramData.find(p => inAddressRange(p, num, 0xFFFFFF));
    if (data != undefined) {
      hoverText = getRamText(data);
    }
  }

  return hoverText;
};