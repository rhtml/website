import { Dispatch, SetStateAction } from 'react';

export type FileInTree = {
  url: string,
  path: string
}

export type DocsState = {
  tree?: FileInTree[],
}

export interface IDocs {
  docs: DocsState,
  setDocs: Dispatch<SetStateAction<DocsState>>
}
