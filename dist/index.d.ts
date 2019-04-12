import * as React from 'react';
import * as PropTypes from 'prop-types';

/*~ This declaration specifies that the class constructor function
 *~ is the exported object from the file
 */
declare module SofaAsyncDownload {

  export function pushDownloadQueue(): React.ReactElement<any, any>;

  export class AsyncDownload extends React.Component<AsyncDownload.AsyncDownloadProps, any> {
    static propTypes: {
      downloadListId: PropTypes.Requireable<string>,
      url: PropTypes.Requireable<string>,
      statusField: PropTypes.Requireable<string>,
      statusMap: PropTypes.Requireable<object>,
      targetPathField: PropTypes.Requireable<string>,
      processField: string,
      maxCount: number,
      interval: number,
      width: number,
      fields: any,
      successColor: string,
    };
    static defaultProps: Partial<AsyncDownload.AsyncDownloadProps>;
    handleDownloadFile(item: object): () => void;
    handleClickIcon(): () => void;
    fetchData(url: string, params: object): () => void;
    componentDidMount(): () => void;
    componentWillUnmount(): () => void;
    render(): React.ReactElement<any, any>;
  }

  namespace AsyncDownload {
    export interface AsyncDownloadProps {
        downloadListId: string,
        url: string,
        statusField: string,
        statusMap: object,
        targetPathField: string,
    }
  }
}
export = SofaAsyncDownload;
