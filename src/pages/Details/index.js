import React from 'react';
import {Container, Transparency, Text} from './styles';
import {StatusBar} from 'react-native';
import bg from '~/assets/bg_details.jpg';

export default function Details({route}) {
  const {data} = route.params;
  return (
    <Container source={bg} resizeMode="cover">
      <Transparency colors={['transparent', 'black']}>
        <StatusBar barStyle="light-content" />
        <Text>Cases: {data.cases}</Text>
        <Text>Today cases: {data.todayCases}</Text>
        <Text>Deaths: {data.deaths}</Text>
        <Text>Today deaths: {data.todayDeaths}</Text>
        <Text>Recovered: {data.recovered}</Text>
        <Text>Critical: {data.critical}</Text>
      </Transparency>
    </Container>
  );
}
