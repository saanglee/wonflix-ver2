import React, { ReactNode } from 'react';

type colorType = 'transparent' | 'black' | 'white' | 'primary' | 'gray' | 'red';

interface ButtonStyle {
  buttonColor: colorType;
  fontColor: colorType;
  fontSize?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
}

interface ButtonProps extends ButtonStyle {
  children: ReactNode;
  onClick: (...args: any) => void;
  className?: string;
}

const palette = {
  transparent: 'transparent',
  black: 'black',
  white: 'white',
  primary: '#91c199',
  gray: '#a6a6a6',
  red: '#ff6262',
};

const Button = ({ className, children, onClick, ...rest }: ButtonProps) => {
  const { width, height, buttonColor, borderRadius, fontColor, fontSize } = {
    ...rest,
  };

  const style = {
    container: {
      backgroundColor: palette[buttonColor],
      color: palette[fontColor],
      width,
      height,
      borderRadius,
      fontSize,
    },
  };
  return (
    <div>
      <button
        type='button'
        className={className}
        style={style.container}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
