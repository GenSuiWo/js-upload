# 文件上传方法
这个TypeScript库为文件上传功能提供了一个简单的方法

## 安装
你可以通过npm安装这个包：
``` bash
npm i @lestertheo/js-upload
```
## 使用
导入包并使用upload函数初始化文件上传:
```javascript
import { upload } from '@lestertheo/js-upload';
// 例子
const attribute = {
  multiple: true,
  accept:".png, .txt, .gif"
};

upload(attribute, response => {
    if (response.status) {
        console.log('File upload successful!');
        console.log('Uploaded files:', response.list);
    } else {
        console.error('File upload failed:', response.message);
    }
});
```

## API
## upload(attribute: Object, callback: Function)

### 参数
 - `attribute`: (Object) file input元素的原生属性
 - `callback`: (Function) 接收上传响应的回调函数
### 返回值
 - `status` (boolean):上传成功(true)或失败(false)
 - `message`(string):上传失败时的错误消息。
 - `filelist` (Array):上传文件的数组，包含额外的元数据