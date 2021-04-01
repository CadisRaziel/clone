import 'react-native-gesture-handler';
import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Feed from './screens/Feed';
import AddPhoto from './screens/AddPhoto'
import Profile from './screens/Profile'
import Login from './screens/Login'



const Tab = createBottomTabNavigator();
const RootNavigator = createSwitchNavigator({
    Profile: { screen: Profile },
    Login: { screen: Login }
}, {
    initialRouteName: 'Profile'
});



const Navigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={'Feed'}
                tabBarOptions={{ showLabel: false }}>
                <Tab.Screen
                    name={'Feed'}
                    component={Feed}
                    options={{
                        title: 'Feed',
                        tabBarIcon: ({ focused }) => (
                            <FontAwesome
                                name="home"
                                size={30}
                                color={focused ? '#696969' : '#000'}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name={'AddPhoto'}
                    component={AddPhoto}
                    options={{
                        title: 'Add Picture',
                        tabBarIcon: ({ focused }) => (
                            <FontAwesome
                                name="camera"
                                size={30}
                                color={focused ? '#696969' : '#000'}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name={'Profile'}
                    component={RootNavigator}
                    options={{
                        title: 'Login',
                        tabBarIcon: ({ focused }) => (
                            <FontAwesome
                                name="user"
                                size={30}
                                color={focused ? '#696969' : '#000'}
                            />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default Navigator;