import AppRoute from './routes';

// CombinedStackParamList must consist of all the declared 'ParamList's
export type CombinedStackParamList = RootStackParamList & AuthStackParamList & AppStackParamList;

export type RootStackParamList = {
  [AppRoute.AppStack]: undefined;
};

export type AuthStackParamList = {
  [AppRoute.Login]: undefined;
};

export type AppStackParamList = {
  [AppRoute.Home]: undefined;
};
