import { ImageBackground, View } from 'react-native';

//Importação de Estilo
import { styles } from './style';

//Importação de Componentes, ícone e Rotas
import { Button } from '@/components/button';
import { IconArrowLeft } from '@tabler/icons-react-native';
import { router } from 'expo-router';

type Props = {
  uri: string;
};

export function Cover({ uri }: Props) {
  return (
    <ImageBackground source={{ uri }} style={styles.container}>
      <View style={styles.header}>
        <Button style={{ width: 40, height: 40 }} onPress={() => router.back()}>
          <Button.Icon icon={IconArrowLeft} />
        </Button>
      </View>
    </ImageBackground>
  );
}
