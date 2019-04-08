import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import '../style.css';
const styles = {
  'list_item_badge' : {
    width: '16px',
    height: '16px',
    borderRadius: '10px',
    color: '#fff',
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  'waiting_download': {
    color: '#999',
  },
  'download_link': {
    cursor: 'pointer',
  },
};
const IconImage = styled.div`
  background-image: url('data:image/png;base64,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');
  width: 25px;
  height: 25px;
  display: inline-block;
  background-size: cover;
  cursor: pointer;
`;
const ListMdoal = styled.div`
  max-height: 400px;
  min-height: 200px;
  position: absolute;
  top: 30px;
  z-index: 1000;
  background-color: #fff;
  box-shadow: 0px 0px 5px #999;
  overflow: auto;
  user-select:none;
`;
const ListItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 5px;
  border-bottom: 1px solid #f0f0f0;
`;
const BlankContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #999;
`;
class AsyncDownload extends React.Component {
  state = {
    showList: false,
    result: [],
    timer: null,
  };
  componentDidMount() {
    if (this.props.interval) {
      this.setState({
        timer: window.setInterval(() => {
          this.state.showList && this.fetchData(this.props.url, this.props.urlParams);
        }, this.props.interval),
      });
    }
  }
  componentWillUnmount() {
    this.setState({
      timer: null,
    });
  }
  fetchData = (url, params) => {
    console.log('fetchData');
    this.setState({
      result: [{
        'file_name': '运单导出',
        'create_time': '2019-03-14',
        'status': 1,
        'donwload_template': 'https://baidu.com',
      }, {
        'file_name': '运单导出',
        'create_time': '2019-03-14',
        'status': 1,
        'donwload_template': '',
      }].reverse(),
    });
  }
  handleClickIcon = () => {
    const { url, fields } = this.props;
    !this.state.showList && this.fetchData(url, this.props.urlParams);
    this.setState({
      showList: !this.state.showList,
    });
  }
  handleDownloadFile = (item) => {
    const { targetPathField } = this.props;
    window.location = item[targetPathField];
  }
  render() {
    const { url } = this.props;
    return (
      <div style={{ position: 'relative' }}>
        <IconImage onClick={() => this.handleClickIcon()}></IconImage>
        {
          this.state.showList ? (
            <ListMdoal style={{ width: this.props.width, left: -this.props.width/2 + 12 }}>
              {
                this.state.result.length ? this.state.result.map((item, itemIndex) => (
                  <ListItem key={itemIndex}><span style={{ backgroundColor: this.props.primaryColor, ...styles.list_item_badge }}>{itemIndex + 1}</span>{this.props.fields.map((field, index) => (<span key={index}>{item[field]}</span>))}{item[this.props.targetPathField] ? <span style={{ color: this.props.primaryColor, ...styles.download_link }} onClick={() => this.handleDownloadFile(item)}>下载完成</span> : <span style={styles.waiting_download}>等待下载</span>}</ListItem>
                )) : null
              }
              {
                !this.state.result.length ? (<BlankContainer>暂无下载</BlankContainer>) : null
              }
            </ListMdoal>
          ) : null
        }
      </div>
    );
  }
}

AsyncDownload.propTypes = {
  url: PropTypes.string.isRequired,
  fields: PropTypes.array.isRequired,
  targetPathField: PropTypes.array.isRequired,
  primaryColor: PropTypes.string,
  width: PropTypes.number,
  urlParams: PropTypes.object,
  interval: PropTypes.any,
}
AsyncDownload.defaultProps = {
  url: '',
  fields: [],
  targetPathField: '',
  primaryColor: '#ff0000',
  width: 200,
  urlParams: {},
  interval: null,
}

export default AsyncDownload;
