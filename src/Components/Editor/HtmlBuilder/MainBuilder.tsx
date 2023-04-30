import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function MainBuilder() {
  const [selectedElements, setSelectedElements] = useState<Array<string>>([]);

  const handleSelect = (element: string) => {
    setSelectedElements([...selectedElements, element]);
  };

  const handleSave = () => {
    const htmlfile = `<html><head><title>Generated HTML</title></head><body>${generateHTML()}</body></html>`;
    const element = document.createElement('a');
    const file = new Blob([htmlfile], { type: 'text/html' });
    element.href = URL.createObjectURL(file);
    element.download = 'generated.html';
    document.body.appendChild(element);
    element.click();
  };

  const generateHTML = () => {
    let html = '';
    selectedElements.forEach((element) => {
      html += `<${element}>Double tab to edit the Text</${element}>`;
    });
    return html;
  };
  const htmlfile = `<html><head><title>Generated HTML</title></head><body>${generateHTML()}</body></html>`;
  console.log(htmlfile)

  return (
    <div className='p-4'>
      <div>
        <ul>
          <li onClick={() => handleSelect('h1')}>h1</li>
          <li onClick={() => handleSelect('h2')}>h2</li>
          <li onClick={() => handleSelect('p')}>p</li>
          {/* Add more elements as needed */}
        </ul>
        {selectedElements.length > 0 && (
          <div>
            Selected elements:
            {selectedElements.map((element) => (
              <span key={element}>{` <${element}>Double tab to edit the Text </${element}>`}</span>
            ))}
          </div>
        )}
        {selectedElements.length > 0 && (
          <div>
            <button onClick={handleSave}>Save HTML</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default MainBuilder;
