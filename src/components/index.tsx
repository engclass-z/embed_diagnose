import * as React from 'react';
import { createRoot } from 'react-dom/client';

type Param = {
  elementId: string;
};

export const main = ({ elementId }: Param) => {
  const container = document.getElementById(elementId);
  if (!container) return;

  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <div>aaa</div>
    </React.StrictMode>
  );
};
