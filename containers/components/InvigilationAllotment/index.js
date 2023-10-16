import {ScrollView, Text, View, FlatList, StyleSheet} from 'react-native';
import Footer from '../Footer';
import {useEffect} from 'react';


import axios from 'axios';

const dataArray = [
  {
    id: 1,
    title: 'Item 1',
    block: 'Block A',
    date: '2023-10-15',
    session: 'Morning',
    month: 'October',
  },
  {
    id: 2,
    title: 'Item 2',
    block: 'Block B',
    date: '2023-10-16',
    session: 'Afternoon',
    month: 'October',
  },
  {
    id: 3,
    title: 'Item 3',
    block: 'Block C',
    date: '2023-10-17',
    session: 'Evening',
    month: 'October',
  },
  {
    id: 4,
    title: 'Item 1',
    block: 'Block A',
    date: '2023-10-15',
    session: 'Morning',
    month: 'October',
  },
  {
    id: 5,
    title: 'Item 2',
    block: 'Block B',
    date: '2023-10-16',
    session: 'Afternoon',
    month: 'October',
  },
  {
    id: 6,
    title: 'Item 3',
    block: 'Block C',
    date: '2023-10-17',
    session: 'Evening',
    month: 'October',
  },
  {
    id: 7,
    title: 'Item 1',
    block: 'Block A',
    date: '2023-10-15',
    session: 'Morning',
    month: 'October',
  },
  {
    id: 8,
    title: 'Item 2',
    block: 'Block B',
    date: '2023-10-16',
    session: 'Afternoon',
    month: 'October',
  },
  {
    id: 9,
    title: 'Item 3',
    block: 'Block C',
    date: '2023-10-17',
    session: 'Evening',
    month: 'October',
  },
  {
    id: 10,
    title: 'Item 1',
    block: 'Block A',
    date: '2023-10-15',
    session: 'Morning',
    month: 'October',
  },
  {
    id: 11,
    title: 'Item 2',
    block: 'Block B',
    date: '2023-10-16',
    session: 'Afternoon',
    month: 'October',
  },
  {
    id: 12,
    title: 'Item 3',
    block: 'Block C',
    date: '2023-10-17',
    session: 'Evening',
    month: 'October',
  },
  {
    id: 13,
    title: 'Item 1',
    block: 'Block A',
    date: '2023-10-15',
    session: 'Morning',
    month: 'October',
  },
  {
    id: 14,
    title: 'Item 2',
    block: 'Block B',
    date: '2023-10-16',
    session: 'Afternoon',
    month: 'October',
  },
  {
    id: 15,
    title: 'Item 3',
    block: 'Block C',
    date: '2023-10-17',
    session: 'Evening',
    month: 'October',
  },
  {
    id: 16,
    title: 'Item 1',
    block: 'Block A',
    date: '2023-10-15',
    session: 'Morning',
    month: 'October',
  },
  {
    id: 17,
    title: 'Item 2',
    block: 'Block B',
    date: '2023-10-16',
    session: 'Afternoon',
    month: 'October',
  },
  {
    id: 18,
    title: 'Item 3',
    block: 'Block C',
    date: '2023-10-17',
    session: 'Evening',
    month: 'October',
  },
  {
    id: 19,
    title: 'Item 1',
    block: 'Block A',
    date: '2023-10-15',
    session: 'Morning',
    month: 'October',
  },
  {
    id: 20,
    title: 'Item 2',
    block: 'Block B',
    date: '2023-10-16',
    session: 'Afternoon',
    month: 'October',
  },
  {
    id: 21,
    title: 'Item 3',
    block: 'Block C',
    date: '2023-10-17',
    session: 'Evening',
    month: 'October',
  },
  {
    id: 22,
    title: 'Item 1',
    block: 'Block A',
    date: '2023-10-15',
    session: 'Morning',
    month: 'October',
  },
  {
    id: 23,
    title: 'Item 2',
    block: 'Block B',
    date: '2023-10-16',
    session: 'Afternoon',
    month: 'October',
  },
  {
    id: 24,
    title: 'Item 3',
    block: 'Block C',
    date: '2023-10-17',
    session: 'Evening',
    month: 'October',
  },
  {
    id: 25,
    title: 'Item 1',
    block: 'Block A',
    date: '2023-10-15',
    session: 'Morning',
    month: 'October',
  },
  {
    id: 26,
    title: 'Item 2',
    block: 'Block B',
    date: '2023-10-16',
    session: 'Afternoon',
    month: 'October',
  },
  {
    id: 28,
    title: 'Item 3',
    block: 'Block C',
    date: '2023-10-17',
    session: 'Evening',
    month: 'October',
  },
  {
    id: 29,
    title: 'Item 1',
    block: 'Block A',
    date: '2023-10-15',
    session: 'Morning',
    month: 'October',
  },
  {
    id: 30,
    title: 'Item 2',
    block: 'Block B',
    date: '2023-10-16',
    session: 'Afternoon',
    month: 'October',
  },
  {
    id: 31,
    title: 'Item 3',
    block: 'Block C',
    date: '2023-10-17',
    session: 'Evening',
    month: 'October',
  },

  // Add more objects with the same keys as needed
];

