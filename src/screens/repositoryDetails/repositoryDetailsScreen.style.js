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
  listView: {
    marginTop: verticalScale(30)
  },
  nameView: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  nameText: {
    color: Colors.blue,
    fontSize: Fonts.size.semi,
    fontFamily: Fonts.type.poppinsSemiBold,
    fontWeight: Fonts.Weight.semi,
    width: (width + 100) / 2
  },
  descText: {
    color: Colors.gray40,
    fontSize: Fonts.size.small,
    fontFamily: Fonts.type.poppinsRegular,
    fontWeight: Fonts.Weight.low,
    paddingTop: verticalScale(10)
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
    borderRadius: 10,
    height: 20,
    width: 20
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
  dateView: {
    flexDirection: 'row',
    paddingTop: verticalScale(0)
  },
  createDateText: {
    color: Colors.gray40,
    fontSize: Fonts.size.small,
    fontFamily: Fonts.type.poppinsRegular,
    fontWeight: Fonts.Weight.low
  },
  dateHeading: {
    color: Colors.gray,
    fontSize: Fonts.size.small,
    fontFamily: Fonts.type.poppinsMedium,
    fontWeight: Fonts.Weight.medium
  },
  topicsView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginRight: 20
  }
});

export default styles;
