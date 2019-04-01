const path = require('path')
const fs = require('fs')
// fs.readFile(path.join(__dirname, '../install/README.md'),(err,res)=>{
//   console.log('res',res)
// })
// console.log(path.join(__dirname, '../install/README.md'))
module.exports = {
  title: 'bees',
  description: '一个有意思的ui库',
  themeConfig: {
    nav: [
      {text: '主页', link: '/'},
      {text: '文档', link: '/guide/'},
      {text: '交流', link: 'https://google.com'},
    ],
    sidebar: [
      {
        title: '入门',
        collapsable: false,
        children: [
          '/install/'
        ]
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          '/components/button/'
        ]
      },
    ]
  }
}