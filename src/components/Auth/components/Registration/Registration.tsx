import React, { useState, useRef, ChangeEvent, KeyboardEvent, useContext } from 'react';
import { Container, Label, Form, Root } from './Elements';
import Logo from '../../../ui/Logo/Logo';
import { Input } from '../../../ui/Input/Input';
import { Text } from '../../../ui/Text';
import { useForm } from 'react-hook-form';
import { Button } from '../../../ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { FlexRov } from '../../../ui/FlexRov';
import { Footer } from '../../../Footer/Footer';
import Select from '../../../ui/Select';
import { CityContext } from '../../../../context/CityProvider/CityProvider';


const options = [
  { value: 'Самара', label: 'Самара' },
  { value: 'Москва', label: 'Москва' },
  { value: 'Королев', label: 'Королев' },
];

export const Registration = () => {
  const { handleSaveCity, city } = useContext<any>(CityContext);
  const [nameValue, setNameValue] = useState<string>('');
  const [phoneValue, setPhoneValue] = useState<string>('');
  const [cityValue, setCityValue] = useState<string>('');
  const navigate = useNavigate();

  const [nameForm, setNameForm] = useState(true);
  const [codeForm, setCodeForm] = useState(false);
  const [cityForm, setCityForm] = useState(false);

  const [values, setValues] = useState<string[]>(Array(6).fill(''));
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;

    if (!/^\d?$/.test(value)) return;
    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);

    if (value && index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !values[index] && index > 0) {
      const newValues = [...values];
      newValues[index - 1] = '';
      setValues(newValues);

      inputsRef.current[index - 1]?.focus();
    }
  };


  const {
    handleSubmit,
    register,
  } = useForm({
    mode: 'onSubmit',
  });

  const handleNameSubmit = (event: any) => {
    // event.preventDefault();

    if (nameValue && phoneValue) {
      setNameForm(false);
      setCodeForm(true);
    }
  };

  const handleCodeSubmit = (event: any) => {
    // event.preventDefault();
    if (values.length >= 6) {
      setCodeForm(false);
      setCityForm(true);
    }
  };


  const handleCitySubmit = (event: any) => {
    // event.preventDefault();
    if (cityValue) setCityForm(false);
    localStorage.setItem('name', nameValue);
    localStorage.setItem('phone', phoneValue);
    localStorage.setItem('city', cityValue);
    localStorage.setItem('token', 'here is your token');
    navigate('/dashboard');
  };


  return (
    <>
      {nameForm && (
        <Root>
          <Logo />
          <Form onSubmit={handleSubmit(handleNameSubmit)}>
            <Container>
              <Label>
                <p>Имя</p>
                <Input
                  value={nameValue}
                  placeholder="Артем"
                  type="text"
                  onChange={(e: any) => setNameValue(e.target.value)}
                />
              </Label>
              <Label>
                <p>Номер телефона</p>
                <Input type="text"
                       value={phoneValue}
                       placeholder="+7 967 766 7770"
                       onChange={(e: any) => setPhoneValue(e.target.value)}
                />
              </Label>
            </Container>
            <div>
              <Button type={'submit'} width={358}
                      height={36}
                // onClick={() => navigate('/')}
                      background={'#006CBC'}>
                Подтвердить
              </Button>
            </div>
          </Form>
        </Root>
      )}

      {cityForm && (
        <Root>
          <Logo />
          <Form onSubmit={handleSubmit(handleCitySubmit)}>
            <Container>
              <Label>
                <p>Ваш город</p>
                <Select value={cityValue} options={options}
                        onChange={(e: any) => {
                          setCityValue(e.target.value);
                          handleSaveCity(e.target.value);
                        }}
                />
                <img className={'arrow'} alt={''} src={'/images/Auth/arrow.svg'} />

              </Label>
            </Container>
            <div>
              <Button type={'submit'}
                      width={358}
                      height={36}
                      background={'#006CBC'}>
                Подтвердить
              </Button>
            </div>
          </Form>
        </Root>
      )}

      {codeForm && (
        <Root>
          <Logo />
          <Form onSubmit={handleSubmit(handleCodeSubmit)}>
            <Container>
              <Text fontWeight={500} fontSize={16}>Код подтверждения</Text>
              <FlexRov gap={16}>
                {values.map((value, index) => (
                  <Input
                    key={index}
                    type="text"
                    isCode
                    maxLength={1}
                    value={value}
                    onChange={(e: any) => handleChange(e, index)}
                    onKeyDown={(e: any) => handleKeyDown(e, index)}
                    ref={(el: any) => (inputsRef.current[index] = el)}
                  />
                ))}
              </FlexRov>
            </Container>
            <div>
              <Button type={'submit'} width={358}
                      height={36}
                // onClick={() => navigate('/')}
                      background={'#006CBC'}>
                Подтвердить
              </Button>
            </div>
          </Form>
        </Root>
      )}
      <Footer isWinStreak={true} />
    </>
  );
};


