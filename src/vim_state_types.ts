import * as vscode from 'vscode';

import { Mode } from './modes_types';
import { VimRange } from './vim_range_types';

type Regsiter = {
    contents: string;
    linewise: boolean;
};

export type VimState = {
    typeSubscription: vscode.Disposable | undefined;
    mode: Mode;
    keysPressed: string[];
    registers: (Regsiter | undefined)[];
    semicolonAction: (vimState: VimState, editor: vscode.TextEditor) => void;
    commaAction: (vimState: VimState, editor: vscode.TextEditor) => void;
    lastPutRanges: (VimRange | undefined)[];
};
