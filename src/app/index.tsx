import { View, Text } from 'react-native';

//Importação dos components
import { Welcome } from '@/components/welcome';
import { Steps } from '@/components/steps';

export default function Index() {
  return (
    <View style={{ flex: 1, padding: 40, gap: 40 }}>
      <Welcome />
      <Steps />
    </View>
  );
}
