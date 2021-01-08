import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'

const Header = ({ title, noBack }) => {

    const navigation = useNavigation()
    
    return (
        <View style={{ flexDirection: 'row', padding: 15, backgroundColor: '#fff', elevation: 3, alignItems: 'center' }}>
            { !noBack &&  
                <TouchableOpacity style={{ marginRight: 20 }} onPress={() => navigation.goBack()}>
                    <Icon name="chevron-left" size={ 25 } />
                </TouchableOpacity>
            }
            <Text style={{ fontWeight: '600', fontSize: 17 }}>{ title }</Text>
        </View>
    )
}

export default Header