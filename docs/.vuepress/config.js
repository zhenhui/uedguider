module.exports = {
  base: '/guider/',
  title: '组件规范',
  dest: './guider',
  description: '小菜设计规范beta',
  head: [
    ['link',{ rel: 'icon', href: `/logo.png` }]
  ],
  themeConfig: {
    activeHeaderLinks: true,
    nav: [
      { text: '主页', link: '/' },
      { text: '设计规范', link: '/ued/' },
      { text: '开发规范', link: '/development/' }
    ],
    sidebar: {
      '/development/': [
        {
          title: '开发指引',
          collapsable: true,
          children: [
            '',
            'guider'
          ]
        }
      ],
      '/ued/':[
        {
          title: '设计规范',
          collapsable: false,
          children:[
            ''
          ]
        }
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
   lineNumbers: true
  },
}
