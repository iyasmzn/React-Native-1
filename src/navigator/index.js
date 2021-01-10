import React from 'react'
import { createNavigatorFactory, NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Home, About, Form } from '../pages'

const Stack = createStackNavigator()

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="About" component={About} />
                <Stack.Screen name="Form" component={Form} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator