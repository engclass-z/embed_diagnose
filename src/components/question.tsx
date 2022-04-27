import classNames from 'classnames';
import React, { FC, useCallback } from 'react';

import { CLASS_NAMES } from '../app/classname';
import { Choice, Question } from '../app/param';

type Props = {
  question: Question;
  goToNextQuestion: (id: string) => void;
  goToResult: (id: string) => void;
};

export const QuestionComponent: FC<Props> = ({ question, goToNextQuestion, goToResult }) => {
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
    <div className={classNames(CLASS_NAMES.buttonBlock)}>
      {question.choices.map((choice, i) => (
        <button
          key={i}
          className={classNames(CLASS_NAMES.button)}
          type="button"
          onClick={() => onClick(choice)}
        >
          {choice.text}
        </button>
      ))}
    </div>
  );
};
