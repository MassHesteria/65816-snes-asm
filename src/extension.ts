/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/

import * as vscode from "vscode";
import { opcodeCompletionProvider } from "./completion";
import { opcodeHoverProvider } from "./hover";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.languages.registerCompletionItemProvider(
      "asm", opcodeCompletionProvider
    ),
    vscode.languages.registerHoverProvider(
      "asm", opcodeHoverProvider
    )
  )
}