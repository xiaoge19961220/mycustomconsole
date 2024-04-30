# 自用自定义的console

1. ## 安装
   ```js
   npm i mycustomconsole
   ```
2. ## 使用

   ```js
   //导入
   const CustomConsole = require('mycustomconsole')
   //使用
   const customConsole = new CustomConsole('====>')
   //挂载全局
   window.console = customConsole
   customConsole.log('111')
   customConsole.wain('111')
   customConsole.err('111')
   //清除log
   customConsole.clearLog
   ```
3. ## 自定义
   ```js
   //默认
   const header = 'hello'
   const styles = {
     version: {
       header:
         'padding: 2px 1px; border-radius: 3px 0 0 3px; color: #fff; background: #606060; font-weight: bold;',
       content:
         'padding: 2px 1px; border-radius: 0 3px 3px 0; color: #fff; background: #42c02e; font-weight: bold;',
     },
     info: {
       header: 'color: #fff; background: #606060; font-weight: bold;',
       content: 'color: green; font-weight: bold;',
     },
     log: {
       header: 'color: #fff; background: #606060; font-weight: bold;',
       content: 'color: #000000; font-weight: bold;',
     },
     warn: {
       header: 'color: #fff; background: #FFA500; font-weight: bold;',
       content: 'color: #000000; font-weight: bold;',
     },
     error: {
       header: 'color: #fff; background: #FF0000; font-weight: bold;',
       content: 'color: #000000; font-weight: bold;',
     },
   }
   const customConsole = new CustomConsole(header, styles)
   customConsole.version('version:1')
   ```
