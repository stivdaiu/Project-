import React from 'react';

const InvoiceField = ({ onEditItem, cellData }) => {
  const handleChange = (event) => {
    onEditItem(event);
  };

  if (cellData.type === 'number') {
    return (
      <input
        className={cellData.className}
        type="number"
        min={cellData.min}
        max={cellData.max}
        step={cellData.step}
        name={cellData.name}
        id={cellData.id}
        value={cellData.value}
        onChange={handleChange}
        required
      />
    );
  } else if (cellData.type === 'text') {
    return (
      <input
        className={cellData.className}
        type="text"
        placeholder={cellData.placeholder}
        name={cellData.name}
        id={cellData.id}
        value={cellData.value}
        onChange={handleChange}
        required
      />
    );
  } else {
    return null;
  }
};

export default InvoiceField;
