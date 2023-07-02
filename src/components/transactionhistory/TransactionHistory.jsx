import PropTypes from 'prop-types';
import transactions from './transactions.json';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './TransactionElements.js';

export const TransactionHistory = () => {
  return (
    <Table variant="table">
      <TableHead variant="head">
        <TableRow variant="row">
          <TableHeader variant="header">Type</TableHeader>
          <TableHeader variant="header">Amount</TableHeader>
          <TableHeader variant="header">Currency</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody variant="body">
        {transactions.map(transaction => (
          <TableRow variant="row" key={transaction.id}>
            <TableCell variant="cell">{transaction.type}</TableCell>
            <TableCell variant="cell">{transaction.amount}</TableCell>
            <TableCell variant="cell">{transaction.currency}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
TransactionHistory.propTypes = {
  transaction: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};
