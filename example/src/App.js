import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Toast from '../../src';
import s from './App.scss';

class App extends Component {
  componentWillMount() {
    // Toast.loading('加载中...');
    //   setTimeout(() => {
    //     Toast.hide();
    //   }, 3000)
  }

  handleClick = type => {
    Toast[type](type);
    if (type === 'loading') {
      setTimeout(() => {
        Toast.hide();
      }, 3000);
    }
  };

  render() {
    return (
      <div className={s.container}>
        <h2>Toast</h2>
        <button className={s.button} onClick={this.handleClick.bind(this, 'info')}>info</button>
        <button className={s.button} onClick={this.handleClick.bind(this, 'success')}>success</button>
        <button className={s.button} onClick={this.handleClick.bind(this, 'error')}>error</button>
        <button className={s.button} onClick={this.handleClick.bind(this, 'loading')}>loading</button>
      </div>
    )
  }
}

export default hot(module)(App);