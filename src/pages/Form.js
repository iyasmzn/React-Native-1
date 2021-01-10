import React, { useState } from 'react'
import { Text, View, TextInput, Button } from 'react-native'
import { Header } from '../components'

const From = () => {
    const [form, setForm] = useState({
        nama: null,
        umur: null
    })
    
    const handleSetForm = (type, val) => setForm( currForm => ({ ...currForm, [type]: val }) )

    const handleSubmit = () => {
        const checkForm = Object.values(form).some(val => val == null)
        if (checkForm) return alert('Semua form wajib terisi')
        
        alert(JSON.stringify(form))
    }
    
    return (
        <>
            <Header title="Form" />

            <Text style={styles.label}>Nama</Text>
            <TextInput style={styles.input} value={form.nama} onChangeText={(val) => handleSetForm('nama', val)} />

            <Text style={styles.label}>Umur</Text>
            <TextInput style={styles.input} value={form.umur} onChangeText={val => handleSetForm('umur', val)} />

            <Button title="Submit" onPress={handleSubmit} />
        </>
    )
}

export default From

const styles = {
    label: { marginTop: 20, marginBottom: 5 },
    input: { backgroundColor: '#fff' },
}