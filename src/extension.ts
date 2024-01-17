/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/

import * as vscode from "vscode";
import { getSampleProvider1, getSampleProvider2, opcodeCompletionProvider } from "./completion";
import { sampleHoverProvider } from "./hover";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.languages.registerCompletionItemProvider(
      "plaintext", getSampleProvider1
    ),
    vscode.languages.registerCompletionItemProvider(
      "plaintext", getSampleProvider2, "." // triggered whenever a '.' is being typed
    ),
    vscode.languages.registerHoverProvider(
      "plaintext", sampleHoverProvider
    ),
    vscode.languages.registerCompletionItemProvider(
      "asm", opcodeCompletionProvider
    )
  )
}