import { Text } from "react-native";
import Footer from "../Footer";
import {useEffect} from "react"
import axios from "axios"

const Circulars = ({navigation}) => {

    useEffect(() => {
        axios.get("http://192.168.0.210:9095/examtool-backend-adhikrit/api/v1/getFacultyForBasicInfo?emailId=deepak@gmail.com ",
        )
        .then((response) => {
          console.log('Response from Java:', response.data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
        // const fetchingData = async () => {
        //   const url =
        //     'https://app.adhikrit.com:8443/examtool-backend-adhikrit/api/v1/getInvigilationbyFacultyName?facultyName=deepak@gmail.com';
        //   fetch(url, {
        //     disableAllSecurity: false,
        //     sslPinning: {
        //       certs: ['wso2carbon'],
        //     },
        //   });
        // };
        // fetchingData();
      }, []);

    return(
        <>
<Text style={{color:"black"}}>BasicInformation</Text>
<Footer navigation={navigation}/>
</>
    )
}

export default Circulars