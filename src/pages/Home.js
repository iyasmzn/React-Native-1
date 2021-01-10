import React, { useState, useEffect } from 'react'
import { Text, View, Button, FlatList, ActivityIndicator } from 'react-native'
import { Header } from '../components'

const Home = ({ navigation }) => {
    const [contoh, setContoh] = useState('nilai awal')
    const [show, setShow] = useState(false)    
    const [provinces, setProvinces] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('https://dev.farizdotid.com/api/daerahindonesia/provinsi')
        .then(res => res.json())
        .then(data => setProvinces(data.provinsi))
        .catch(err => alert(err))
        .finally(() => setLoading(false))
    }, [contoh])

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

                <FlatList 
                    data={provinces}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) => (
                        <Text>{item.nama}</Text>
                    )}
                />
                
            </View>

            {loading && <ActivityIndicator size="large" color="blue" style={{ position: 'absolute', elevation: 20, top: 10, left: 0, right: 0 }} />}
        </>
    )
}

export default Home
