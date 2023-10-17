import {ScrollView, Text, View, FlatList, StyleSheet} from 'react-native';
import Footer from '../Footer';
import {useEffect, useState} from 'react';

import axios from 'axios';

// const dataArray = [
//   {
//     id: 1,
//     title: 'Item 1',
//     block: 'Block A',
//     date: '2023-10-15',
//     session: 'Morning',
//     month: 'October',
//   },
//   {
//     id: 2,
//     title: 'Item 2',
//     block: 'Block B',
//     date: '2023-10-16',
//     session: 'Afternoon',
//     month: 'October',
//   },
//   {
//     id: 3,
//     title: 'Item 3',
//     block: 'Block C',
//     date: '2023-10-17',
//     session: 'Evening',
//     month: 'October',
//   },
//   {
//     id: 4,
//     title: 'Item 1',
//     block: 'Block A',
//     date: '2023-10-15',
//     session: 'Morning',
//     month: 'October',
//   },
//   {
//     id: 5,
//     title: 'Item 2',
//     block: 'Block B',
//     date: '2023-10-16',
//     session: 'Afternoon',
//     month: 'October',
//   },
//   {
//     id: 6,
//     title: 'Item 3',
//     block: 'Block C',
//     date: '2023-10-17',
//     session: 'Evening',
//     month: 'October',
//   },
//   {
//     id: 7,
//     title: 'Item 1',
//     block: 'Block A',
//     date: '2023-10-15',
//     session: 'Morning',
//     month: 'October',
//   },
//   {
//     id: 8,
//     title: 'Item 2',
//     block: 'Block B',
//     date: '2023-10-16',
//     session: 'Afternoon',
//     month: 'October',
//   },
//   {
//     id: 9,
//     title: 'Item 3',
//     block: 'Block C',
//     date: '2023-10-17',
//     session: 'Evening',
//     month: 'October',
//   },
//   {
//     id: 10,
//     title: 'Item 1',
//     block: 'Block A',
//     date: '2023-10-15',
//     session: 'Morning',
//     month: 'October',
//   },
//   {
//     id: 11,
//     title: 'Item 2',
//     block: 'Block B',
//     date: '2023-10-16',
//     session: 'Afternoon',
//     month: 'October',
//   },
//   {
//     id: 12,
//     title: 'Item 3',
//     block: 'Block C',
//     date: '2023-10-17',
//     session: 'Evening',
//     month: 'October',
//   },
//   {
//     id: 13,
//     title: 'Item 1',
//     block: 'Block A',
//     date: '2023-10-15',
//     session: 'Morning',
//     month: 'October',
//   },
//   {
//     id: 14,
//     title: 'Item 2',
//     block: 'Block B',
//     date: '2023-10-16',
//     session: 'Afternoon',
//     month: 'October',
//   },
//   {
//     id: 15,
//     title: 'Item 3',
//     block: 'Block C',
//     date: '2023-10-17',
//     session: 'Evening',
//     month: 'October',
//   },
//   {
//     id: 16,
//     title: 'Item 1',
//     block: 'Block A',
//     date: '2023-10-15',
//     session: 'Morning',
//     month: 'October',
//   },
//   {
//     id: 17,
//     title: 'Item 2',
//     block: 'Block B',
//     date: '2023-10-16',
//     session: 'Afternoon',
//     month: 'October',
//   },
//   {
//     id: 18,
//     title: 'Item 3',
//     block: 'Block C',
//     date: '2023-10-17',
//     session: 'Evening',
//     month: 'October',
//   },
//   {
//     id: 19,
//     title: 'Item 1',
//     block: 'Block A',
//     date: '2023-10-15',
//     session: 'Morning',
//     month: 'October',
//   },
//   {
//     id: 20,
//     title: 'Item 2',
//     block: 'Block B',
//     date: '2023-10-16',
//     session: 'Afternoon',
//     month: 'October',
//   },
//   {
//     id: 21,
//     title: 'Item 3',
//     block: 'Block C',
//     date: '2023-10-17',
//     session: 'Evening',
//     month: 'October',
//   },
//   {
//     id: 22,
//     title: 'Item 1',
//     block: 'Block A',
//     date: '2023-10-15',
//     session: 'Morning',
//     month: 'October',
//   },
//   {
//     id: 23,
//     title: 'Item 2',
//     block: 'Block B',
//     date: '2023-10-16',
//     session: 'Afternoon',
//     month: 'October',
//   },
//   {
//     id: 24,
//     title: 'Item 3',
//     block: 'Block C',
//     date: '2023-10-17',
//     session: 'Evening',
//     month: 'October',
//   },
//   {
//     id: 25,
//     title: 'Item 1',
//     block: 'Block A',
//     date: '2023-10-15',
//     session: 'Morning',
//     month: 'October',
//   },
//   {
//     id: 26,
//     title: 'Item 2',
//     block: 'Block B',
//     date: '2023-10-16',
//     session: 'Afternoon',
//     month: 'October',
//   },
//   {
//     id: 28,
//     title: 'Item 3',
//     block: 'Block C',
//     date: '2023-10-17',
//     session: 'Evening',
//     month: 'October',
//   },
//   {
//     id: 29,
//     title: 'Item 1',
//     block: 'Block A',
//     date: '2023-10-15',
//     session: 'Morning',
//     month: 'October',
//   },
//   {
//     id: 30,
//     title: 'Item 2',
//     block: 'Block B',
//     date: '2023-10-16',
//     session: 'Afternoon',
//     month: 'October',
//   },
//   {
//     id: 31,
//     title: 'Item 3',
//     block: 'Block C',
//     date: '2023-10-17',
//     session: 'Evening',
//     month: 'October',
//   },

