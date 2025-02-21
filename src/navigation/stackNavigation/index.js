import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import repositoryScreen from '../../screens/repository/repositoryScreen';
import repositoryDetailsScreen from '../../screens/repositoryDetails/repositoryDetailsScreen';
import favoriteScreen from '../../screens/favorite/favoriteScreen';
import SearchRepositoryScreen from '../../screens/searchRepository/searchRepositoryScreen';
export let navigationRef;
const Stack = createNativeStackNavigator();

const UniversalStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'fade_from_bottom'
      }}
    >
      <Stack.Screen
        name="searchRepositoryScreen"
        component={SearchRepositoryScreen}
      />
      <Stack.Screen name="repositoryScreen" component={repositoryScreen} />
      <Stack.Screen
        name="repositoryDetailsScreen"
        component={repositoryDetailsScreen}
      />
      <Stack.Screen name="favoriteScreen" component={favoriteScreen} />
    </Stack.Navigator>
  );
};

export default function Index() {
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={(ref) => (navigationRef = ref)}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            animation: 'fade_from_bottom'
          }}
        >
          <Stack.Screen name={'UniversalStack'} component={UniversalStack} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
