import React from 'react';
import { useLocation } from 'react-router-dom';

const ContactInfoPage = () => {
  const location = useLocation();
  const { name, email, message } = location.state || {};

  return (
    <main>
      <h1>Информация о контакте</h1>
      {name && email && message ? (
        <div>
          <p><strong>Имя:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Сообщение:</strong> {message}</p>
        </div>
      ) : (
        <p>Нет данных для отображения.</p>
      )}
    </main>
  );
};

export default ContactInfoPage;
