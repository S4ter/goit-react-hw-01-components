import clsx from 'clsx';
import css from './Statistics.module.css';

export const Stats = ({ variant, children }) => {
  return <section className={clsx(css[variant])}>{children}</section>;
};
export const StatsTitle = ({ variant, children }) => {
  return <h2 className={clsx(css[variant])}>{children}</h2>;
};
export const StatsList = ({ variant, children }) => {
  return <ul className={clsx(css[variant])}>{children}</ul>;
};
export const StatsItem = ({ variant, children }) => {
  return <li className={clsx(css[variant])}>{children}</li>;
};
export const StatsLabel = ({ variant, children }) => {
  return <span className={clsx(css[variant])}>{children}</span>;
};
export const StatsValue = ({ variant, children }) => {
  return <span className={clsx(css[variant])}>{children}</span>;
};
