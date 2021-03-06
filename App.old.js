import React from 'react'
import { View, Text, StatusBar, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const PlanningItem = (props) => (
  <View style={styles.planningItem}>
    <View style={styles.planningCircle}>
      <Icon name="account-group" size={20} color="#fff" />
    </View>
    <Text style={styles.planningAmount}>{props.amount}</Text>
    <Text style={styles.planningDay}>In a {props.day} days</Text>
  </View>
)

const App = () => {

  const planningItems = [
    { amount: 20000, day: 20 },
    { amount: 50000, day: 40 },
    { amount: 30000, day: 30 },
    { amount: 10000, day: 50 },
    { amount: 90000, day: 70 },
  ]
  
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerTopSection}>
            <Image 
              source={{ uri: 'https://www.intheblack.com/-/media/intheblack/allimages/magazine-2020/06-june/farmer-standing-in-field.jpg?rev=a3738b7326974d349044fc34db4db590' }}
              style={styles.userImage} 
            />

            <TouchableOpacity>
              <View style={styles.headerButtonInner}>
                <Text style={styles.headerButtonText}>Payday in a week</Text>
              </View>
            </TouchableOpacity>
          </View>

          <Text style={styles.balanceCaption}>Total Balance To Spend</Text>
          <Text style={styles.balanceAmount}>$9234.99</Text>

        </View>
        
        <View style={styles.planningWrapper}>
          <View style={styles.planningHeader}>
            <Text style={styles.planningTitle}>Planning Ahead</Text>
            <Text>- $5,819.92</Text>
          </View>
          <FlatList 
            horizontal
            data={planningItems}
            renderItem={({item}) => (
              <PlanningItem amount={item.amount} day={item.day} />
            )}
          />
        </View>

      </ScrollView>
    </>
  )
}

const styles = {
  header: {
    backgroundColor: '#36D0B1',
    paddingHorizontal: 20,
    paddingTop: 70,
    paddingBottom: 20,
  },
  headerTopSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  userImage: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  headerButtonInner: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 5,
  },
  headerButtonText: {
    color: '#36D0B1',
  },
  balanceCaption: {
    fontSize: 17,
    color: '#FFF',
  },
  balanceAmount: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFF',
  },
  container: { backgroundColor: '#f2f1f7' },
  planningWrapper: { paddingVertical: 30, borderBottomWidth: 1, borderColor: '#aaa' },
  planningHeader: { flexDirection: 'row', paddingHorizontal: 20, justifyContent: 'space-between', alignItems: 'center' },
  planningTitle: { fontSize: 17 },
  planningItem: { padding: 20, backgroundColor: '#fff', elevation: 2, marginLeft: 20, marginVertical: 20, borderRadius: 15, width: 120 },
  planningCircle: { width: 25, height: 25, backgroundColor: '#24f', borderRadius: 25, marginBottom: 10 },
  planningAmount: { color: 'teal', marginBottom: 2 },
  planningDay: { color: 'silver' },
}

export default App