const InvigilationAllotment = ({navigation}) => {
//   useEffect(() => {
//     axios.get("http://192.168.0.174:9095/examtool-backend-adhikrit/api/v1/getInvigilationbyFacultyName?facultyName=deepak@gmail.com",
    
//     )
//     .then((response) => {
//       console.log('Response from Java:', response.data);
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });
//     // const fetchingData = async () => {
//     //   const url =
//     //     'https://app.adhikrit.com:8443/examtool-backend-adhikrit/api/v1/getInvigilationbyFacultyName?facultyName=deepak@gmail.com';
//     //   fetch(url, {
//     //     disableAllSecurity: false,
//     //     sslPinning: {
//     //       certs: ['wso2carbon'],
//     //     },
//     //   });
//     // };
//     // fetchingData();
//   }, []);

  return (
    <>
      <Text style={styles.heading}>Invigilation Allotment:</Text>
      <View style={styles.table}>
        <View style={styles.mainContainer}>
          <Text style={[styles.textStyle, styles.headers]}>Title</Text>
          <Text style={[styles.textStyle, styles.headers]}>Block</Text>
          <Text style={[styles.textStyle, styles.headers]}>Date</Text>
          <Text style={[styles.textStyle, styles.headers]}>Session</Text>
          <Text style={[styles.textStyle, styles.headers]}>Month</Text>
        </View>
        <FlatList
          data={dataArray}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={styles.rows}>
              <Text style={[styles.textStyle, {fontSize: 9}]}>
                {item.title}
              </Text>
              <Text style={[styles.textStyle, {fontSize: 9}]}>
                {item.block}
              </Text>
              <Text style={[styles.textStyle, {fontSize: 9}]}>{item.date}</Text>
              <Text style={[styles.textStyle, {fontSize: 9}]}>
                {item.session}
              </Text>
              <Text style={[styles.textStyle, {fontSize: 9}]}>
                {item.month}
              </Text>
            </View>
          )}
        />
      </View>
      <Footer navigation={navigation} />
    </>
  );
};

export default InvigilationAllotment;

const styles = StyleSheet.create({
  heading: {
    color: '#22b3d4',
    marginTop: 10,
    marginLeft: 10,
    fontSize: 20,
    fontWeight: '700',
  },
  table: {
    marginLeft: 10,
    marginRight: 10,
    top: 25,
    width: '95%',
    height: '83%',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    elevation: 5,
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rows: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    flex: 1,
    color: 'black',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    padding: 6,
    fontSize: 12,
    textAlign: 'center',
  },
  headers: {
    fontSize: 12,
    paddingTop: 10,
    backgroundColor: '#22b3d4',
    fontWeight: 'bold',
  },
});
