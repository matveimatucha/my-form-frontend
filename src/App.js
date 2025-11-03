import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    surname: '', // Фамилия
    name: '', // Имя
    patronymic: '', // Отчество
    vkLink: '', // Ссылка на ВК
    phone: '', // Номер телефона
    email: '', // Email
    faculty: '' // Факультет
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://my-form-backend-rq4j.onrender.com/submit', formData);
      setStatus(response.data.message || 'Данные отправлены!');
      setFormData({ surname: '', name: '', patronymic: '', vkLink: '', phone: '', email: '', faculty: '' });
    } catch (error) {
      setStatus(error.response?.data?.error || 'Ошибка отправки');
    }
  };

  return (
    <div className="App">
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow">
              <div className="card-header bg-primary text-white text-center">
                <h2 className="mb-1">Форма для регистрации волонтёров для Профсоюзной организации МГУ</h2>
                <p className="mb-0">Данная форма нужна для того, чтобы собрать данные об лучших волонтёрах МГУ</p>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="surname" className="form-label">Фамилия</label>
                    <input
                      type="text"
                      className="form-control"
                      id="surname"
                      name="surname"
                      placeholder="Введите фамилию"
                      value={formData.surname}
                      onChange={handleChange}
                      required
                    />
                  </div>
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
                    <label htmlFor="patronymic" className="form-label">Отчество</label>
                    <input
                      type="text"
                      className="form-control"
                      id="patronymic"
                      name="patronymic"
                      placeholder="Введите отчество"
                      value={formData.patronymic}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="vkLink" className="form-label">Ссылка на ВК</label>
                    <input
                      type="url"
                      className="form-control"
                      id="vkLink"
                      name="vkLink"
                      placeholder="https://vk.com/yourprofile"
                      value={formData.vkLink}
                      onChange={handleChange}
                      pattern="https?://vk\.com/.*"
                      title="Введите ссылку на профиль ВК (vk.com/...)"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Номер телефона</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      name="phone"
                      placeholder="Введите номер телефона (любой формат)"
                      value={formData.phone}
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
                      placeholder="example@mail.ru"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="faculty" className="form-label">Факультет</label>
                    <select
                      className="form-select"
                      id="faculty"
                      name="faculty"
                      value={formData.faculty}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Выберите факультет</option>
                      <option value="Биологический">Биологический</option>
                      <option value="Биотехнологический">Биотехнологический</option>
                      <option value="ВМК">ВМК</option>
                      <option value="ВШБ">ВШБ</option>
                      <option value="ВШГАудит">ВШГАудит</option>
                      <option value="ВШИБ">ВШИБ</option>
                      <option value="ВШКПиУГС">ВШКПиУГС</option>
                      <option value="ВШП">ВШП</option>
                      <option value="ВШССН">ВШССН</option>
                      <option value="ВШТ">ВШТ</option>
                      <option value="ВШУИ">ВШУИ</option>
                      <option value="Географический">Географический</option>
                      <option value="Геологический">Геологический</option>
                      <option value="Журналистики">Журналистики</option>
                      <option value="Искусств">Искусств</option>
                      <option value="ИСАА">ИСАА</option>
                      <option value="Исторический">Исторический</option>
                      <option value="Мех.-математический">Мех.-математический</option>
                      <option value="МШЭ">МШЭ</option>
                      <option value="Политологии">Политологии</option>
                      <option value="Почвоведения">Почвоведения</option>
                      <option value="Психологии">Психологии</option>
                      <option value="Социологический">Социологический</option>
                      <option value="ФББ">ФББ</option>
                      <option value="ФГП">ФГП</option>
                      <option value="ФГУ">ФГУ</option>
                      <option value="Физический">Физический</option>
                      <option value="Филологический">Филологический</option>
                      <option value="Философский">Философский</option>
                      <option value="ФИЯиР">ФИЯиР</option>
                      <option value="ФКИ">ФКИ</option>
                      <option value="ФМП">ФМП</option>
                      <option value="ФНМ">ФНМ</option>
                      <option value="ФПО">ФПО</option>
                      <option value="ФФМ">ФФМ</option>
                      <option value="Химический">Химический</option>
                      <option value="Экономический">Экономический</option>
                      <option value="Юридический">Юридический</option>
                    </select>
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