# sofa-print
React print component.

## 开发&调式


```bash
# 在http://localhost:8081端口打开示例页面

npm run dev

# 将打包之后的组件映射到 global node_modules 中

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
npm install sofa-print
```

## 使用

1. 无预览样式

```js
import React, { Component } from 'react';
import { PrintPage, PageBreak } from 'sofa-print';
import 'sofa-print/dist/main.css';

class PrintOrderDetail extends Component {
  this.state = {
      orderList: [1, 2, 3, 4, 5],
      skuList: [1, 2, 3, 4],
    };
  handlePrin = () => {
    this.refs.printComponent.printMethod();
  }
  render() {
    const { orderList, skuList } = this.state;
    return (
      <div>
        <button onClick={this.handlePrint}>打印</button>
        <PrintPage ref="printComponent">
          <div>
            {orderList.map((order) => (
              <div key={order}>
                <h2>order detail table</h2>
                <table>
                  <thead>
                    <tr>
                      <th>column 1</th>
                      <th>column 2</th>
                      <th>column 3</th>
                    </tr>
                  </thead>
                  <tbody>
                    {skuList.map((sku) => (
                      <tr key={sku}>
                        <td>data 1</td>
                        <td>data 2</td>
                        <td>data 3</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <PageBreak />
              </div>
            ))}
          </div>
        </PrintPage>
      </div>
    );
  }
}

```

2. 有预览样式


```js
import React, { Component } from 'react';
import styled from 'styled-components';
import { PrintPage, PageBreak } from 'sofa-print';
import 'sofa-print/dist/main.css';

const PageWrapper = styled.div`
  padding: 0 20px;
  background-color: #fff;
`;

class PrintOrderComponent extends Component {
  this.state = {
      orderList: [1, 2, 3, 4, 5],
      skuList: [1, 2, 3, 4],
    };
  handleGoBack = () => {
    window.location.href = 'https://baidu.com';
  }
  render() {
    const { orderList, skuList } = this.state;
    return (
      <div>
        <PrintPage previewStyle={true} goBack={this.handleGoBack}>
          {orderList.map((order) => (
            <div key={order}>
              <PageWrapper>
                <h2>order detail table</h2>
                <table>
                  <thead>
                    <tr>
                      <th>column 1</th>
                      <th>column 2</th>
                      <th>column 3</th>
                    </tr>
                  </thead>
                  <tbody>
                    {skuList.map((sku) => (
                      <tr key={sku}>
                        <td>data 1</td>
                        <td>data 2</td>
                        <td>data 3</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </PageWrapper>
              <PageBreak />
            </div>
          ))}
        </PrintPage>
      </div>
    );
  }
}

export default PrintOrderComponent;

```

## API

1. PrintPage组件

    打印组件，包裹需要打印的元素的容器组件，配合printMethod()方法使用；

2. PageBreak组件

    分页组件，插入到需要分页的元素后，之后的内容会另起一页开始打印；

3. printMethod()方法

    PrintPage组件的打印方法，在自定义的打印按钮上调用该方法，可以触发打印操作；
    
### PrintPage组件接收的props

|属性|类型|默认值|说明
|:--:|:-----|:-----|:-----|
|**`onBeforePrint`**|function|undefined|打印动作之前的回调函数
|**`previewStyle`**|boolean|false|是否展示预览样式，设置为true，会展示‘打印’和‘返回’按钮
|**`pageWidth`**|number|764|设置打印纸的宽度，previewStyle为true时有效
|**`showGoBackButton`**|boolean|true|是否展示返回按钮，previewStyle为true时有效
|**`goBack`**|function|undefined|点击返回按钮的回调函数，previewStyle为true时有效
