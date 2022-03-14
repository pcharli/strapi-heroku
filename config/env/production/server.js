module.exports = ({ env }) => ({
    host: env('https://strapi-cepegra.herokuapp.com'),
    port: env.int('PORT', 1337),
    app: {
      keys: env.array('APP_KEYS',["testKey1","testKey2"]),
    },
  });
  