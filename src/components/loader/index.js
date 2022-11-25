import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import Modal from 'react-native-modal';
import {useSelector} from 'react-redux';
import {selectAppLoader} from '~redux/slices/configSlice';
import AppColors from '~utills/AppColors';
import styles from './styles';
export default function Loader() {
  const appLoader = useSelector(selectAppLoader);
  return (
    <Modal
      animationInTiming={300}
      animationOutTiming={200}
      animationIn={'lightSpeedIn'}
      animationOut={'lightSpeedOut'}
      isVisible={appLoader}
      backdropOpacity={0.4}>
      <View style={styles.container}>
        <ActivityIndicator size="small" color={AppColors.black} />
        <Text style={styles.text}>Loading</Text>
      </View>
    </Modal>
  );
}
