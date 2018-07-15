import {Component} from 'react';

export class ToolboxApp extends Component {
  onCheckboxChange = (propName: any) => () => {
    const currentValue = (this.state as any)[propName];
    this.setState({ [propName]: !currentValue } as any);
  }

  onFieldTextChange = (propName: any) => (e: any) => {
    const value = e.target.value;
    
    this.setState({
      [propName]: value
    });
  }
}