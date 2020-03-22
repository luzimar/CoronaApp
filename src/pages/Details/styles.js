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

export const Text = styled.Text`
  color: #fff;
  font-weight: 600;
  font-size: 20px;
  margin-top: 20px;
  text-align: center;
`;
