import {StyleSheet} from 'react-native';
import AppColors from '~utills/AppColors';
import { height, width } from '~utills/Dimension';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width(25),
    backgroundColor: AppColors.black,
    width: width(85),
    alignSelf: 'center',
    paddingVertical: height(1.8),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  text: {
    color: AppColors.white,
    fontSize: width(3.8),
    fontWeight: 'bold',
  },
});
export default styles;
