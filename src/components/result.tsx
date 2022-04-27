import classNames from 'classnames';
import React, { FC, useMemo } from 'react';

import { CLASS_NAMES } from '../app/classname';
import { Result, ResultTemplate } from '../app/param';

type Props = {
  result: Result;
  templates: ResultTemplate[];
};

export const ResultComponent: FC<Props> = ({ result, templates }) => {
  const sanitizedHtml = useMemo(() => {
    const target = templates.find((t) => t.key === result.templateKey)?.sanitizedHtml;
    return target
      ? target.replace(/%(.+)%/g, (match) => {
          return result.sanitizedParams?.[match.slice(1, -1)] || '';
        })
      : null;
  }, [result, templates]);

  return sanitizedHtml ? (
    <div
      className={classNames(CLASS_NAMES.resultBlock)}
      dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
    />
  ) : null;
};
