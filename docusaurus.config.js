module.exports = {
  title: 'MOVIE WORLD',
  tagline: 'DOWNLOAD OR WATCH LATEST MOVIE ',
  url: 'https://movie-world.vercel.app',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Movie world',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/doc1',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://klmovie.ml',
          label: 'KL MOVIE',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/doc1',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'TELEGRAM',
              href: 'https://t.me/cfchatofficial',
            },
            {
              label: 'KL MOVIES',
              href: 'https://klmovie.ml',
            },
            {
              label: 'movie',
              href: 'https://edapazhassimedia.ml',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'music',
              href: 'https://musicder.ml',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} EDAPAZHASSI MEDIA, Inc. `,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://edapazhassimedia.ml',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://edapazhassimedia.blogspot.com',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
