import { ActivityIndicator } from 'react-native';

//Importação das Estilizações
import { styles } from './style';
import { colors } from '@/styles/theme';

export function Loading() {
  return (
    <ActivityIndicator color={colors.green.base} style={styles.container} />
  );
}
