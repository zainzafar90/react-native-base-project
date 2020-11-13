import { StackNavigationProp } from '@react-navigation/stack';

import AppRoute from 'navigation/routes';
import { CombinedStackParamList } from 'navigation/type';

export type AuthScreenProps = {
  navigation: StackNavigationProp<CombinedStackParamList, AppRoute.Login>;
};
