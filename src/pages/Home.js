import React from 'react'
import { Text, View, Button } from 'react-native'
import { Header } from '../components'

const Home = ({ navigation }) => {
    return (
        <>
            <Header title="Home" noBack />
            <View>
                <Text>Ini Home</Text>
                <Button title="ke About" onPress={() => navigation.navigate('About')} />
            </View>
        </>
    )
}

export default Home
