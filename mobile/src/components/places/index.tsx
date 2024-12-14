import { Text, useWindowDimensions } from 'react-native';
import { useRef } from 'react';

import { Place, PlaceProps } from './place';

//Importação da Navegação
import { router } from 'expo-router';

import { styles } from './style';

//npm i @gorhom/bottom-sheet
//npx expo install react-native-reanimated react-native-gesture-handler
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';

type Props = {
  data: PlaceProps[];
};

export function Places({ data }: Props) {
  const dimensions = useWindowDimensions();
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = {
    min: 278,
    max: dimensions.height - 128,
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={[snapPoints.min, snapPoints.max]}
      handleIndicatorStyle={styles.indicator}
      backgroundStyle={styles.container}
      enableOverDrag={false}
    >
      <BottomSheetFlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Place
            data={item}
            onPress={() => router.navigate(`/market/${item.id}`)}
          />
        )}
        contentContainerStyle={styles.content}
        ListHeaderComponent={() => (
          <Text style={styles.title}>Explore locais perto de você:</Text>
        )}
        showsVerticalScrollIndicator={false}
      />
    </BottomSheet>
  );
}
