/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/

import * as vscode from "vscode";
import { getSampleProvider1, getSampleProvider2 } from "./completion";
import { sampleHoverProvider } from "./hover";

export function activate(context: vscode.ExtensionContext) {
  const provider1 = vscode.languages.registerCompletionItemProvider(
    "plaintext", getSampleProvider1);

  const provider2 = vscode.languages.registerCompletionItemProvider(
    "plaintext", getSampleProvider2, "." // triggered whenever a '.' is being typed
  );

  const provider3 = vscode.languages.registerHoverProvider(
    "plaintext", sampleHoverProvider
  );

  context.subscriptions.push(provider1, provider2, provider3);
}
