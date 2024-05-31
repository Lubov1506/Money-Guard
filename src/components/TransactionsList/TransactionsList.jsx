import { Container } from "../Container/Container";
import TransactionsDescItem from "../TransactionsDescItem/TransactionsDescItem";
import TransactionsItem from "../TransactionsMobileItem/TransactionsMobileItem";

const TransactionsList = () => {
  return (
    <Container>
      <TransactionsItem />
      <TransactionsDescItem />
    </Container>
  );
};

export default TransactionsList;
