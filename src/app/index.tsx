import React, { useEffect, useState } from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  View,
  Alert,
} from 'react-native';
import { Container, HeaderQr, FooterQr, TextHeader } from './styles';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { BarCodeReadEvent } from 'react-native-camera';

const App: React.FC = () => {
  const [scan, setScan] = useState(false);
  const [result, setResult] = useState({});

  useEffect(() => {
    setResult({});
  }, []);

  const onSuccess = (e: BarCodeReadEvent) => {
    setResult(e);
    setScan(false);

    if (e.data.substring(0, 4) === 'http') {
      Linking.openURL(e.data).catch(err => Alert.alert('error', err));
    } else {
      Alert.alert(e.data);
    }
  };

  return !scan ? (
    <View style={styles.container}>
      {result && <Text>{JSON.stringify(result)}</Text>}
      <TouchableOpacity
        style={styles.buttonTouchable}
        onPress={() => setScan(true)}>
        <Text style={styles.buttonText}>SCAN</Text>
      </TouchableOpacity>
    </View>
  ) : (
    <Container>
      <HeaderQr>
        <TextHeader>Teste QRCODE</TextHeader>
      </HeaderQr>
      <QRCodeScanner
        onRead={onSuccess}
        bottomContent={
          <FooterQr>
            <TouchableOpacity
              onPress={() => setScan(false)}
              style={{
                width: '100%',
                backgroundColor: 'black',
                borderRadius: 8,
              }}>
              <Text
                style={{ textAlign: 'center', color: 'white', padding: 10 }}>
                VOLTAR
              </Text>
            </TouchableOpacity>
          </FooterQr>
        }
      />
    </Container>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});
