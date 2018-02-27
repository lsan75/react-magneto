import * as React from 'react';

interface Props {
  playstop(): void;
}

export class AppRemote extends React.Component<Props> {

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
