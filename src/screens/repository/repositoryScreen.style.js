import { StyleSheet } from 'react-native';
import {
  Colors,
  Fonts,
  horizontalScale,
  verticalScale,
  width
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
  searchView: {
    marginTop: verticalScale(20),
    marginBottom: verticalScale(20)
  },

  horizontalLine: {
    borderWidth: 0.3,
    borderColor: Colors.gray10,
    marginBottom: verticalScale(15),
    marginTop: verticalScale(8)
  },
  listView: {},
  nameView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width - 40
  },
  nameText: {
    color: Colors.blue,
    fontSize: Fonts.size.semi,
    fontFamily: Fonts.type.poppinsSemiBold,
    fontWeight: Fonts.Weight.semi,
    paddingRight: 0,
    width: (width + 100) / 2
  },
  descText: {
    color: Colors.gray40,
    fontSize: Fonts.size.small,
    fontFamily: Fonts.type.poppinsRegular,
    fontWeight: Fonts.Weight.low
  },
  languageView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  starView: {
    flexDirection: 'row',
    gap: 25
  },
  langView: {
    flexDirection: 'row',
    paddingTop: 2
  },
  langHeading: {
    color: Colors.gray,
    fontSize: Fonts.size.small,
    fontFamily: Fonts.type.poppinsRegular,
    fontWeight: Fonts.Weight.low
  },
  languageText: {
    color: Colors.gray,
    fontSize: Fonts.size.sminy,
    fontFamily: Fonts.type.poppinsRegular,
    fontWeight: Fonts.Weight.low
  },
  countView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5
  },
  countText: {
    color: Colors.gray,
    fontSize: Fonts.size.sminy,
    fontFamily: Fonts.type.poppinsRegular,
    fontWeight: Fonts.Weight.low
  },
  profileImage: {
    height: 20,
    width: 20,
    borderRadius: 10
  },
  ownerView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6
  },
  ownerText: {
    color: Colors.gray20,
    fontSize: Fonts.size.small,
    fontFamily: Fonts.type.poppinsRegular,
    fontWeight: Fonts.Weight.low
  },
  emptyItemContainer: {
    margin: 'auto'
  },
  noItemText: {
    fontFamily: Fonts.type.montserratMedium,
    fontWeight: Fonts.Weight.medium,
    color: Colors.gray
  }
});

export default styles;
