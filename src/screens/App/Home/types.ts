import { DrawerNavigationProp } from '@react-navigation/drawer';

import AppRoute from 'navigation/routes';
import { CombinedStackParamList } from 'navigation/type';

export type HomeScreenProps = {
  navigation: DrawerNavigationProp<CombinedStackParamList, AppRoute.Home>;
};
