import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());

  return (
    <div className={css.wrapper}>
      <p className={css.useremail}>Welcome, {user.email}</p>
      <button type="button" onClick={handleLogOut}>Logout</button>
    </div>
  );
};
