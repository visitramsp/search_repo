import NetInfo from '@react-native-community/netinfo';

export const checkInternetConnection = async () => {
  try {
    const state = await NetInfo.fetch();
    console.log('Is connected?', state.isConnected);
    return state.isConnected;
  } catch (error) {
    console.error('Error checking network connection:', error);
    return false;
  }
};
