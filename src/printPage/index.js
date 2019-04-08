import React from 'react';
import PropTypes from 'prop-types';
import ReactToPrint from "react-to-print";
import styled, { css }  from 'styled-components';
import '../style.css';

const PreviewBox = styled.div`
  height: 100%;
  box-sizing: content-box;
  background-color: #f5f5f5;
  ${(props) => props.pageWidth && css`
    width: ${props.pageWidth}px;
    padding: 0 calc((100% - ${props.pageWidth}px)/2);
  `}
`;

const ActionBar = styled.div`
  ${(props) => props.pageWidth && css`
    width: ${props.pageWidth}px;
  `}
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  z-index: 1;
  background: #f4f4f4;
  box-shadow: 0 3px 5px #ccc;
`;

const Button = styled.button`
  line-height: 1.2;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  padding: 0 15px;
  font-size: 12px;
  border-radius: 4px;
  height: 28px;
  user-select: none;
  transition: all .3s cubic-bezier(.645,.045,.355,1);
  color: rgba(0,0,0,.65);
  background-color: #fff;
  border-color: #d9d9d9;
  outline: none;
  margin-right: 10px;
`;
class PrintPage extends React.Component {

  printMethod = () => {
    document.getElementById('sofa-print-button').click();
  }

  handlePrint = () => {
    this.printMethod();
  }
  handleGoBack = () => {
    this.props.goBack();
  }

  render() {
    const { previewStyle, pageWidth, showGoBackButton } = this.props;
    return (
      <div>
        <ReactToPrint
          trigger={() => <a style={{ visibility: 'hidden' }} id="sofa-print-button" href="#"></a>}
          content={() => this.componentRef}
          onAfterPrint={this.props.onAfterPrint}
          onBeforePrint={this.props.onBeforePrint}
        />
        {previewStyle ?
          <PreviewBox pageWidth={pageWidth}>
            <ActionBar pageWidth={pageWidth}>
              {showGoBackButton && <Button onClick={this.handleGoBack}>返回</Button>}
              <Button onClick={this.handlePrint}>打印</Button>
            </ActionBar>
            <div style={{ height: '53px' }} />
            <div ref={(el) => (this.componentRef = el)}>
              {this.props.children}
            </div>
          </PreviewBox> :
          <div ref={(el) => (this.componentRef = el)}>
            {this.props.children}
          </div>
        }
      </div>
    );
  }
}

PrintPage.propTypes = {
  previewStyle: PropTypes.bool,
  pageWidth: PropTypes.number,
  goBack: PropTypes.func,
  onBeforePrint: PropTypes.func,
  onAfterPrint: PropTypes.func,
  showGoBackButton: PropTypes.bool,
}
PrintPage.defaultProps = {
  previewStyle: false,
  pageWidth: 764,
  showGoBackButton: true,
  goBack: undefined,
  onBeforePrint: undefined,
  onAfterPrint: undefined,
}

export default PrintPage;
