import { useDispatch } from 'react-redux';
import {
  signInThunk,
  signOutThunk,
  signUpThunk,
} from './redux/auth/operations';

function App() {
  const dispatch = useDispatch();
  return (
    <>
      <button
        type="button"
        onClick={() =>
          dispatch(
            signUpThunk({
              username: 'Dimk',
              email: 'dlysachenko@gmail.comse',
              password: 'dlysachenko@gmail.comse',
            })
          )
        }
      >
        Sign-up
      </button>
      <button
        type="button"
        onClick={() =>
          dispatch(
            signInThunk({
              email: 'dlysachenko@gmail.comse',
              password: 'dlysachenko@gmail.comse',
            })
          )
        }
      >
        sign-in
      </button>
      <button
        type="button"
        onClick={() => dispatch(signOutThunk())}
      >
        sign-out
      </button>
      <button type="button"></button>
      <button type="button"></button>
      <button type="button"></button>
    </>
  );
}

export default App;
