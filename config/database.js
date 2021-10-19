module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env("DATABASE_HOST", "linux"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "admin"),
        username: env("DATABASE_USERNAME", "admin"),
        password: env("DATABASE_PASSWORD", "admin123"),
      },
      options: {
        useNullAsDefault: true,
        debug: true,
      },
    },
  },
});
