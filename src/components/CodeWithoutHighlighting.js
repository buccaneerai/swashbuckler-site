import React from 'react';

const codeBlockStyles = {
  padding: '2em',
  backgroundColor: '#272822',
  color: '#f8f8f2',
  fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace,",
  fontSize: '1em',
  borderRadius: '0.3em'
};

const CodeWithoutHighlighting = function CodeWithoutHighlighting(props) {
  const styles = (
    props.style
    ? {...codeBlockStyles, ...props.style}
    : codeBlockStyles
  );
  return (
    <pre style={styles}>
      <code>
        {props.children}
      </code>
    </pre>
  );
};

export default CodeWithoutHighlighting;
