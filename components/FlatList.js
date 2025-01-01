import {View, Text, StyleSheet} from 'react-native';

const FlatListCard = ({item}) => {
  return (
    <View style={styles.card}>
      <Text>{item.name}</Text>
      <Text>{item.type}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    borderWidth: 2,
    borderRadius: 20,
    padding: 10,
    marginTop:10,
  },
});
export default FlatListCard;
