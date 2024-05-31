import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from './redux/auth/selectors';
import { selectIsLoading } from './redux/transactions/selectors';
import { refreshUserThunk } from './redux/auth/operations';
import Loader from './components/Loader/Loader';
import Currency from './components/Currency/Currency';

function App() {
  return <></>;
}

export default App;
