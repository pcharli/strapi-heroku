module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '71c8149e4cc1f532d2cd2469d80229f4'),
  },
});
