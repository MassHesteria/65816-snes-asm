import * as vscode from "vscode";

export const sampleHoverProvider: vscode.HoverProvider = {
    provideHover(
      document: vscode.TextDocument,
      position: vscode.Position,
      token: vscode.CancellationToken
    ): vscode.Hover | Thenable<vscode.Hover> {
      // Your hover text logic here
      const hoverText = new vscode.MarkdownString('This is hover text');
      return new vscode.Hover(hoverText);
    }
  };