import { View, Text } from 'react-native';
import { IconTicket } from '@tabler/icons-react-native';

import { styles } from './style';
import { colors, fontFamily } from '@/styles/theme';

type Props = {
  code: string;
};

export function Coupons({ code }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Utilize esse cupom:</Text>

      <View style={styles.content}>
        <IconTicket size={24} color={colors.green.light} />
        <Text style={styles.code}>{code}</Text>
      </View>
    </View>
  );
}
