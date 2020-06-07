import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';

import Restaurants from 'components/Restaurants';

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Рестораны" />
      <Restaurants />
    </Layout>
  );
};

export default IndexPage;
