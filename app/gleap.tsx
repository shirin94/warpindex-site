'use client';

import { FC, ReactNode, useEffect } from 'react';
import Gleap from 'gleap';

export const GleapInit: FC<{ children?: ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Initialize Gleap
    Gleap.initialize('Q4Eh67kG1Ca4u19XVFBWaOlh6Pe2xjon');

    // Register custom action handler
    Gleap.registerCustomAction((customAction) => {
      if (customAction.name === "ASK_AI") {
        // Find and click the Ask AI button using data-testid
        const askAiButton = document.querySelector('[data-testid="ask-ai-button"]');
        if (askAiButton instanceof HTMLElement) {
          askAiButton.click();
        }
      }
    });
  }, []); // Added dependency array to prevent multiple registrations

  return <>{children}</>;
};