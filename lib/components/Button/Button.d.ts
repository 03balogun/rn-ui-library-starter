/// <reference types="react" />
export type ButtonProps = {
    onPress: () => void;
    text: string;
    color?: string;
    textColor?: string;
};
export declare const Button: ({ text, onPress, color, textColor }: ButtonProps) => JSX.Element;
