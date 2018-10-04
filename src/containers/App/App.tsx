import * as React from "react";

import { Button } from "src/components/Button";

export class App<P = {}> extends React.Component {
  public constructor(props: P) {
    super(props);

    this.onButtonClicked = this.onButtonClicked.bind(this);
  }

  public onButtonClicked(mouseEvent: React.MouseEvent<any>): void {
    // tslint:disable-next-line:no-console
    console.log("hi", mouseEvent.target);
  }

  public render(): React.ReactNode {
    return (
      <div>
        Asd
        <Button onClick={this.onButtonClicked}>Test</Button>
      </div>
    );
  }
}
