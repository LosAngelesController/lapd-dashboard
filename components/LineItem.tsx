import * as React from 'react';
import { titleCase } from 'true-case';

export default function LineItem(props: any) {
  return (
    <>
      <div
        key={props.key}
        className='mb-2 rounded-lg bg-gray-200 px-2 py-2 dark:bg-zinc-800 dark:text-white'
      >
        <a href={props.link}>
          <p className='dark:text-white'>
            {props.year}{' '}
            {props.dept && (
              <>
                <span>{'| '}</span>
                <span className='dark:text-white'>
                  {props.dept &&
                    titleCase(props.dept).replace(/department (of)?( )?/gi, '')}
                </span>
              </>
            )}
          </p>
          <p className='font-bold dark:text-white'>{props.name}</p>
        </a>
      </div>
    </>
  );
}