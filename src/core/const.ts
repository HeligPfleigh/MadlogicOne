export enum RegistrationType {
  EMAIL = 'EMAIL',
  ACCOUNT = 'ACCOUNT',
  ADFS = 'ADFS',
}

export interface Registration {
  registrationType: RegistrationType;
  adfsURL?: string;
  callbackPrefix?: string;
}

export interface Logo {
  logo: string;
  logoURL: string;
}

export interface TernantSetting {
  name: string;
  secret: string;
  registration: Registration;
  logo: Logo;
  color: string;
  about: string;
  features: string[];
  tabs: any[];
}

export enum SupportedLanguages {
  EN = 'en',
  VI = 'vi',
}

export enum SupportedThemes {
  LIGHT = 'light',
  // DARK = 'dark',
}
