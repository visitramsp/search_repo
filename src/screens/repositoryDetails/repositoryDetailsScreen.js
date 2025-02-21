import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './repositoryDetailsScreen.style';
import { ArrowLeft } from '../../assets/icon';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../../theme';
import { useDispatch, useSelector } from 'react-redux';
import { setRepositoryList } from '../../store/repository/reduce';
import moment from 'moment/moment';
export default function repositoryDetailsScreen({ route }) {
  const [item, setItem] = useState(route?.params?.item || {});
  const data = useSelector((state) => state.repository.repositoryList);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const addFavorite = (id) => {
    setItem((prevItem) => ({
      ...prevItem,
      isFavorite: !prevItem.isFavorite
    }));
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
        <Text style={styles.heading}>Details</Text>
      </View>
      <View style={styles.listView}>
        <View style={styles.nameView}>
          <Text style={styles.nameText}>{item?.name}</Text>
          <TouchableOpacity onPress={() => addFavorite(item?.id)}>
            <MaterialIcons
              name={item?.isFavorite ? 'favorite' : 'favorite-border'}
              size={20}
              color={item?.isFavorite ? 'green' : Colors.black}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.descText}>{item?.description}</Text>

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
              source={
                item?.owner?.avatar_url
                  ? {
                      uri: item?.owner?.avatar_url
                    }
                  : require('./../../assets/imageTask/profile.png')
              }
              style={styles.profileImage}
            />
            <Text style={styles.ownerText}>{item?.owner?.login}</Text>
          </View>
        </View>
        <View style={[styles.dateView, { marginTop: 10 }]}>
          <Text style={styles.dateHeading}>Created Date : </Text>
          <Text style={styles.createDateText}>
            {moment(item?.created_at).format('DD/MM/YYYY')}
          </Text>
        </View>
        <View style={styles.dateView}>
          <Text style={styles.dateHeading}>Updated Date : </Text>
          <Text style={styles.createDateText}>
            {moment(item?.updated_at).format('DD/MM/YYYY')}
          </Text>
        </View>
        <View style={styles.dateView}>
          <Text style={styles.dateHeading}>Language : </Text>
          <Text style={styles.createDateText}>{item?.language}</Text>
        </View>
        <View style={styles.dateView}>
          <Text style={styles.dateHeading}>Topics : </Text>
          <View style={styles.topicsView}>
            {item?.topics?.map((elem) => (
              <Text style={styles.createDateText}>{elem}, </Text>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
}
