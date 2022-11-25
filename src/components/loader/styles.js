import { StyleSheet } from 'react-native';
import AppColors from '~utills/AppColors';
import { height, width } from '~utills/Dimension';
const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColors.white,
        width: width(50),
        paddingVertical: height(3),
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: width(3),
        flexDirection: 'row',
    },
    text: {
        color: AppColors.black,
        fontSize: width(3.2),
        marginLeft: width(2),
        fontWeight: 'bold'
    }
  
});
export default styles;
