import { ReactNode } from 'react';
import classNames from 'classnames/bind';
import styles from './button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

type ButtonType = 'circle' | 'navigation' | 'regular';
type ButtonSize = 'small' | 'default' | 'medium' | 'large';
type ButtonColor = 'primary' | 'secondary';

interface ButtonProps {
  children: ReactNode;
  buttonColor?: string;
  onClick?: (...args: any) => void;
  type?: ButtonType;
  size?: ButtonSize;
  link?: string;
  fontColor?: string;
  fontSize?: string;
  borderRadius?: string;
  extendClass?: string;
}

const Button = ({
  children,
  buttonColor = 'transparent',
  onClick,
  size = 'default',
  type,
  link = '/',
  extendClass,
}: ButtonProps) => {
  const Component = 'button' as keyof JSX.IntrinsicElements;

  return (
    <Link to={link}>
      <Component onClick={onClick} className={cx(size, type, extendClass)}>
        {children}
      </Component>
    </Link>
  );
};

export default Button;
