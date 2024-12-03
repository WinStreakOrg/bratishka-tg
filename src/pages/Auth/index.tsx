import React from 'react';
import { Button } from '../../components/ui/Button/Button';
import { Container, Root } from '../../components/Auth/Elements';
import { useNavigate } from 'react-router-dom';
import Logo from '../../components/ui/Logo/Logo';


const Auth = () => {

  const navigate = useNavigate();


  return (
    <Root>
      <Logo />
      <Container>
        <Button width={358}
                height={36}
                background={'#FFFFFF'}>
          Войти
        </Button>
        <Button onClick={() => navigate('/auth/registration')}
                width={358}
                height={45}
                background={'#006CBC'}>
          Зарегестрирроваться
        </Button>
      </Container>
    </Root>
  );
};
export default Auth;
