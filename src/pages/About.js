import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Text, View, Button } from 'react-native'
import { Header } from '../components'

const About = ({ navigation }) => {
    return (
        <>
            <Header title="About" />
            <View>
                <Text>Ini About</Text>
                <Button title="kembali ke Home" onPress={() => navigation.goBack()} />
            </View>
        </>
    )
}

export default About
