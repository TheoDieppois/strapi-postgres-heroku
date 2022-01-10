module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env(
        "DATABASE_HOST",
        "ec2-52-31-217-108.eu-west-1.compute.amazonaws.com"
      ),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "da333kajoul8o4"),
      user: env("DATABASE_USERNAME", "arifmjleibrepw"),
      password: env(
        "DATABASE_PASSWORD",
        "d5fe6f5ec8eb6f4829171f52a0a28fb52298b4dbb3ce0306aafcec66a181bbe0"
      ),
      ssl: {
        rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false), // For self-signed certificates
      },
    },
  },
});
