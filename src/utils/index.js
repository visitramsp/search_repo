/* eslint-disable complexity */
import { CommonActions, StackActions } from '@react-navigation/native';
import React from 'react';
import { Platform, View } from 'react-native';
import {
  AppConstant,
  SCREEN_NAME,
  SIGNUP_ARR,
  Toast,
  USER_TYPE
} from '../constants';
import { navigationRef } from '../navigation/stackNavigation';
import { store } from '../store/Store';

const STORAGE_KEY = '_token';

const navigateNonLoginDrawer = async () => {
  navigationRef.dispatch(StackActions.replace(SCREEN_NAME.UNIVERSAL_STACK));
};

const onPressLogOut = () => {
  const queryParams = `?email=${store.getState()?.user?.userDetail?.email}`;

  navigationRef.dispatch(StackActions.replace(SCREEN_NAME.UNIVERSAL_STACK));
};

const Logout = () => <View />;

const isIOS = Platform.OS === 'ios';

const isPlatform = (val1, val2, platform = 'android') => {
  return Platform.OS === platform ? val1 : val2;
};

const getUserType = (userType) => {
  const selectIcon = () => {
    switch (userType) {
      case SIGNUP_ARR[0]?.heading:
        return USER_TYPE.VENDOR;
      case SIGNUP_ARR[1]?.heading:
        return USER_TYPE.RETAILER;
      case SIGNUP_ARR[2]?.heading:
        return USER_TYPE.HORECA;
      case SIGNUP_ARR[3]?.heading:
        return USER_TYPE.LOGISTIC;
    }
  };
  return selectIcon();
};

export const caseInsensitiveIncludes = (baseString, stringToFind) =>
  !!baseString &&
  baseString.toUpperCase().includes(stringToFind?.toUpperCase() ?? '');

const safeAreaSpec = (top) => (top > 0 ? top : 20);

const authRedirection = (userType) => {
  // eslint-disable-next-line complexity

  const screen = () => {
    if (userType === USER_TYPE.VENDOR) {
      return SCREEN_NAME.VENDOR_DRAWER;
    } else if (userType === USER_TYPE.RETAILER) {
      return SCREEN_NAME.RETAILER_DRAWER;
    } else if (userType === USER_TYPE.LOGISTIC_SUB_USER) {
      return SCREEN_NAME.DRIVER_DRAWER;
    } else if (userType === USER_TYPE.LOGISTIC) {
      return SCREEN_NAME.LOGISTIC_PARTNER_DRAWER;
    } else if (userType === USER_TYPE.REFERRAL_USER) {
      return SCREEN_NAME.REFERRAL_LIST;
    }
  };

  navigationRef.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [
        {
          name: SCREEN_NAME.APP_STACK,
          params: { screen: screen() }
        }
      ]
    })
  );
};

// eslint-disable-next-line complexity
const showError = (err) => {
  if (
    err?.response?.data?.status_code === 500 ||
    err?.response?.status === 500
  ) {
    showToastError(AppConstant.SERVER_ERROR);
  } else if (
    err?.response?.data?.status_code === 401 ||
    err?.response?.status === 401
  ) {
    showToastError(AppConstant.AUTH_ERROR);
  } else {
    const errMessage =
      err?.response?.data?.message?.code ||
      err?.response?.data?.message?.message ||
      err?.response?.data?.message ||
      err?.message ||
      err;
    showToastError(errMessage);
  }
};

const showToastError = (message = '') => {
  Toast.success({
    type: 'errorToast',
    text1: 'Error Occurred!',
    text2: message
  });
};

const showToastSuccess = (message = '') => {
  Toast.success({
    type: 'successToast', // Custom type
    text1: 'Success',
    text2: message
  });
};

const greaterThanZero = (value) => {
  const regex = /^0*?[1-9]\d*$/;
  return regex.test(value);
};

function removePlaceCode(arg) {
  let str = arg;
  if (str.includes('+')) {
    const str2 = str.indexOf(',');
    const strLength = str.length;
    return str.substring(str2 + 1, strLength);
  }
  return str;
}
const getImgUri = (img) => (isIOS ? `file://${img}` : img);

export {
  authRedirection,
  getImgUri,
  getUserType,
  greaterThanZero,
  isIOS,
  isPlatform,
  Logout,
  navigateNonLoginDrawer,
  onPressLogOut,
  removePlaceCode,
  safeAreaSpec,
  showError,
  showToastError,
  showToastSuccess,
  STORAGE_KEY
};
