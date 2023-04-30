import React from 'react';

function MainView() {
  const data = '<h1 style={defaultStyles} >This is some <strong>HTML</strong> content!</h1>';
  const defaultStyles = {
    fontSize: '2em',
    fontWeight: 'bold',
    lineHeight: '1.2',
    marginTop: '0.67em',
    marginBottom: '0.67em',
  };

  return (
    <div>
      <div style={defaultStyles} dangerouslySetInnerHTML={{__html: data}} />
      <h1 >hey</h1>
    </div>
  );
}

export default MainView;
