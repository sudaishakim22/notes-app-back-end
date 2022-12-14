require("dotenv").config();
const Hapi = require("@hapi/hapi");
const routes = require("./routes");
const db = require("./db");

const { PORT, MONGODB } = process.env;
const port = PORT || 8080;

const init = async () => {
  // db(MONGODB);
  const server = Hapi.server({
    port: port,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server running on ${server.info.uri}`);
};

init();
