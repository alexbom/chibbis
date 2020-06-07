const path = require('path');
const fetch = require(`node-fetch`);

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules']
    }
  });
};

exports.sourceNodes = async ({
                               actions: { createNode },
                               createContentDigest,
                             }) => {
  const restaurantsFetch = await fetch('https://front-task.chibbistest.ru/api/v1/restaurants');
  const hitsFetch = await fetch('https://front-task.chibbistest.ru/api/v1/hits');
  const reviewsFetch = await fetch('https://front-task.chibbistest.ru/api/v1/reviews');
  const restaurants = await restaurantsFetch.json();
  const hits = await hitsFetch.json();
  const reviews = await reviewsFetch.json();

  createNode({
    restaurants,
    hits,
    reviews,
    // required fields
    id: `restaurant-api`,
    parent: null,
    children: [],
    internal: {
      type: `api`,
      contentDigest: createContentDigest(restaurants, hits, reviews),
    },
  })
};
