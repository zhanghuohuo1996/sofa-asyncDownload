# sofa-asyncdownload
React Async Download component.

# 开发

npm link
```

## 发布

```bash
npm run build

npm login

npm publish
```

## 安装

```bash
npm install sofa-asyncdownload
```

## 使用

```js
const statusMap = {
  0: '等待下载',
  1: '正在下载',
  2: '下载失败',
  3: '下载完成',
};
<AsyncDownload
  downloadListId="downloadList"
  url='/test/getdownloadlist'
  processField={'process'}
  statusField={'status'}
  statusMap={statusMap}
  maxCount={10}
  interval={2000}
  width={300}
  fields={['file_name', 'create_time']}
  targetPathField={'donwload_template'}
  successColor={'#219040'} />

```
```js
pushDownloadQueue('downloadList', '/test/pushToDownloadList', params, true);

```

## API

1. AsyncDownload组件

    异步下载列表组件，参照使用参数，部分参数可缺省；
    
2. pushDownloadQueue函数

    下载操作函数，部分参数可缺省；
    参数说明：
    |参数|类型|说明
    |:--:|:-----|:-----|:-----|
    |**`downloadListId`**|string|指定下载操作进入的下载列表组件的id；required
    |**`url`**|string|下载操作的异步接口；required
    |**`params`**|object|接口携带参数: not required
    |**`autoCallDownloadList`**|boolean|加入下载队列成功后是否自动显示下载列表 not required
    |**`successMessgae`**|string|加入下载队列成功后的文案提示 not required
    |**`errorMessgae`**|string|加入下载队列失败后的文案提示 not required

    
### AsyncDownload组件接收的props

|属性|类型|说明
|:--:|:-----|:-----|:-----|
|**`downloadListId`**|string|下载列表的id;required
|**`url`**|string|下载列表的接口地址;reuqired
|**`processField`**|number|代表进度的字段(0-100),缺省代表没有进度功能；not required
|**`statusField`**|any|代表条目状态的字段，字段值为statusMap的key; required
|**`statusMap`**|object|状态代表的实际含义；required
|**`maxCount`**|number|列表显示的最大条数，缺省显示全部；not required
|**`interval`**|number|在列表显示状态下，轮询的时间间隔,单位是毫秒，缺省表示显示状态下不轮询接口；not required
|**`width`**|number|列表的宽度；not required
|**`fields`**|array|列表中展示的字段的数组；not required
|**`targetPathField`**|string|下载成功后，文件下载连接的字段；required
|**`successColor`**|string|进度和下载完成的颜色；not required
