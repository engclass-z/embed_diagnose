import * as React from 'react';
import { createRoot } from 'react-dom/client';

import { Param } from '../app/param';

import { AppComponent } from './app';

export const main = ({ elementId, param }: { elementId: string; param: Param }) => {
  const container = document.getElementById(elementId);
  if (!container) return;

  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <AppComponent param={param} />
    </React.StrictMode>
  );
};
