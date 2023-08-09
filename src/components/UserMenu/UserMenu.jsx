import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import { useAuth } from 'hooks/useAuth';

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
  const {getUser} = useAuth()

  return (
    <div style={styles.container}>
      <span style={styles.name}>Ласкаво просимо, {getUser}</span>
      <button type="button" onClick={() => dispatch(logOut())}>
        Вийти
      </button>
    </div>
  );
}