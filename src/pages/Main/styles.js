import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {ImageBackground} from 'react-native';

export const Container = styled(ImageBackground)`
  flex: 1;
`;

export const Transparency = styled(LinearGradient)`
  position: absolute;
  justify-content: center;
  padding: 30px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  margin-top: 20px;
  background: #fff;
  border-radius: 4px;
  padding: 0 20px;
  height: 52px;
  font-size: 16px;
  color: #333;
`;

export const Button = styled.TouchableOpacity`
  background: #00a878;
  border-radius: 4px;
  padding: 0 20px;
  height: 52px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;
