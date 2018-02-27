import * as React from 'react';
import { Component } from 'react';

interface Props {
  playstop(): void;
}

export class AppRemote extends Component<Props, {}> {

  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <article>
        <a href="#" onClick={this.playstop}>Play</a>
      </article>
    );
  }

  private playstop = (): void => {
    this.props.playstop();
  }
}
