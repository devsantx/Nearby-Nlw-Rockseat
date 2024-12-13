import { Text, View } from 'react-native';

//Importação das Estilizações
import { colors } from '@/styles/colors';
import { styles } from './style';

//Importação de Icones
//npm install @tabler/icons-react-native
//npx expo install react-native-svg
//A biblioteca utiliza svg como base para os ícones, então precisa baixar svg para o react
import { IconProps } from '@tabler/icons-react-native';

type StepProps = {
  title: string;
  description: string;
  icon: React.ComponentType<IconProps>;
};

export function Step({ title, description, icon: Icon }: StepProps) {
  return (
    <View style={styles.container}>
      {Icon && <Icon size={32} color={colors.red.base} />}
      <View style={styles.details}>
        
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}
