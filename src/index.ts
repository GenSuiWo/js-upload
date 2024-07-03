interface UploadAttributes {
  [key: string]: string;
}

interface UploadResult {
  status: boolean;
  message: string;
  list: File[];
}

export const upload = (attribute: UploadAttributes, callback: (result: UploadResult) => void): void => {
  try {
    // 使用类型断言确保 mergedAttributes 可以作为字符串索引类型使用
    const mergedAttributes = { ...attribute, type: 'file', style: 'display: none' } as { [key: string]: string };
    const input: HTMLInputElement = document.createElement('input');
    
    // 设置 input 元素的属性
    Object.keys(mergedAttributes).forEach(key => input.setAttribute(key, mergedAttributes[key]));
    
    // 将 input 元素添加到页面中并点击触发文件选择
    document.body.appendChild(input);
    input.click();

    // 当文件选择变化时的事件处理函数
    const inputChange = (event: Event): void => {
      const target = event.target as HTMLInputElement;
      const files: File[] = Array.from(target.files || []);
      
      // 调用回调函数，传递文件列表信息
      callback({
        status: true,
        message: 'success',
        list: files
      });

      // 移除事件监听器和 input 元素
      input.removeEventListener('change', inputChange);
      document.body.removeChild(input);
    };

    // 添加文件选择变化的事件监听器
    input.addEventListener('change', inputChange);
  } catch (error) {
    // 捕获异常并调用回调函数，传递错误信息
    callback({
      status: false,
      message: (error as Error).message || 'Unknown error',
      list: []
    });
  }
};
