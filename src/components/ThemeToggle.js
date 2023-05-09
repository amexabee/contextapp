import { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class ThemeToggle extends Component {
  static contextType = ThemeContext;
  render() {
    const { themeToggle } = this.context;
    return <button onClick={themeToggle}>Toggle the theme</button>;
  }
}

export default ThemeToggle;
