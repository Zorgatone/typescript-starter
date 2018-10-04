import * as React from "react";

export interface IButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    > {
  // className?: string;
}

export class Button extends React.Component<IButtonProps> {
  public render(): React.ReactNode {
    // tslint:disable-next-line:prefer-const
    let { children, className, type, ...props } = this.props;

    if (!className) {
      className = "Button";
    } else if (className.split(" ").indexOf("Button") < 0) {
      className = "Button " + className;
    }

    if (!type) {
      type = "button";
    }

    return (
      <button type={type} className={className} {...props}>
        {children}
      </button>
    );
  }
}
