import QRCodeScanner from 'react-native-qrcode-scanner';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #1b5e20;
`;

export const QrCodeReader = styled(QRCodeScanner)``;

export const TextHeader = styled.Text`
  color: #fff;
`;

export const HeaderQr = styled.View`
  width: 100%;
  background-color: #1b5e20;
  align-items: center;
  margin-top: 20px;
`;

export const FooterQr = styled.View`
  padding: 20px;
  justify-content: center;
  width: 100%;
  background-color: #1b5e20;
`;
