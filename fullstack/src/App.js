import React, { useState, useEffect } from 'react';

const CRUDComponent = () => {
  const [data, setData] = useState([]);
  const [newItem, setNewItem] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/data');
      if (response.ok) {
        const jsonData = await response.json();
        setData(jsonData);
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleAdd = async () => {
    try {
      const response = await fetch('/api/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ item: newItem }),
      });
      if (response.ok) {
        const jsonData = await response.json();
        setData([...data, jsonData]);
        setNewItem('');
      } else {
        throw new Error('Failed to add item');
      }
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  const handleUpdate = async (id, updatedItem) => {
    try {
      const response = await fetch(`/api/data/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ item: updatedItem }),
      });
      if (response.ok) {
        const jsonData = await response.json();
        const updatedData = data.map(item => (item.id === id ? jsonData : item));
        setData(updatedData);
      } else {
        throw new Error('Failed to update item');
      }
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/api/data/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        const updatedData = data.filter(item => item.id !== id);
        setData(updatedData);
      } else {
        throw new Error('Failed to delete item');
      }
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <div>
      <h1>CRUD Application</h1>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            {item.item}
            <button onClick={() => handleUpdate(item.id, 'Updated Item')}>Update</button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CRUDComponent;
