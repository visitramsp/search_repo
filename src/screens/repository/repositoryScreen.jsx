import React from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { ArrowLeft } from '../../assets/icon';
import styles from './repositoryScreen.style';
import { FlatList } from 'react-native';
import { Colors } from '../../theme';
import Icon from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { setRepositoryList } from '../../store/repository/reduce';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

export default function repositoryScreen() {
  const data = useSelector((state) => state.repository.repositoryList);


  console.log(data,"data");
  
  const navigation = useNavigation();
  const dispatch=useDispatch()
  const addFavorite = (id) => {
    dispatch(
      setRepositoryList(
        data.map((item) => ({
          ...item,
          isFavorite: item.id === id ? !item.isFavorite : item.isFavorite
        }))
      )
    );
  };

  const redirectDetailsFun = (item) => {
    navigation.navigate('repositoryDetailsScreen', { item });
  };

  const redirectFavoriteScreen = () => {
    navigation.navigate('favoriteScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft />
        </TouchableOpacity>
        <Text style={styles.heading}>Repository</Text>
        <TouchableOpacity onPress={redirectFavoriteScreen}>
          <MaterialIcons name={'favorite'} size={20} color={'green'} />
        </TouchableOpacity>
      </View>

      <View style={styles.searchView}></View>

      <FlatList
        showsHorizontalScrollIndicator
        bounces
        horizontal={false}
        data={data}
        initialNumToRender={10}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={styles.listView}
            onPress={() => redirectDetailsFun(item)}
          >
            <View style={styles.nameView}>
              <Text style={styles.nameText} numberOfLines={2}>{item?.name}</Text>
              <TouchableOpacity onPress={() => addFavorite(item?.id)}>
                <MaterialIcons
                  name={item.isFavorite ? 'favorite' : 'favorite-border'}
                  size={20}
                  color={item.isFavorite ? 'green' : Colors.black}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.descText} numberOfLines={2}>
              {item?.description}
            </Text>
            <View style={styles.langView}>
              <Text style={styles.langHeading}>Language :</Text>
              <Text style={styles.languageText}> {item?.language}</Text>
            </View>

            <View style={styles.languageView}>
              <View style={styles.starView}>
                <View style={styles.countView}>
                  <Icon name="fork" size={15} color={Colors.black} />
                  <Text style={styles.countText}>{item.forks_count}</Text>
                </View>

                <View style={styles.countView}>
                  <Icon name="staro" size={15} color={Colors.black} />
                  <Text style={styles.countText}>{item.stargazers_count}</Text>
                </View>
              </View>
              <View style={styles.ownerView}>
                <Image
                  source={{ uri: item?.owner?.avatar_url }}
                  style={styles.profileImage}
                />
                <Text style={styles.ownerText}>{item?.owner?.login}</Text>
              </View>
            </View>

            {data?.length - 1 && <View style={styles.horizontalLine} />}
          </TouchableOpacity>
        )}
        contentContainerStyle={[styles.contentContainerStyle]}
        ListEmptyComponent={
          <View style={styles.emptyItemContainer}>
            <Text style={styles.noItemText}>No repositories found</Text>
          </View>
        }
        keyExtractor={(item, index) => item.id + index.toString()}
      />
    </View>
  );
}
