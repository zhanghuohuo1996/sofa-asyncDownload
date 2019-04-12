import axios from 'axios';
import Toast from '../components/Toast';

export default function pushDownloadQueue(downloadListId, url, params = {}, callDownloadList = false, successMessage = '已加入下载队列', errorMessage = '加入队列失败') {
  if (!url || !downloadListId) {
    console.error('url和downloadListId为必传参数');
    return false;
  }
  const baseUrl = window.location.host;
  axios.get(url, baseUrl, {
    params,
  }).then((response) => {
    if (response.data.data) {
      Toast.success(successMessage);
      if (callDownloadList) {
        if (!document.getElementById(`${downloadListId}-listModal`)) {
            document.getElementById(downloadListId).click();
        }
      }
    } else {
      Toast.success(successMessage);
    }
  });
}
