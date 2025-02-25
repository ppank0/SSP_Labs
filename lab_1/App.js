import { Text, SafeAreaView, StyleSheet, Image } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    
      <Text style={styles.paragraph}>
        Журнал Bright
      </Text>

      <Card style={styles.Card}>

        <Text style={{marginBottom: 30, color: 'blue'}}
          onPress={() => Linking.openURL('http://google.com')}>
        Новости
        </Text>

        <Image style={styles.img} 
          source={{
            uri: 'https://i0.wp.com/amandasmallwoodnutrition.com/wp-content/uploads/2022/03/image8.jpeg?resize=1536%2C1181&ssl=1',
          }}>
        </Image>

        <Text style={styles.title}>
          Превращаем стресс в твоего помощника
        </Text>


        <Text style={{fontSize: 16, textAlign: 'justify'}}>
        Your diet and lifestyle can have a powerful effect on your health.
         However, although some changes can be felt sooner, research has shown that it can take weeks to start to see improvements and make really powerful changes.
          In my experience, working together over a period of time is the most effective way to make long-lasting dietary and lifestyle changes that can make a real difference to your health.
        </Text>

      </Card>

      

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    marginTop:40,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'justify',
  },
  Card: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
    margin: 5,
    paddingBottom: 60,
  },
  img: {
    width: 300,
    height: 150,
    marginBottom: 30,
  },
});
