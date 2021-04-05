import path from 'path';
import posts from './src/data/posts.json';
import devops from './src/data/devops.json'
import veaasData from './src/data/veaas.json'
import ocatData from './src/data/ocat.json'

// Typescript support in static.config.js is not yet supported, but is coming in a future update!

export default {
  entry: path.join(__dirname, `src`, `index.jsx`),
  getRoutes: () => [
    {
      children: posts.map((post) => ({
        getData: () => ({
          post,
        }),
        path: `/post/${post.id}`,
        template: `src/containers/Post`,
      })),
      getData: () => ({
        posts,
      }),
      path: `/blog`,
    },
    {
      children: devops.map((devop) => ({
        getData: () => ({
          devop,
        }),
        path: `/${devop.id}`,
        template: `src/containers/Devop`,
      })),
      getData: () => ({
        devops,
      }),
      path: `/devops`,
    }, 
    {
      children: veaasData.map((veaas) => ({
        getData: () => ({
          veaas,
        }),
        path: `/${veaas.id}`,
        template: `src/containers/veaasItem`,
      })),
      getData: () => ({
        veaasData,
      }),
      path: `/veaas`,
    },  
    {
      children: ocatData.map((ocat) => ({
        getData: () => ({
          ocat,
        }),
        path: `/${ocat.id}`,
        template: `src/containers/ocatItem`,
      })),
      getData: () => ({
        ocatData,
      }),
      path: `/ocat`,
    },        
  ],
  plugins: [
    [
      require.resolve(`react-static-plugin-source-filesystem`),
      {
        location: path.resolve(`./src/pages`),
      },
    ],
    require.resolve(`react-static-plugin-sass`),
    require.resolve(`react-static-plugin-reach-router`),
    require.resolve(`react-static-plugin-sitemap`),
  ],
};
