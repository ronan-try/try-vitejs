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