import React from 'react';

export default function Link({ url, children, style = {} }) {
  const defaultStyle = { textDecoration: 'none', color: 'inherit' };
  const mergedStyle = { ...defaultStyle, ...style };
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" style={mergedStyle}>
      {children}
    </a>
  );
}
