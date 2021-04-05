# bundle-webpack4: vue3 + element-plus

### QA
1. element plus 被单独打包出去，已经是mini版，size还不小，每次打包时，对应的版本号是否会变？
> 个人观点：    
>> element plus 一旦应用到平台开发中，一般情况下，较少的会去升级    
>> webpack4 更新打包文件version
name: 每次都会改变
chunk-name: 是根据依赖构建图来作为判断
content-name: 根据文件内容hash是否改变来判断，实践&社区证明 不好使

2. 注意还有一种假象，会被` chunks: 'initial'` 收录
```js
const _import = (file: string) => import('@/views/' + file + '.vue');

// {
//   name: 'updateauth',
//   path: '/updateauth',
//   meta: { title: '临时权限上传', icon: 'el-icon-s-home' },
//   component: () => _import('UpdateAuth/index'),
// },
```

`dynamic imort` 在TC95的Stage4阶段
实际的逻辑是，会扫描


打包？
将大文件的诞生扼杀在摇篮里
vite webpack4 webpack5 针对CJS
我已经做了Code Spliting，为什么还那么大
http://wiki.ziroom.com/pages/viewpage.action?pageId=632550472

0. 实践1%的web打包体系
1. 罗列打包问题
2. 罗列现在各种打包骚操作，这是一篇https://www.jianshu.com/p/a64735eb0e2b/  将react单独entry一下

3. 打包实验
webapck4 打包vue3 + elementPlus，
得出哪些指标：webpack.output.js  splitChunks 的chunks和priority权重
initial webapck分析图+main.ts的分析图，实践证明ok的
async: 动态的
webpack4 打包react + ant Design

vite打包vue3 + elementPlus
vite打包react + angt Design

4. code split, tree-shaking

结论：叭叭叭叭叭叭叭叭，将18年时候的话题，归归类

蹭热度：现21年的热门话题是打包工具的编译速度
webpack5 消息