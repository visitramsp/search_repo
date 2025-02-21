import React, { useCallback, useEffect, useState } from 'react';
import styles from './searchRepositoryScreen.style';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useDebounce from '../../hooks/UseDebounce';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setRepositoryList } from '../../store/repository/reduce';

export default function SearchRepositoryScreen() {
  const [searchText, setSearchText] = useState('');
  const debounce = useDebounce(searchText, 500);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (debounce?.trim()?.length >= 1) {
      getProductsData(false, true);
    } else if (debounce?.trim()?.length === 0) {
      getProductsData();
    }
  }, [debounce, getProductsData]);

  const getProductsData = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/search/repositories?q=${debounce}`
      );

      console.log(response?.data?.items, 'response?.data?.items');

      if (response?.data?.items && response?.data?.items?.length > 0) {
        dispatch(
          setRepositoryList(
            (response?.data?.items || []).map((item) => ({
              ...item,
              isFavorite: false
            }))
          )
        );
      }
    } catch (error) {
      // dispatch(setRepositoryList([]));
    }
  }, [debounce]);
  const redirectRepository = () => {
    if (debounce?.length > 2) {
      navigation.navigate('repositoryScreen');
      setSearchText('');
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.heading}>Search Repository</Text>
      </View>

      <View style={styles.searchView}>
        <View style={styles.middleContainer}>
          <TextInput
            placeholder="Search..."
            value={searchText}
            style={styles.input}
            onChangeText={setSearchText}
          />
          <TouchableOpacity
            onPress={redirectRepository}
            style={styles.searchBtn}
          >
            <Text style={styles.searchText}>Search</Text>
          </TouchableOpacity>

          <View>
            <Text>1. Search at least 3 letter Required...</Text>
            <Text>2. Search for any things...</Text>
            <Text>3. Search for any things...</Text>
            <Text>4. Search for any things...</Text>
            <Text>5. Search for any things...</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
