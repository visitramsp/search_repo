import { StyleSheet } from 'react-native';
import {
  Colors,
  Fonts,
  height,
  horizontalScale,
  verticalScale
} from '../../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    height: '100%',
    paddingTop: horizontalScale(20),
    paddingHorizontal: verticalScale(18)
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  heading: {
    color: Colors.black,
    textAlign: 'center',
    margin: 'auto',
    fontFamily: Fonts.type.poppinsSemiBold,
    fontWeight: Fonts.Weight.seven,
    fontSize: 19
  },
  middleContainer: {
    flexDirection: 'column',
    gap: 20
  },
  searchView: {
    marginTop: verticalScale(20),
    marginBottom: verticalScale(20),
    flexDirection: 'column',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    height: height - 100
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: Colors.gray10,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 0,
    fontSize: 12,
    backgroundColor: '#fff',
    color: Colors.black
  },

  searchBtn: {
    backgroundColor: Colors.black,
    width: horizontalScale(150),
    height: 36,
    borderRadius: 18,
    margin: 'auto',
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchText: {
    fontSize: Fonts.size.regular,
    color: Colors.white
  }
});

export default styles;
