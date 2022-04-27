// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'learn.wangnelson.xyz',
  tagline: 'Your success is my #1 priority!',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'NeneWang', // Usually your GitHub org/user name.
  projectName: 'programming-docs', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          path: 'docs',
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'python',
        path: 'python',
        routeBasePath: 'python',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'java',
        path: 'java',
        routeBasePath: 'java',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'instructor',
        path: 'instructor',
        routeBasePath: 'instructor',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'misc',
        path: 'misc',
        routeBasePath: 'misc',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ]

  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'learn.wangnelson.xyz',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [{
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'General',
          },
          {
            to: '/python/Intro',
            label: 'Python',
            position: 'left'
          },
          {
            to: '/java/Intro',
            label: 'Java',
            position: 'left'
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'left'
          },
          // {
          //   href: 'https://discord.gg/pGaJqmbJSm',
          //   label: 'Discord',
          //   position: 'right',
          // },
          {
            href: 'https://discord.gg/pGaJqmbJSm',
            label: 'Submit an assigment',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [{
            title: 'Class Notes',
            items: [{
                label: 'Python',
                to: '/python/intro',
              },
              {
                label: 'Java',
                to: '/java/intro',
              },
            ],
          }, {
            title: 'Community',
            items: [{
              label: 'Discord',
              href: 'https://discord.gg/pGaJqmbJSm',
            }, ],
          },
          {
            title: 'Contact',
            items: [

              {
                label: 'Instructor Contact Information',
                to: '/blog/contact',
              },
              {
                label: 'Ask a question',
                href: 'https://docs.google.com/forms/d/e/1FAIpQLSddepUVJeAYT6WRtZR48EKSe9XRbJ-hxFLGYMaMl1F8Ybp9hA/viewform?usp=sf_link',
              }, {
                label: 'Provide Anonymous Feedback',
                href: 'https://docs.google.com/forms/d/e/1FAIpQLSd3ybWqqgq5rV2XKiws1TGvp7fZF2Iz4zVSq18Kat4rMPQkHA/viewform?usp=sf_link',
              },
            ],
          },
        ],
        copyright: `Your success is my #1 priority!`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;