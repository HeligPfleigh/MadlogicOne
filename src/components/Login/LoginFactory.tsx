import React from 'react';

import {RegistrationType} from '../../core/const';
import LoginByEmail from './Email';
import LoginByAccount from './Account';
import LoginByADFS from './ADFS';

interface ILoginFactory {
  registrationType: keyof typeof RegistrationType;
}

export default function LoginFactory({registrationType}: ILoginFactory) {
  switch (registrationType) {
    case RegistrationType.ADFS:
      return <LoginByADFS />;
    case RegistrationType.ACCOUNT:
      return <LoginByAccount />;
    case RegistrationType.EMAIL:
    default:
      return <LoginByEmail />;
  }
}
