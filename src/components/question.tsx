import classNames from 'classnames';
import React, { FC, useCallback } from 'react';

import { CLASS_NAMES } from '../app/classname';
import { Choice, Param, Question } from '../app/param';

type Props = {
  param: Param;
  question: Question;
  goToNextQuestion: (id: string) => void;
  goToResult: (id: string) => void;
};

export const QuestionComponent: FC<Props> = ({ param, question, goToNextQuestion, goToResult }) => {
  const onClick = useCallback(
    (choice: Choice) => {
      if ('nextQuestionId' in choice) {
        goToNextQuestion(choice.nextQuestionId);
      } else if ('nextResultId' in choice) {
        goToResult(choice.nextResultId);
      } else {
        // noop
      }
    },
    [goToNextQuestion, goToResult]
  );

  return (
    <div className={classNames(CLASS_NAMES.buttonBlock, param.customClassNames?.buttonBlock)}>
      <h2 className={classNames(CLASS_NAMES.questionTitle, param.customClassNames?.questionTitle)}>
        {question.text}
      </h2>
      {question.choices.map((choice, i) => (
        <button
          key={i}
          className={classNames(CLASS_NAMES.button, param.customClassNames?.button)}
          type="button"
          onClick={() => onClick(choice)}
        >
          {choice.text}
        </button>
      ))}
    </div>
  );
};
