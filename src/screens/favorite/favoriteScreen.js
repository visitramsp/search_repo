import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { FlatList } from 'react-native';
import { Colors } from '../../theme';
import Icon from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { setRepositoryList } from '../../store/repository/reduce';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import styles from './favoriteScreen.style';
import { ArrowLeft } from '../../assets/icon';

export default function favoriteScreen() {
  const data = useSelector((state) => state.repository.repositoryList);
  const dispatch = useDispatch();
  const navigation = useNavigation();

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

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft />
        </TouchableOpacity>
        <Text style={styles.heading}>Favorite Repo</Text>
      </View>

      <View style={styles.searchView}></View>

      <FlatList
        showsHorizontalScrollIndicator
        bounces
        horizontal={false}
        data={data}
        initialNumToRender={10}
        renderItem={({ item, index }) =>
          item?.isFavorite && (
            <TouchableOpacity
              style={styles.listView}
              onPress={() => redirectDetailsFun(item)}
            >
              <View style={styles.nameView}>
                <Text style={styles.nameText}>{item?.name}</Text>
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
                    <Text style={styles.countText}>
                      {item.stargazers_count}
                    </Text>
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

              <View style={styles.horizontalLine} />
            </TouchableOpacity>
          )
        }
        style={styles.listContainer}
        contentContainerStyle={[styles.contentContainerStyle]}
        ListEmptyComponent={
          <View style={styles.emptyItemContainer}>
            <Text style={styles.noItemText}>Not available products</Text>
          </View>
        }
        keyExtractor={(item, index) => item.id + index.toString()}
      />
    </View>
  );
}
