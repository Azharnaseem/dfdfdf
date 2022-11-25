import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { useDispatch } from 'react-redux';
import { login } from '~redux/slices/authSlice';
import { Button, ScreenWrapper } from '~components';
export default function Login({ navigation, route }) {
    const dispatch = useDispatch()
    return (
        <ScreenWrapper>
            <View style={styles.mainViewContainer}>
                <Text style={styles.title}>LOGIN SCREEN</Text>
                <Button
                    title={'Login'}
                    onPress={() => dispatch(login({}))}
                    // onPress={() =>navigation.navigate('Home')}
                />
            </View>
        </ScreenWrapper>
    );
}
