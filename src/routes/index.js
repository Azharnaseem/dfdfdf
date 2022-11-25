import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import { LoginScreen } from '~screens/auth';
import { HomeScreen } from '~screens/app';
import { Loader } from '~components';
import ScreenNames from './routes';
import { selectIsLogin } from '~redux/slices/authSlice';
import { ActivityIndicator, View } from 'react-native';
import styles from '~components/button/styles';
import AppColors from '~utills/AppColors';
const Stack = createNativeStackNavigator();

export default function Routes() {
  const isLogin = useSelector(selectIsLogin)
  return (
    <NavigationContainer fallback={<View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: AppColors.white,
      }}
    >
      <ActivityIndicator size={'large'} color={AppColors.red} />
    </View>}>
      <Loader />
      {!isLogin ? (
        <Stack.Navigator initialRouteName={ScreenNames.LOGIN} screenOptions={{ header: () => false }}>
          <Stack.Screen name={ScreenNames.LOGIN} component={LoginScreen} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName={ScreenNames.HOME} screenOptions={{ header: () => false }}>
          <Stack.Screen name={ScreenNames.HOME} component={HomeScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}