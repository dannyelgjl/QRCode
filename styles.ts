import QRCodeScanner from 'react-native-qrcode-scanner';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin-vertical: 16px;
  background-color: #fff;
`;

export const QrCodeReader = styled(QRCodeScanner)``;

export const TextHeader = styled.Text`
  color: red;
`;

export const HeaderQr = styled.View`
  width: 100%;
  background-color: white;
  padding-top: 12px;
  align-items: center;
`;

export const FooterQr = styled.View`
  padding: 20px;
  justify-content: center;
  width: 100%;
  background-color: white;
`;
