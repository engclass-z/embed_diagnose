import classNames from 'classnames';
import React, { FC, useMemo } from 'react';

import { CLASS_NAMES } from '../app/classname';
import { Param, Result, ResultTemplate } from '../app/param';

type Props = {
  result: Result;
  templates: ResultTemplate[];
  param: Param;
};

export const ResultComponent: FC<Props> = ({ result, templates, param }) => {
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
      className={classNames(CLASS_NAMES.resultBlock, param.customClassNames?.resultBlock)}
      dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
    />
  ) : null;
};
