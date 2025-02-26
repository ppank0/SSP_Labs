import React from 'react';
import { View, Text, Image, TextInput, ScrollView, StyleSheet, Button } from 'react-native';

const JobVacancy = () => {
  const jobImageUrl = 'https://avatars.mds.yandex.net/i?id=4035ef69dd23b287e81b9efbbe0dcaaceee8009835a39e6f-5334229-images-thumbs&n=13';

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Вакансия: Программист</Text>
        <Image source={{ uri: jobImageUrl }} style={styles.image} />
        <View style={styles.description}>
          <Text>
            Мы приглашаем опытного программиста присоединиться к нашей команде.{"\n"}
            От вас требуется:{"\n"}
          
            - Знание JavaScript, React Native, Redux{"\n"}
            - Опыт работы с RESTful API{"\n"}
            - Умение писать чистый и эффективный код{"\n"}
            - Знание принципов SOLID и паттернов проектирования{"\n"}
            - Опыт работы с системами контроля версий (Git){"\n"} 
            - Опыт работы с базами данных (SQL, NoSQL){"\n"}
            - Навыки анализа и оптимизации производительности приложений{"\n"}
            - Умение эффективно коммуницировать и работать в команде{"\n"}
            - Желание развиваться и изучать новые технологии{"\n"}
            Мы предлагаем конкурентную зарплату, интересные проекты и дружелюбный коллектив. Присоединяйтесь к нам!{"\n"}
          </Text>
        </View>
        <TextInput style={styles.input} placeholder="Ваше имя" />
        <TextInput style={styles.input} placeholder="Ваш email" />
        <TextInput style={styles.input} placeholder="Ваш номер телефона" />
        <Button title="Откликнуться" onPress={() => alert('Спасибо за отклик!')} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBlockStart: 150,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  section: {
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    marginBottom: 10,
    textAlign: 'center',
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

export default JobVacancy;