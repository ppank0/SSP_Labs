import { Text, SafeAreaView, StyleSheet , View} from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <View style={{flex: 0.5}}>
      <Text style={styles.title}>
        5 книжных новинок октября
      </Text>
    </View>
      <View style={{flex: 2, backgroundColor: 'lightgray'}}>
        <Text style={styles.header}>
          "Кадиш.com" Натан ингландер.{"\n"}
          Извдательство "Книжники"
          </Text>
      </View>
      <View style={{flex: 7, backgroundColor: 'gray'}}>
        <Text style={styles.paragraph}>
          Ироничная новелла Натана Ингландера, две личные истории культовой Патти Смит, репортаж британской журналистки о будущем человечества, дебютный роман Оушена Вуонга и журналистское расследование о создании «Моссада». В нашей подборке рассказываем о пяти захватывающих книжных новинках, которые достойны того, чтобы появиться на ваших полках.
          </Text>
      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 14,
    textAlign: 'center',
  },
  title:{
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  header:{
    fontSize: 18,
    textAlign:'center',
    marginTop: 25,
    flex:2
  }
});
