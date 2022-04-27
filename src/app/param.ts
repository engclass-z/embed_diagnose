export type Choice =
  | {
      text: string;
      nextQuestionId: string;
    }
  | {
      text: string;
      nextResultId: string;
    };

export type Question = {
  id: string;
  text: string;
  choices: Choice[];
};

export type Result = {
  id: string;
  templateKey: string;
  sanitizedParams?: {
    [key: string]: string;
  };
};

export type ResultTemplate = {
  key: string;
  sanitizedHtml: string;
};

export type Param = {
  rootClassName?: string;
  questions: Question[];
  results: Result[];
  resultTemplates: ResultTemplate[];
  config: {
    firstQuestionId: string;
  };
  customClassNames?: Partial<{
    root: string;
    buttonBlock: string;
    button: string;
  }>;
};
