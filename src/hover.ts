import * as vscode from "vscode";
import asm from "./asm";

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
    const h = docs.find(p => p.code == word);
    if (h != undefined) {
      hoverText = h.docs;
    } else {
      const config = vscode.workspace.getConfiguration("65816Snes");
      const gameSupport = config.get<string>("gameSupport", "none");
      if (gameSupport == "Super Metroid") {
        hoverText = getSuperMetroidHoverText(document, position);
      }
    }

    // Create a Hover object with the defined content
    const hover = new vscode.Hover(new vscode.MarkdownString(hoverText));
    return hover;
  },
};

const getSuperMetroidHoverText = (
  document: vscode.TextDocument,
  position: vscode.Position
): string => {
  const wordRange = document.getWordRangeAtPosition(position);
  const word = wordRange ? document.getText(wordRange) : "";
  let hoverText = "";
  if (word == "$09A6") {
    hoverText = "Equipped Items"
  }
  if (word == "09A6") {
    hoverText = "test Equipped Items"
  }
  return hoverText;
};