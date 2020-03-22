import React, {useState} from 'react';

import {
  StatusBar,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {Container, Transparency, Input, Button, ButtonText} from './styles';
import api from '~/services/api';
import {showMessage} from 'react-native-flash-message';
import bg from '~/assets/bg_home.jpg';

function Main({navigation}) {
  const [country, setCountry] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    try {
      setLoading(true);

      const result = await api.get(`countries/${country}`);
      if (result.data.country === undefined) {
        showMessage({
          message: 'Country not found',
          type: 'danger',
        });
        return;
      }
      navigation.navigate('Details', {data: result.data});
    } catch (error) {
      showMessage({
        message: error,
        type: 'danger',
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{flex: 1}}>
      <Container source={bg} resizeMode="cover">
        <Transparency colors={['transparent', 'black']}>
          <StatusBar barStyle="light-content" />

          <Input
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="ex: china, japan, italy, france"
            value={country}
            onChangeText={text => setCountry(text)}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />

          <Button onPress={handleSubmit} disabled={loading}>
            {loading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <ButtonText>Search</ButtonText>
            )}
          </Button>
        </Transparency>
      </Container>
    </KeyboardAvoidingView>
  );
}

export default Main;
