import * as React from "react";
import { Label } from "@fluentui/react-components";

export interface IHelloWorldProps {
  name?: string;
  designation?: string;
  project?: string;
}

export class HelloWorld extends React.Component<IHelloWorldProps> {
  public render(): React.ReactNode {
    return (
      <>
        <Label>Hello {this.props.name}!</Label>
        <Label>Hello {this.props.designation}!</Label>
        <Label>Hello {this.props.project}!</Label>
      </>
    );
  }
}
