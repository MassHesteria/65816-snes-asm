/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/

import * as vscode from "vscode";
import { getSampleProvider1, getSampleProvider2, opcodeCompletionProvider } from "./completion";
import { opcodeHoverProvider } from "./hover";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    /*vscode.languages.registerCompletionItemProvider(
      "plaintext", getSampleProvider1
    ),
    vscode.languages.registerCompletionItemProvider(
      "plaintext", getSampleProvider2, "." // triggered whenever a '.' is being typed
    ),*/
    vscode.languages.registerCompletionItemProvider(
      "asm", opcodeCompletionProvider
    ),
    vscode.languages.registerHoverProvider(
      "asm", opcodeHoverProvider
    )
  )
}