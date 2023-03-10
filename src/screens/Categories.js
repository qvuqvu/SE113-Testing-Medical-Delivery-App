import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {colors} from '../global/styles';
import ProductCard from '../components/ProductCard';
import HomeHeader from '../components/HomeHeader';
import {ScrollView} from 'react-native-gesture-handler';
import SearchComponent from '../components/SearchComponent';
import {useTranslation} from 'react-i18next';
import firestore from '@react-native-firebase/firestore';
const SCREEN_WIDTH = Dimensions.get('window').width;

export default function Categories({navigation}) {
  const {t} = useTranslation();
  const [getThuoc, setThuoc] = useState('');
  const [getCovid, setCovid] = useState('');
  const [getThucpham, setThucpham] = useState('');
  const [getThietbi, setThietbi] = useState('');
  const name = [
    t('Thuốc không kê đơn'),
    'COVID-19',
    t('Thực phẩm chức năng'),
    t('Thiết bị y tế'),
  ];
  const [selected, setSelected] = useState(name[0]);
  const [data, setData] = useState([]);

  useEffect(() => {
    firestore()
      .collection('Data')
      .doc('Thuoc')
      .get()
      .then(documentSnapshot => {
        const data = documentSnapshot.data();
        setThuoc(data.Thuoc);
      });
    firestore()
      .collection('Data')
      .doc('Covid')
      .get()
      .then(documentSnapshot => {
        const data = documentSnapshot.data();
        setCovid(data.Covid);
      });
    firestore()
      .collection('Data')
      .doc('Thucphamchucnang')
      .get()
      .then(documentSnapshot => {
        const data = documentSnapshot.data();
        setThucpham(data.Thucphamchucnang);
      });
    firestore()
      .collection('Data')
      .doc('Thietbiyte')
      .get()
      .then(documentSnapshot => {
        const data = documentSnapshot.data();
        setThietbi(data.Thietbiyte);
      });
  }, []);
  useEffect(() => {
    setData(getThuoc);
  }, [getThuoc]);

  const handleSelected = (value, data) => {
    setSelected(value);
    setData(data);
  };

  return (
    <View style={styles.container}>
      <View>
        <HomeHeader navigation={navigation} title={t('Tìm kiếm')} />
        <SearchComponent navigation={navigation} />
      </View>

      <View style={{marginTop: 80, marginLeft: 10, marginBottom: 20}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <CategoriesCard
            image={require('../global/image/categories/category__thuockhongkedon.png')}
            title={name[0]}
            onPress={handleSelected}
            value={selected}
            data={getThuoc}
          />
          <CategoriesCard
            image={require('../global/image/categories/category__covid19.png')}
            title={name[1]}
            onPress={handleSelected}
            value={selected}
            data={getCovid}
          />
          <CategoriesCard
            image={require('../global/image/categories/category__thucphamchucnang.png')}
            title={name[2]}
            onPress={handleSelected}
            value={selected}
            data={getThucpham}
          />
          <CategoriesCard
            image={require('../global/image/categories/category__thietbiyte.png')}
            title={name[3]}
            onPress={handleSelected}
            value={selected}
            data={getThietbi}
          />
        </ScrollView>
      </View>

      <View>
        <FlatList
          style={{marginLeft: 5, marginBottom: 10, marginTop: 20}}
          showsVerticalScrollIndicator={false}
          horizontal={false}
          numColumns={2}
          data={data}
          extraData={data}
          contentContainerStyle={{paddingBottom: 280}}
          keyExtractor={item => {
            return item.id;
          }}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <View>
              <ProductCard
                navigation={navigation}
                screenWidth={SCREEN_WIDTH * 0.4}
                item={item}
              />
            </View>
          )}
        />
      </View>
    </View>
  );
}

function CategoriesCard({image, title, onPress, value, data}) {
  return (
    <TouchableOpacity
      style={[styles.frame, {borderColor: value === title ? 'green' : 'red'}]}
      onPress={() => onPress(title, data)}>
      <View
        style={[
          value === title
            ? {...styles.smallCardSelected}
            : {...styles.smallCard},
        ]}>
        <Image style={{height: 75, width: 100}} source={image} />
        <View>
          <Text
            style={[
              value === title
                ? {...styles.smallCardTextSelected}
                : {...styles.smallCardText},
            ]}>
            {title}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },

  text1: {
    color: colors.text,
    fontSize: 16,
  },

  TextInput: {
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 0,
    borderColor: '#86939e',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },

  SearchArea: {
    marginTop: 10,
    width: 375,
    height: 50,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.grey4,
    flexDirection: 'row',
    alignItems: 'center',
  },

  searchIcon: {
    fontSize: 24,
    padding: 5,
    color: colors.grey2,
    marginLeft: 10,
  },

  view1: {
    height: 70,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },

  view2: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
  },

  icon2: {
    fontSize: 24,
    padding: 5,
    color: colors.grey2,
  },
  modal: {
    flex: 1,
  },
  imageView: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH * 0.4475,
    height: SCREEN_WIDTH * 0.7,
    marginLeft: SCREEN_WIDTH * 0.035,
    marginBottom: SCREEN_WIDTH * 0.035,
  },

  image: {
    height: SCREEN_WIDTH * 0.4475,
    width: SCREEN_WIDTH * 0.4475,
    borderRadius: 10,
  },

  listHeader: {
    fontSize: 16,
    color: colors.grey2,
    paddingBottom: 10,
    marginLeft: 12,
  },

  textView: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(52, 52, 52,0.3)',
  },

  smallCardSelected: {
    borderRadius: 20,
    backgroundColor: colors.buttons,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 170,
    margin: 10,
    height: 120,
  },

  smallCard: {
    borderRadius: 20,
    backgroundColor: colors.grey5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 170,
    margin: 10,
    height: 120,
  },

  smallCardText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: colors.grey2,
  },

  smallCardTextSelected: {
    fontSize: 13,
    fontWeight: 'bold',
    color: colors.cardbackground,
  },
  frame: {},
});
