import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, AntDesign, FontAwesome5 } from '@expo/vector-icons';
import Home from './Home';
import Profile from './Profile';
import Notifications from './Notifications';
import Donate from './Donate';
import Activity from './Activity';
import Settings from './Settings';
import CreateAssociation from './CreateAssociation';
import OneStepLeft from './OneStepLeft';
import Congratulations from './Congratulations';
import Donation from './Donation';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#00A5E0',
        tabBarShowLabel: false,
        headerShown: false
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Donate"
        component={Donation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="donate" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="setting" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Tabs