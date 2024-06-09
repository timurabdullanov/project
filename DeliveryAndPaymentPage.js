import React from 'react';

const DeliveryAndPaymentPage = () => {
  return (
    <main>
      <h1>Доставка и оплата</h1>
      <section>
        <h2>Информация о доставке</h2>
        <p>Мы предлагаем различные варианты доставки для вашего удобства. Все заказы обрабатываются в течение 1-2 рабочих дней.</p>
        <ul>
          <li>Курьерская доставка: 300 $ (1-2 дня)</li>
          <li>Почтовая доставка: 150 $ (3-5 дней)</li>
          <li>Самовывоз: бесплатно</li>
        </ul>
      </section>
      <section>
        <h2>Способы оплаты</h2>
        <p>Мы принимаем следующие способы оплаты:</p>
        <ul>
          <li>Банковская карта (Visa, MasterCard, Kaspi )</li>
          <li>Электронные кошельки (Яндекс.Деньги, WebMoney, QIWI)</li>
          <li>Наличные при получении</li>
        </ul>
      </section>
    </main>
  );
};

export default DeliveryAndPaymentPage;
