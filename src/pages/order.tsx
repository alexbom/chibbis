import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';

const OrderPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Оформите заказ" />
      <h1>Тестируем Router...</h1>
    </Layout>
  );
};

export default OrderPage;
