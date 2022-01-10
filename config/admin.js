module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e7e153914350cf8320b23b0189a4a60a'),
  },
});
