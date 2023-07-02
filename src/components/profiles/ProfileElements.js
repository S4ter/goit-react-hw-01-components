import clsx from 'clsx';
import css from './Profile.module.css';

export const ProfileContainter = ({ variant, children }) => {
  return <div className={clsx(css[variant])}>{children}</div>;
};
export const Description = ({ variant, children }) => {
  return <div className={clsx(css[variant])}>{children}</div>;
};
export const AvatarBackground = ({ variant, children }) => {
  return <div className={clsx(css[variant])}>{children}</div>;
};
export const UserName = ({ variant, children }) => {
  return <p className={clsx(css[variant])}>{children}</p>;
};
export const UserTag = ({ variant, children }) => {
  return <p className={clsx(css[variant])}>{children}</p>;
};
export const UserLocation = ({ variant, children }) => {
  return <p className={clsx(css[variant])}>{children}</p>;
};
export const StatisticsList = ({ variant, children }) => {
  return <ul className={clsx(css[variant])}>{children}</ul>;
};
export const StatisticsItem = ({ variant, children }) => {
  return <li className={clsx(css[variant])}>{children}</li>;
};
export const StatisticsLabel = ({ variant, children }) => {
  return <span className={clsx(css[variant])}>{children}</span>;
};
export const StatisticsQuantity = ({ variant, children }) => {
  return <span className={clsx(css[variant])}>{children}</span>;
};
