import clsx from 'clsx';
import css from './Transaction.module.css';

export const Table = ({ variant, children }) => {
  return <table className={clsx(css[variant])}>{children}</table>;
};
export const TableHead = ({ variant, children }) => {
  return <thead className={clsx(css[variant])}>{children}</thead>;
};
export const TableBody = ({ variant, children }) => {
  return <tbody className={clsx(css[variant])}>{children}</tbody>;
};
export const TableHeader = ({ variant, children }) => {
  return <th className={clsx(css[variant])}>{children}</th>;
};
export const TableRow = ({ variant, children }) => {
  return <tr className={clsx(css[variant])}>{children}</tr>;
};
export const TableCell = ({ variant, children }) => {
  return <td className={clsx(css[variant])}>{children}</td>;
};
