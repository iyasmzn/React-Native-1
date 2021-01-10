import React, { useState, useEffect } from 'react'
import { Text, View, Button } from 'react-native'
import { Header } from '../components'

const Home = ({ navigation }) => {
    const [contoh, setContoh] = useState('nilai awal')
    const [show, setShow] = useState(false)    
    return (
        <>
            <Header title="Home" noBack />
            <View>
                <Text>Ini Home</Text>
                <Button title="ke About" onPress={() => navigation.navigate('About')} />

                <Text>{contoh}</Text>
                <Button title="Ubah Contoh" onPress={() => setContoh('Ha Ha HA')} />

                {show && <Text>Aku Muncul</Text>}
                <Button title="Munculkan" onPress={() => setShow( nowValue => !nowValue )} />
                
                <Button title="Ke Form" onPress={() => navigation.navigate('Form')} />
                
            </View>
        </>
    )
}

export default Home
