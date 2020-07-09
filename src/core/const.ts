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

export interface Tab {
  type: TabTypes;
}

export interface TernantSetting {
  name: string;
  secret: string;
  registration: Registration;
  logo: Logo;
  color: string;
  about: string;
  features: string[];
  tabs: Tab[];
}

export enum SupportedLanguages {
  EN = 'en',
  VI = 'vi',
}

export enum SupportedThemes {
  LIGHT = 'light',
  // DARK = 'dark',
}

export enum TabTypes {
  NEWS = 'news',
  HTML = 'html',
  CHANNEL = 'channel',
  PROGRAMS = 'programs',
}
