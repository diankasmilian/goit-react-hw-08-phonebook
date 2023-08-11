import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import { useAuth } from 'hooks/useAuth';
import { MdExitToApp } from 'react-icons/md';
import { Container, Text, Button } from './UserMenu.styled'

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { getUser } = useAuth();

  return (
    <Container>
      <Text>Ласкаво просимо, {getUser}</Text>
      <Button type="button" onClick={() => dispatch(logOut())}>
        <MdExitToApp size={25} color="#fff" />
      </Button>
    </Container>
  );
};
