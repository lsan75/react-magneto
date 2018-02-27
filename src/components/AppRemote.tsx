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
        <a href="#" onClick={this.props.playstop}>Play</a>
      </article>
    );
  }

}
