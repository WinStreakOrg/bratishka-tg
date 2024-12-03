import React, { useCallback, useRef, useState } from 'react';
import { Container, Label, Form, Root } from './Elements';
import Logo from '../../../ui/Logo/Logo';
import { Input } from '../../../ui/Input/Input';
import { useForm } from 'react-hook-form';
import { Button } from '../../../ui/Button/Button';
import { useNavigate } from 'react-router-dom';

export const Registration = () => {

  const [nameValue, setNameValue] = useState<string>('');
  const [phoneValue, setPhoneValue] = useState<string>('');
  const navigate = useNavigate();


  const {
    register,
    handleSubmit,
    setValue,
    // setError,
    formState: {
      errors,
      isValid,
    },
    trigger,
    // reset,
    resetField,
  } = useForm({
    mode: 'onSubmit',
  });


  // const [codeValues, setCodeValues] = useState<string[]>(['', '', '', '', '', '']);
  // const [codeForm, setCodeForm] = useState(true);
  // const codeInputs = useRef<Array<HTMLInputElement | null>>([]);
  //
  // const handleCodeInputChange = (e: any, index: number): void => {
  //   const newValue = e.target.value;
  //
  //   if (/^\d$/.test(newValue)) {
  //     const newValues: string[] = [...codeValues];
  //     newValues[index] = newValue;
  //     setCodeValues(newValues);
  //     setValue(`code.${index}`, newValue);
  //
  //     if (newValue && index < codeInputs.current.length - 1) {
  //       codeInputs.current[index + 1]?.focus();
  //     }
  //     trigger('code');
  //   }
  // };
  //
  // const handleCodeInputKeyDown = (e: any, index: number): void => {
  //   if (e.key === 'Backspace' && codeValues[index] === '') {
  //     if (index > 0) {
  //       codeInputs.current[index - 1]?.focus();
  //     }
  //   }
  // };
  const submit = (event: any) => {
    event.preventDefault();
  };


  return (
    <Root>
      <Logo />


      <Form onSubmit={handleSubmit(submit)}>
        <Container>
          <Label>
            <p>Имя</p>
            <Input
              value={nameValue}
              placeholder="Артем"
              type="text"
              {...register('nameValue', {
                required: true,
              })}
              onChange={(e: any) => setNameValue(e.target.value)}
            />
          </Label>
          <Label>
            <p>Номер телефона</p>
            <Input type="text"
                   value={phoneValue}
                   placeholder="+7 967 766 7770"
                   {...register('phoneValue', {
                     required: true,
                   })}
                   onChange={(e: any) => setPhoneValue(e.target.value)}
            />
          </Label>
        </Container>

        <div>
          <Button width={358}
                  height={36}
                  onClick={() => navigate('/')}
                  background={'#006CBC'}>
            Подтвердить
          </Button>
        </div>
      </Form>

    </Root>
  );
};


{/*{codeForm &&*/
}
{/*  <>*/
}
{/*    <div style={{ display: 'flex', gap: '16px' }}>*/
}
{/*      {codeValues.map((value, index) => (*/
}
{/*        <Input*/
}
{/*          isCode*/
}
{/*          key={index}*/
}
{/*          maxLength={1}*/
}
{/*          type="text"  */
}
{/*          value={value}*/
}
{/*          inputMode="numeric"*/
}
{/*          pattern="[0-9]*"*/
}
{/*          {...(register(`code.${index}`, {*/
}
{/*            required: true,*/
}
{/*            maxLength: 1,*/
}
{/*          }) as any)}*/
}
{/*          onKeyDown={(e: any) => handleCodeInputKeyDown(e, index)}*/
}
{/*          onChange={(e: any) => handleCodeInputChange(e, index)}*/
}
{/*          ref={(el: HTMLInputElement | null) => (codeInputs.current[index] = el)}*/
}
{/*        />*/
}
{/*      ))}*/
}
{/*    </div>*/
}
{/*    <Button width={358}*/
}
{/*            height={36}*/
}
{/*            background={'#006CBC'}>*/
}
{/*      Подтвердить*/
}
{/*    </Button>*/
}
{/*  </>*/
}

{/*}*/
}