//   // Add more objects with the same keys as needed
// ];

const InvigilationAllotment = ({navigation}) => {
  const [invigilationData, setInvigilationData] = useState([]);

  useEffect(() => {
    axios
      .get(
        'http://192.168.0.210:9095/examtool-backend-adhikrit/api/v1/getInvigilationbyFacultyName?facultyName=deepak@gmail.com',
      )
      .then(response => {
        console.log('Response from Java:', response.data);
        setInvigilationData(response.data);
      })
      .catch(error => {
         console.error('Error:', error);
      });
    // const fetchingData = async () => {
    //   const url =
    //     'https://app.adhikrit.com:8443/examtool-backend-adhikrit/api/v1/getInvigilationbyFacultyName?facultyName=deepak@gmail.com';
    //   fetch(url);
    // };
    // fetchingData();
  }, []);

  return (
    <>
      <ScrollView>
        <Text style={styles.heading}>Invigilation Allotment:</Text>
        <ScrollView horizontal={true} style={styles.table}>
          {/* {invigilationData.length ? ( */}
          <View>
            <View style={styles.mainContainer}>
              <Text style={[styles.textStyle, styles.headers]}>Title</Text>
              <Text style={[styles.textStyle, styles.headers]}>Block</Text>
              <Text style={[styles.textStyle, styles.headers]}>Date</Text>
              <Text style={[styles.textStyle, styles.headers]}>Session</Text>
              <Text style={[styles.textStyle, styles.headers]}>Month</Text>
            </View>
            <FlatList
              data={invigilationData}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index}) => {

                const cellColor = index%2 === 0 ? "#dee3e3" : "#90f3f5"

                return(
                // <View style={[styles.rows,{backgroundColor:cellColor}]}>
                //   <Text style={[styles.textStyle, { fontSize: 14 }]}>{item.title}</Text>
                //   <Text style={[styles.textStyle, { fontSize: 14 }]}>{item.block}</Text>
                //   <Text style={[styles.textStyle, { fontSize: 14 }]}>{item.date}</Text>
                //   <Text style={[styles.textStyle, { fontSize: 14 }]}>{item.session}</Text>
                //   <Text style={[styles.textStyle, { fontSize: 14 }]}>{item.month}</Text>
                // </View>

                <View style={[styles.rows,{backgroundColor:cellColor}]}>
                  <Text style={[styles.textStyle, {fontSize: 14}]}>
                    {item.invigilationAllotmentPrimaryKey.examTitle}
                  </Text>
                  <Text style={[styles.textStyle, {fontSize: 14}]}>
                    {item.invigilationAllotmentPrimaryKey.block}
                  </Text>
                  <Text style={[styles.textStyle, {fontSize: 14}]}>
                    {item.invigilationAllotmentPrimaryKey.date}
                  </Text>
                  <Text style={[styles.textStyle, {fontSize: 14}]}>
                    {item.invigilationAllotmentPrimaryKey.session}
                  </Text>
                  <Text style={[styles.textStyle, {fontSize: 14}]}>
                    {item.monthDate}
                  </Text>
                </View>

                )
              }
              }
            />
          </View>
          {/* ) : null} */}
        </ScrollView>
      </ScrollView>
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
  mainContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rows: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  table: {
    marginTop:20,
    marginLeft:10,
    marginRight:10,
    marginBottom:70,
    backgroundColor: 'white',
    borderRadius: 5,
    elevation: 5,
  },
  textStyle: {
    flex: 1,
    color: 'black',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    paddingTop:12.5,
    fontSize: 12,
    textAlign: 'center',
    width: 320,
    height: 40,
  },
  headers: {
    fontSize: 16,
    paddingTop: 12.5,
    backgroundColor: '#22b3d4',
    fontWeight: 'bold',
  },
});
