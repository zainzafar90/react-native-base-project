import { StackNavigationProp } from '@react-navigation/stack';

import AppRoute from 'navigation/routes';
import { CombinedStackParamList } from 'navigation/type';

export type HomeScreenProps = {
  navigation: StackNavigationProp<CombinedStackParamList, AppRoute.Home>;
};
