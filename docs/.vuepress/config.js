module.exports = {
  base: '/docs/',
  title: '组件规范',
  description: 'Just playing around',
  head: [
    ['link',{ rel: 'icon', href: `/logo.png` }]
  ],
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '设计规范', link: '/ued/' },
      { text: '开发规范', link: '/development/' }
    ],
    sidebar: {
      '/development/': [
        '',
        'guider'
      ],
      '/ued/':[
        '',
        'list'
      ]
    }
    //   {
    //     title:'开发规范',
    //     collapsable: true,
    //     children:[
    //       '/development/',
    //       '/development/guider'
    //     ]
    //   },
    //   {
    //     title:'设计规范',
    //     collapsable: false,
    //     children:[
    //       '/ued/',
    //       '/ued/list'
    //     ]
    //   },
    // ]
  },
  markdown: {
  },
}
