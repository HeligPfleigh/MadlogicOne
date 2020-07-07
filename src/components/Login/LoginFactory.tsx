import React from 'react';
import {RegistrationType} from '../../core/const';
import LoginByEmail from './Email';

interface ILoginFactory {
  registrationType: keyof typeof RegistrationType;
}

export default function LoginFactory({registrationType}: ILoginFactory) {
  switch (registrationType) {
    case RegistrationType.ADFS:
      return <LoginByEmail />;
    case RegistrationType.ACCOUNT:
      return <LoginByEmail />;
    case RegistrationType.EMAIL:
    default:
      return <LoginByEmail />;
  }
}
