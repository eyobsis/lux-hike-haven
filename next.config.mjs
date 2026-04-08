/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.luxtraveler.eu",
          },
        ],
        destination: "https://luxtraveler.eu/:path*",
        permanent: true,
      },
      {
        source: "/wandelen-in-luxemburg",
        destination: "/nl/wandelen-in-luxemburg",
        permanent: true,
      },
      {
        source: "/wanderen-in-luxemburg",
        destination: "/nl/wandelen-in-luxemburg",
        permanent: true,
      },
      {
        source: "/wanderen-in-luxembourg",
        destination: "/nl/wandelen-in-luxemburg",
        permanent: true,
      },
      {
        source: "/wandelroutes-luxemburg",
        destination: "/nl/wandelroutes-luxemburg",
        permanent: true,
      },
      {
        source: "/wandelweekend-luxemburg",
        destination: "/nl/wandelweekend-luxemburg",
        permanent: true,
      },
      {
        source: "/mullerthal-wandeling",
        destination: "/nl/mullerthal-wandeling",
        permanent: true,
      },
      {
        source: "/overnachten-bij-wandelroutes-luxemburg",
        destination: "/nl/overnachten-bij-wandelroutes-luxemburg",
        permanent: true,
      },
      {
        source: "/hiking-in-luxembourg",
        destination: "/en/hiking-in-luxembourg",
        permanent: true,
      },
      {
        source: "/luxembourg-hiking-trails",
        destination: "/en/luxembourg-hiking-trails",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
