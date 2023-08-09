import { useDispatch, useSelector } from 'react-redux';
import { getUsername } from 'redux/auth/auth-selectors';
import { logOut } from 'redux/auth/auth-operations';
// import defaultAvatar from './default-avatar.png';

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
  const name = useSelector(getUsername);
//   const avatar = defaultAvatar;

  return (
    <div style={styles.container}>
      {/* <img src={avatar} alt="" width="32" style={styles.avatar} /> */}
      <span style={styles.name}>Ласкаво просимо, {name}</span>
      <button type="button" onClick={() => dispatch(logOut())}>
        Вийти
      </button>
    </div>
  );
}