import React, { useContext, createContext, useState } from 'react';
import { IDocs, DocsState } from './types';

export const DocsContext = createContext({} as IDocs);
export const useDocs = (): IDocs => useContext(DocsContext);

const Docs: React.FC = ({ children }) => {
  const [docs, setDocs] = useState<DocsState>({});

  return (
    <DocsContext.Provider
      value={{
        docs,
        setDocs,
      }}
    >
      {children}
    </DocsContext.Provider>
  );
};

export default Docs;
