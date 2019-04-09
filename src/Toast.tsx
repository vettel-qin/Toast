import React, { PureComponent } from 'react';
import { Option, Type } from './PropsType';
import Icon from './Icon';
import s from './Toast.scss';

export interface Props extends Option {
  type: Type;
  onClose: () => void;
}

class Toast extends PureComponent<Props, {}> {
  public static defaultProps = {
    duration: 3000
  }

  public componentDidMount() {
    this.fade(() => {
      if (this.props.type !== Type.Loading) {
        this.startTimer();
      }
    })
  }

  public fade(callback: () => void) {
    callback();
  }

  private startTimer() {
    const { duration, onClose } = this.props;
    setTimeout(() => {
      this.fade(onClose);
    }, duration)
  }

  public render() {
    const { content, type } = this.props;
    return(
      <div className={s.toast_mask}>
        <div className={s.toast_message}>
        {
          type !== Type.Info && <Icon type={type} />
        }
          <div>{content}</div>
        </div>
      </div>
    )
  }
}

export default Toast;