import React from 'react'
import { createNavigatorFactory, NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Home, About } from '../pages'

const Stack = createStackNavigator()

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="About" component={About} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator