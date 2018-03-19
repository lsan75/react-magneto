import * as React from 'react';

interface Props {
  playstop(): void;
}

export function AppRemote(props: Props) {
  const { playstop } = props;
  return (
    <article>
      <button onClick={playstop}>Play</button>
    </article>
  );
}
