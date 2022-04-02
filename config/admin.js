module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e3da677af3899baa44b7d1ae075f19f5'),
  },
});
