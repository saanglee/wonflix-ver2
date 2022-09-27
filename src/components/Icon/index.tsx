import * as icons from '../../assets/index';

export type IconType = keyof typeof icons;
export const iconTypes: IconType[] = Object.keys(icons) as IconType[];

type iconSize = {
  regular: '18px';
  medium: '24px';
  large: '48px';
};

interface IconProps {
  iconName: IconType;
  color?: string;
  stroke?: string;
  size?: string;
  onClick?: (...args: any) => void;
}

// TODO: color, strock, size 타입 선언 필요

const Icon = ({
  iconName,
  color = 'black',
  stroke = 'none',
  size,
  onClick,
}: IconProps) => {
  const Component = icons[iconName];
  // const width =
  //   size &&
  //   (typeof size === 'number' ? `${size}px` : `${size.replace('px', '')}px`);
  return (
    <Component fill={color} stroke={stroke} width={size} onClick={onClick} />
  );
};

export default Icon;
