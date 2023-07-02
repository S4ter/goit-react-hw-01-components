import clsx from 'clsx';
import css from './FriendList.module.css';

export const List = ({ variant, children }) => {
  return <ul className={clsx(css[variant])}>{children}</ul>;
};
export const Item = ({ variant, children }) => {
  return <li className={clsx(css[variant])}>{children}</li>;
};

export const Status = ({ variant, isOnline, children }) => {
  const statusClassName = clsx(css[variant], {
    [css.online]: isOnline,
    [css.offline]: !isOnline,
  });

  return <span className={statusClassName}>{children}</span>;
};

export const Name = ({ variant, children }) => {
  return <p className={clsx(css[variant])}>{children}</p>;
};
