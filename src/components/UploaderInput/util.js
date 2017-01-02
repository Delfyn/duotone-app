/* @flow */

import React from 'react';

export function formatFileName(name: string) {
  // eslint-disable-next-line
  return name.length > 10 ? `${name.slice(0, 12)}...` : name;
}

export function formatFileSize(size: number) {
  return (`${Math.round((size / 1024) * 100) / 100} KB`);
}

export function formatFileDescription(name: string, size: number) {
  return (
    <span className="file-description h5">
      {`${formatFileName(name)} ${formatFileSize(size)}`}
    </span>
  );
}
