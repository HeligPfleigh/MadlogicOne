import NavigatorMap from './NavigatorMap';

export type RootStackParamsList = {
  [NavigatorMap.AuthStack]: undefined;
  [NavigatorMap.AppStack]: undefined;
};

export type AuthStackParamsList = {
  [NavigatorMap.Login]: undefined;
  [NavigatorMap.ClientCode]: undefined;
  [NavigatorMap.Privacy]: undefined;
  [NavigatorMap.ForgotPassword]: undefined;
};

export type AppStackParamsList = {
  [NavigatorMap.AppTab]: undefined;
  [NavigatorMap.Setting]: undefined;
  [NavigatorMap.About]: undefined;
};

export type AppTabParamsList = {
  [NavigatorMap.Broadcasts]: undefined;
  [NavigatorMap.Channels]: undefined;
  [NavigatorMap.Journeys]: undefined;
};
