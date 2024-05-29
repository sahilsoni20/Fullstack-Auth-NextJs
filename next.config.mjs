// next.config.mjs
export default {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/signup',
          permanent: true,
        },
      ];
    },
  };
  