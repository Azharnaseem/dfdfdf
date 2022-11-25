import React from 'react';
import { View, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { Button, ScreenWrapper } from '~components';
import { logout } from '~redux/slices/authSlice';
import styles from './styles';
export default function Home({ navigation, route }) {
    const dispatch = useDispatch()
    return (
        <ScreenWrapper>
            <View style={styles.mainViewContainer}>
                <Text style={styles.title}>HOME SCREEN</Text>
                <Button
                    title={'Logout'}
                    onPress={() => dispatch(logout())}
                />
            </View>
        </ScreenWrapper>
    );
}
