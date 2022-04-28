import classNames from 'classnames';
import React, { FC, useCallback, useEffect, useState } from 'react';

import { CLASS_NAMES } from '../app/classname';
import { Param, Question, Result } from '../app/param';

import { QuestionComponent } from './question';
import { ResultComponent } from './result';

const isQuestion = (value: Question | Result): value is Question => {
  return 'choices' in value;
};

type Props = {
  param: Param;
};

export const AppComponent: FC<Props> = ({ param }) => {
  const [current, setCurrent] = useState<Question | Result | null>(null);

  useEffect(() => {
    goToNextQuestion(param.config.firstQuestionId);
  }, []);

  const goToNextQuestion = useCallback(
    (id: string) => {
      const next = param.questions.find((question) => question.id === id);
      next && setCurrent(next);
    },
    [param]
  );

  const goToResult = useCallback(
    (id: string) => {
      const next = param.results.find((result) => result.id === id);
      next && setCurrent(next);
    },
    [param]
  );

  return (
    <div className={classNames(CLASS_NAMES.root, param.customClassNames?.root)}>
      {current && isQuestion(current) ? (
        <QuestionComponent
          question={current}
          goToNextQuestion={goToNextQuestion}
          goToResult={goToResult}
          param={param}
        />
      ) : current ? (
        <ResultComponent result={current} templates={param.resultTemplates} param={param} />
      ) : null}
    </div>
  );
};
