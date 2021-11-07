// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const codeTheme = require('prism-react-renderer/themes/oceanicNext');
const npm2yarn = require('@docusaurus/remark-plugin-npm2yarn')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Concrete Form',
  tagline: 'The most popular React form libraries implemented for you',
  url: 'https://concrete-form.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'concrete-form',
  projectName: 'concrete-form-docs',

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          remarkPlugins: [
            [npm2yarn, {sync: true}]
          ],
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/concrete-form/concrete-form-docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Concrete Form',
        logo: {
          alt: 'Concrete Form Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'getting-started/intro',
            position: 'left',
            label: 'Docs',
          },
          {to: '/', label: 'Examples', position: 'left'},
          {to: '/', label: 'Demo', position: 'left'},
          {
            href: 'https://github.com/concrete-form/concrete-form',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Kevin Gilbert`,
      },
      prism: {
        theme: codeTheme,
      },
    }),
};

module.exports = config;
