import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';

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
  'display_content': {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  }
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
  ::-webkit-scrollbar {
    width: 0;
  }
  max-height: 400px;
  min-height: 200px;
  position: absolute;
  top: 30px;
  z-index: 1000;
  background-color: #fefefe;
  box-shadow: 0px 2px 20px #999; -webkit-box-shadow:0px 2px 20px #999; box-shadow:0px 2px 20px #999;
  overflow: auto;
  user-select:none;
`;
const ListItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 10px 5px 15px;
  // border-bottom: 1px solid #f0f0f0;
  color: #666;
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
    const baseUrl = window.location.host;
    axios.get(url, baseUrl, {
      params,
    }).then((response) => {
      response.data = {};
      response.data.data = [{
        'file_name': '运单导出什么测试长度',
        'create_time': '2019-03-14',
        'status': 2,
        'donwload_template': 'baidu.com',
      }, {
        'file_name': '运单导出',
        'create_time': '2019-03-14',
        'status': 2,
        'donwload_template': 'baidu.com',
      }, {
        'file_name': '运单导出',
        'create_time': '2019-03-14',
        'status': 2,
        'donwload_template': 'baidu.com',
      },{
        'file_name': '运单导出',
        'create_time': '2019-03-14',
        'status': 2,
        'donwload_template': 'baidu.com',
      }, {
        'file_name': '运单导出',
        'create_time': '2019-03-14',
        'status': 2,
        'donwload_template': 'baidu.com',
      },{
        'file_name': '运单导出',
        'create_time': '2019-03-14',
        'status': 2,
        'donwload_template': 'baidu.com',
      }, {
        'file_name': '运单导出',
        'create_time': '2019-03-14',
        'status': 2,
        'donwload_template': 'baidu.com',
      }, {
        'file_name': '运单导出',
        'create_time': '2019-03-14',
        'status': 1,
        'donwload_template': '',
      }, {
        'file_name': '运单导出',
        'create_time': '2019-03-14',
        'status': 0,
        'donwload_template': '',
      }, {
        'file_name': '运单导出',
        'create_time': '2019-03-14',
        'status': 3,
        'donwload_template': 'baidu.com',
        'process': 100,
      }, {
        'file_name': '运单导出',
        'create_time': '2019-03-14',
        'status': 3,
        'donwload_template': 'baidu.com',
        'process': 100,
      }, {
        'file_name': '运单导出',
        'create_time': '2019-03-14',
        'status': 3,
        'donwload_template': 'baidu.com',
        'process': 100,
      }, {
        'file_name': '运单导出',
        'create_time': '2019-03-14',
        'status': 2,
        'donwload_template': 'baidu.com',
      }, {
        'file_name': '运单导出',
        'create_time': '2019-03-14',
        'status': 3,
        'donwload_template': 'baidu.com',
        'process': 100,
      }, {
        'file_name': '运单导出',
        'create_time': '2019-03-14',
        'status': 2,
        'donwload_template': 'baidu.com',
      }, {
        'file_name': '运单导出',
        'create_time': '2019-03-14',
        'status': 1,
        'donwload_template': 'baidu.com',
        'process': 80,
      }, {
        'file_name': '运单导出',
        'create_time': '2019-03-14',
        'status': 1,
        'donwload_template': 'baidu.com',
        'process': 50,
      }, {
        'file_name': '运单导出什么测试长度的的我',
        'create_time': '2019-03-14',
        'status': 1,
        'donwload_template': 'baidu.com',
        'process': 80,
      }, {
        'file_name': '运单长度的的我',
        'create_time': '2019-03-14',
        'status': 0,
        'donwload_template': '',
        'process': 0,
      }];
      if (Array.isArray(response.data.data)) {
        const data = this.props.maxCount ? response.data.data.reverse().slice(0, this.props.maxCount) : response.data.data.reverse();
        this.setState({
          result: data,
        });
      }
    })
    .catch(function (error) {
      console.log(error);
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
    const length = Object.keys(this.props.statusMap || {}).length - 1;
    const completeKey = Object.keys(this.props.statusMap || {})[length];
    return (
      <div style={{ position: 'relative' }}>
        <IconImage id={this.props.downloadListId} onClick={() => this.handleClickIcon()}></IconImage>
        {
          this.state.showList ? (
            <ListMdoal id={`${this.props.downloadListId}-listModal`} style={{ width: this.props.width, left: -this.props.width + 12 }}>
              {
                this.state.result.length ? this.state.result.map((item, itemIndex) => (
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <ListItem key={itemIndex}><span style={{ backgroundColor: '#999', ...styles.list_item_badge }}>{itemIndex + 1}</span>
                    {this.props.fields.map((field, index) => (<span style={{ width: (this.props.width - 30) / (this.props.fields.length + 1), ...styles.display_content}} key={index}>{item[field]}</span>))}
                    {/* <span style={{ color: this.props.successColor, ...styles.download_link }} onClick={() => this.handleDownloadFile(item)}>下载完成</span><span style={styles.waiting_download}>等待下载</span> */}
                    {
                      item[this.props.statusField] == completeKey ? <span style={{ color: this.props.successColor, ...styles.download_link }} onClick={() => this.handleDownloadFile(item)}>{this.props.statusMap[item[this.props.statusField]]}</span> : <span style={styles.waiting_download}>{this.props.statusMap[item[this.props.statusField]]}</span>
                    }
                    </ListItem>
                  {this.props.processField ? (item[this.props.processField] ? <div style={{ display: 'flex', flexDirection: 'row' }}><div style={{ width: `${item[this.props.processField] || 0}%`, height: 2, backgroundColor: this.props.successColor }}></div><div style={{ width: `${100 - item[this.props.processField] || 0}%`, height: 2, backgroundColor: '#f0f0f0' }}></div></div> : <div style={{ width: '100%', height: 2, backgroundColor: '#f0f0f0' }}></div>) : <div style={{ width: '100%', height: 2, backgroundColor: '#f0f0f0' }}></div>}
                  </div>
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
  successColor: PropTypes.string,
  width: PropTypes.number,
  urlParams: PropTypes.object,
  interval: PropTypes.any,
  statusField: PropTypes.string,
  statusMap: PropTypes.object,
  maxCount: PropTypes.number,
  processField: PropTypes.string,
  downloadListId: PropTypes.string.isRequired,
}
AsyncDownload.defaultProps = {
  url: '',
  fields: [],
  targetPathField: '',
  successColor: '#219040',
  width: 200,
  urlParams: {},
  interval: null,
  statusField: '',
  statusMap: {},
  maxCount: null,
  processField: '',
  downloadListId: '',
}

export default AsyncDownload;
