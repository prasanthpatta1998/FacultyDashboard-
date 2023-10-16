import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Routes from "./containers/components/Routes"
import BasicInformation from "./containers/components/BasicInformation"
import FacultyTimeTable from "./containers/components/FacultyTimeTable"
import InvigilationAllotment from "./containers/components/InvigilationAllotment"
import Circulars from "./containers/components/Circulars"
import StudentAttendenceMark from "./containers/components/StudentAttendenceMark"


const Stack = createNativeStackNavigator()

const App =()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator >
        {/* <Stack.Screen name="Login" component={Login}/> */}
        
        <Stack.Screen name="Routes" component={Routes} options={{ headerShown: false }}/>
        <Stack.Screen name="Basic Information" component={BasicInformation} options={{ headerShown: false }}/>
        <Stack.Screen name="Student Attendence Mark" component={StudentAttendenceMark} options={{ headerShown: false }}/>
        <Stack.Screen name="Faculty Time Table" component={FacultyTimeTable} options={{ headerShown: false }}/>
        <Stack.Screen name="Invigilation Allotment" component={InvigilationAllotment} options={{ headerShown: false }}/>
        <Stack.Screen name="Circular's" component={Circulars} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;
