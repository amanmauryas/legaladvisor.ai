/// <reference types="vite/client" />

import { ReactElement, ReactNode } from 'react'
import * as CSS from 'csstype'

declare global {
  namespace JSX {
    interface Element extends ReactElement<any, any> { }
    interface IntrinsicElements {
      [elemName: string]: any;
    }
    interface ElementChildrenAttribute {
      children: ReactNode;
    }
  }

  interface Window {
    google?: {
      translate: {
        TranslateElement: {
          InlineLayout: {
            SIMPLE: number;
          };
          new (options: {
            pageLanguage: string;
            includedLanguages: string;
            autoDisplay: boolean;
            layout: number;
          }, element: string): void;
        };
      };
    };
    googleTranslateElementInit?: () => void;
  }
}

declare module '*.svg' {
  import * as React from 'react';
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.json' {
  const content: { [key: string]: any };
  export default content;
}

declare module 'react-router-dom';
declare module 'lucide-react';
