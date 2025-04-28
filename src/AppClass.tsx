import { Component, ReactNode } from 'react';
type State = {
  count: number;
};

export class AppClass extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Hello</p>
        <button onClick={this.handleClick}>{this.state.count}</button>
      </div>
    );
  }
}
