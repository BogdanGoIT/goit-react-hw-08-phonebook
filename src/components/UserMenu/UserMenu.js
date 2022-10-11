import { Button } from '@mui/material';
import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import css from './UserMenu.module.css';
import defaultAvatar from './default-avatar.png';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const avatar = defaultAvatar;

  const handleLogOut = () => dispatch(logOut());

  return (
    <div className={css.wrapper}>
      <img src={avatar} alt="" width="32" style={styles.avatar} />
      <p className={css.useremail}>Welcome, {user.email}</p>
      <Button variant="outlined" onClick={handleLogOut}>Logout</Button>
    </div>
  );
};
