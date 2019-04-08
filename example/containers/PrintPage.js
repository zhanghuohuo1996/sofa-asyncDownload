import React, { Component } from 'react';
import styled from 'styled-components';
import * as sofaPrint from '../../src/index';

const PrintPage = sofaPrint.PrintPage;
const PageBreak = sofaPrint.PageBreak;

const PageWrapper = styled.div`
  padding: 0 20px;
  background-color: #fff;
`;
const Button = styled.button`
  display: inline-block;
  font-size: 16px;
  padding: 5px 15px;
  border-radius: 5px;
  margin-top: 20px;
  margin-left: 20px;
`;
class PrintOrderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderList: [1, 2, 3, 4, 5],
      skuList: [1, 2, 3, 4],
    };
    this.handlePrint = this.handlePrint.bind(this);
    this.handleGoBack = this.handleGoBack.bind(this);
  }
  handlePrint() {
    this.refs.printComponent.printMethod();
  }
  handleGoBack() {
    window.location.href = 'https://baidu.com';
  }
  render() {
    const { orderList, skuList } = this.state;
    return (
      <div>
        {/* <Button onClick={this.handlePrint}>打印</Button> */}
        <PrintPage ref="printComponent" previewStyle={true} goBack={this.handleGoBack}>
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
                      <th>column 4</th>
                      <th>column 5</th>
                      <th>column 6</th>
                      <th>column 7</th>
                      <th>column 8</th>
                      <th>column 9</th>
                    </tr>
                  </thead>
                  <tbody>
                    {skuList.map((sku) => (
                      <tr key={sku}>
                        <td>data 1</td>
                        <td>data 2</td>
                        <td>data 3</td>
                        <td>data 4</td>
                        <td>data 5</td>
                        <td>data 6</td>
                        <td>data 7</td>
                        <td>data 8</td>
                        <td>data 9</td>
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

PrintOrderComponent.propTypes = {
}

export default PrintOrderComponent;
