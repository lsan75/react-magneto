import * as React from 'react';

interface Props {
  playstop(): void;
}

export class AppRemote extends React.Component<Props> {

  constructor(props: Props) {
    super(props);
  }

  render() {
    const { playstop } = this.props;
    return (
      <article>
        <button onClick={playstop}>Play</button>
      </article>
    );
  }

}
