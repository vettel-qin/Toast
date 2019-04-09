import React from 'react';
import ReactDOM from 'react-dom';
import { Type, Option } from './PropsType';
import Toast from './Toast';

let toastInstance: Toast | null = null;

function notice(type: Type, { content, duration, onClose }: Option) {
  if (toastInstance) {
    toastInstance.fade(() => {
      render(onClose);
    })
  } else {
    render(onClose);
  }

  function render(callback?: () => void) {
    const container = document.createElement('div');
    document.body.appendChild(container);

    const component = (
      <Toast
        type={type}
        content={content}
        duration={duration}
        onClose={() => {
          ReactDOM.unmountComponentAtNode(container);
          document.body.removeChild(container);
          if (callback) {
            callback()
          }
        }}
        ref={ref => {
          toastInstance = ref;
        }}
      />
    );

    ReactDOM.render(component, container);
  }
}

export default {
  info(content: string, duration?: number, onClose?: () => void) {
    notice(Type.Info, { content, duration, onClose })
  },
  success(content: string, duration?: number, onClose?: () => void) {
    notice(Type.Success, { content, duration, onClose })
  },
  error(content: string, duration?: number, onClose?: () => void) {
    notice(Type.Error, { content, duration, onClose })
  },
  loading(content: string, onClose?: () => void) {
    notice(Type.Loading, { content, onClose })
  },
  hide() {
    if (toastInstance) {
      toastInstance.fade(toastInstance.props.onClose);
      toastInstance = null;
    }
  }
};