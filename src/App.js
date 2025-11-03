import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Импорт стилей Bootstrap
import './App.css'; // Твой кастом CSS остаётся

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://my-form-backend-rq4j.onrender.com/submit', formData);
      setStatus(response.data.message);
      setFormData({ name: '', email: '', message: '' }); // Очистка
    } catch (error) {
      setStatus(error.response?.data?.error || 'Ошибка отправки');
    }
  };

  return (
    <div className="App">
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow">
              <div className="card-header bg-primary text-white text-center">
                <h2 className="mb-0">Форма сбора данных</h2>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Имя</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Введите имя"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Введите email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Сообщение</label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      placeholder="Введите сообщение"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">Отправить</button>
                </form>
                {status && (
                  <div className={`alert mt-3 ${status.includes('отправлены') ? 'alert-success' : 'alert-danger'}`} role="alert">
                    {status}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;