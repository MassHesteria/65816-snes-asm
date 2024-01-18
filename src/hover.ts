import * as vscode from "vscode";
import asm from "./asm";

export const sampleHoverProvider: vscode.HoverProvider = {
  provideHover(
    document: vscode.TextDocument,
    position: vscode.Position,
    token: vscode.CancellationToken
  ): vscode.Hover | Thenable<vscode.Hover> {
    // Your hover text logic here
    const hoverText = new vscode.MarkdownString("This is hover text");
    return new vscode.Hover(hoverText);
  },
};

export const opcodeHoverProvider: vscode.HoverProvider = {
  provideHover(
    document: vscode.TextDocument,
    position: vscode.Position,
    token: vscode.CancellationToken
  ): vscode.Hover | Thenable<vscode.Hover> {
    // Get the word under the cursor
    const wordRange = document.getWordRangeAtPosition(position);
    const word = wordRange ? document.getText(wordRange) : "";

    const docs: { code: string; docs: string }[] = [];

    Object.entries(asm.docs).forEach(d => {
      const codes = d[0].split(' ');
      codes.forEach(c => {
        docs.push({
          code: c,
          docs: d[1]
        })
      })
    })

    // Define hover content based on the word
    let hoverText = "";
    const h = docs.find(p => p.code == word);
    if (h != undefined) {
      hoverText = h.docs;
    }

    // Create a Hover object with the defined content
    const hover = new vscode.Hover(new vscode.MarkdownString(hoverText));
    return hover;
  },
};
