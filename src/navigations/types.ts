import NavigatorMap from './NavigatorMap';
import {RegistrationType} from '../core/const';

export type RootStackParamsList = {
  [NavigatorMap.Bootstrap]: undefined;
  [NavigatorMap.AuthStack]: undefined;
  [NavigatorMap.AppStack]: undefined;
};

export type AuthStackParamsList = {
  [NavigatorMap.Login]: {
    registrationType: keyof typeof RegistrationType;
  };
  [NavigatorMap.ClientCode]: undefined;
  [NavigatorMap.Privacy]: undefined;
  [NavigatorMap.ForgotPassword]: undefined;
};

export type AppStackParamsList = {
  [NavigatorMap.AppTab]: undefined;
  [NavigatorMap.Setting]: undefined;
  [NavigatorMap.About]: undefined;
  [NavigatorMap.Logo]: {
    uri: string;
  };
};

export type AppTabParamsList = {
  [NavigatorMap.Broadcasts]: undefined;
  [NavigatorMap.Channels]: undefined;
  [NavigatorMap.Programs]: undefined;
  [NavigatorMap.HTML]: undefined;
};
