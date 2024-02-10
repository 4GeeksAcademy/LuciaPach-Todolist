import React, { useState } from 'react';

function ListWithInput() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && inputValue.trim() !== '') {
      const newItem = inputValue.trim();
      setItems([...items, newItem]);
      setInputValue('');
    }
  };

  const handleDeleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const remainingItemCount = items.length;

  return (
    <div className="container-fluid" style={{ color: '#666', fontFamily: 'inherit' }}>
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <h1 className="text-center mb-4" style={{ color: 'rgba(255, 182, 193, 0.9)', fontWeight: '300' }}>TODOS</h1>
          <input
            type="text"
            className="form-control mb-0 rounded-0"
            style={{ backgroundColor: '#fff', boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)', fontWeight: '300', marginBottom: '0', outline: 'none', border: '1px solid rgba(255, 182, 193, 0.3)', fontSize: 'calc(16px + 3px)', color: '#666', fontFamily: 'inherit' }}
            placeholder="What needs to be done?"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <div style={{ marginTop: '0', display: 'flex', flexDirection: 'column-reverse', gap: '0' }}>
            <div
              className="list-item"
              style={{ position: 'relative', marginBottom: '0', backgroundColor: '#fff', boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)', padding: '5px 10px', border: '1px solid rgba(255, 182, 193, 0.3)', fontSize: 'calc(16px + 3px)', fontFamily: 'inherit', fontWeight: '300', fontSize: '14px', borderRadius: '5px' }} // Ajuste de fontSize y borderRadius
            >
              {remainingItemCount} {remainingItemCount === 1 ? 'item' : 'items'} left
            </div>
            {items.slice(0).reverse().map((item, index) => (
              <div
                key={index}
                className="list-item"
                style={{ position: 'relative', marginBottom: '0', backgroundColor: '#fff', boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)', padding: '10px', marginTop: index === 0 ? '0' : '', border: '1px solid rgba(255, 182, 193, 0.3)', fontSize: 'calc(16px + 3px)', fontFamily: 'inherit', fontWeight: '300' }}
              >
                {item}
                <button
                  onClick={() => handleDeleteItem(items.length - index - 1)}
                  className="delete-button"
                  style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px', color: 'rgba(255, 182, 193, 1)', filter: 'saturate(50%)' }}
                  onMouseEnter={(e) => e.target.style.filter = 'saturate(100%)'}
                  onMouseLeave={(e) => e.target.style.filter = 'saturate(50%)'}
                >
                  X
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListWithInput;
