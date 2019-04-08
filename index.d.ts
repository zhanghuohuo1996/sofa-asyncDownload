import * as React from 'react';
import * as PropTypes from 'prop-types';

/*~ This declaration specifies that the class constructor function
 *~ is the exported object from the file
 */
export = sofaAsyncDownload
declare module sofaAsyncDownload {

  export function PushTaskQueue(): React.ReactElement<any, any>;

  export class AsyncDownload extends React.Component<AsyncDownload.AsyncDownloadProps, any> {
    static propTypes: {
      // previewStyle: PropTypes.Requireable<boolean>,
      // pageWidth: PropTypes.Requireable<number>,
      // goBack: PropTypes.Requireable<AsyncDownload.PrintCallbackFn>,
      // onBeforePrint: PropTypes.Requireable<AsyncDownload.PrintCallbackFn>,
      // onAfterPrint: PropTypes.Requireable<AsyncDownload.PrintCallbackFn>,
      // showGoBackButton: PropTypes.Requireable<boolean>,
    };
    static defaultProps: Partial<AsyncDownload.AsyncDownloadProps>;
    private componentRef;

    // printMethod(): () => void;
    // handlePrint(): () => void;
    // handleGoBack(): () => void;
    render(): React.ReactElement<any, any>;
  }

  namespace AsyncDownload {
    type PrintCallbackFn = () => void;

    export interface AsyncDownloadProps {
      // previewStyle: boolean,
      // pageWidth: number,
      // goBack: PrintCallbackFn,
      // showGoBackButton: boolean,
      // onBeforePrint?: PrintCallbackFn,
      // onAfterPrint?: PrintCallbackFn,
    }
  }
}
