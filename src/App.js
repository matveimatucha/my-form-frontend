import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // Стили ниже

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/submit', formData); // URL твоего бэка
      setStatus(response.data.message);
      setFormData({ name: '', email: '', message: '' }); // Очистка формы
    } catch (error) {
      setStatus(error.response?.data?.error || 'Ошибка отправки');
    }
  };

  return (
    <div className="App">
      <h1>Форма сбора данных</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Имя"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Сообщение"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          required
        />
        <button type="submit">Отправить</button>
      </form>
      {status && <p className={status.includes('отправлены') ? 'success' : 'error'}>{status}</p>}
    </div>
  );
}

export default App;