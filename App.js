import React from "react";
import {
  View,
  Image as RNImage,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import { Image } from "expo-image";

const { width, height } = Dimensions.get("window");

const images = [
  // this images are ok
  "https://ucarecdn.com/7ae04c38-ede7-4451-bc16-bc376cfb9a0a/IMAGE20230302224325.jpg",
  "https://ucarecdn.com/8887b6cd-ff28-491c-ba16-750b530a005d/454BF61FEBA0483C8DA814B5FBAD124F.jpg",
  "https://ucarecdn.com/17690658-4c1e-42db-9566-24481e90abec/IMAGE20230302224315.jpg",
  "https://ucarecdn.com/4ef4ea2e-d332-4ad6-8529-df365e8def1c/IMAGE20230302224347.jpg",
  // this images below affect the performance
  "https://ucarecdn.com/40855c87-7727-4797-b770-4e853876eecb/659CC36EB17B4768B254EDA7F50AB7E8.jpg",
  "https://ucarecdn.com/41b78879-4ec9-4dbd-b30b-79a98ef90b97/CFCA26CF55A240D9BC2983E88346AB76.jpg",
];

const Second = () => (
  <View style={style.tab}>
    {images.map((item, idx) => (
      <Image key={idx} style={style.img} source={item} />
      // uncomment the line below to see performance with react native Image component
      // <RNImage key={idx} style={style.img} source={{ uri: item }} />
    ))}
  </View>
);

const style = StyleSheet.create({
  tab: { flexDirection: "row", gap: 16, flexWrap: "wrap" },
  img: { width: width, height: height },
});

export default function App() {
  return (
    <ScrollView>
      <Second />
    </ScrollView>
  );
}
