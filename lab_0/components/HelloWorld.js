import { Text, View, StyleSheet, Image, SafeAreaView } from 'react-native';

const HelloWorld = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World!!!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Добавьте фон для контейнера, если нужно
  },
  text: {
    padding: 10,
    marging: 0,
    fontSize: 32,
    color: '#d57c8f',
    fontWeight: 'bold',
  },
  
});
export default HelloWorld;