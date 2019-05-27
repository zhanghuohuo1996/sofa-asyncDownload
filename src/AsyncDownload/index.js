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
    display: 'flex',
    height: '20px',
    alignItems: 'center',
  },
  'download_link': {
    cursor: 'pointer',
    display: 'flex',
    height: '20px',
    alignItems: 'center',
  },
  'display_content': {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    display: 'flex',
    height: '20px',
    alignItems: 'center',
  }
};
const IconImage = styled.div`
  width: 25px;
  height: 25px;
  display: inline-block;
  background-size: cover;
  cursor: pointer;
  background-image: url('data:image/png;base64,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');
`;
const ListMdoal = styled.div`
  ::-webkit-scrollbar {
    width: 3px;
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
  padding: 0px 10px 0px 15px;
  // border-bottom: 1px solid #f0f0f0;
  color: #666;
  height: 24px;
  align-items: center;
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
  constructor(props) {
    super(props);
  }
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
      <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
  targetPathField: PropTypes.string.isRequired,
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
