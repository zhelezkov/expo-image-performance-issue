import React from "react";
import { View, SafeAreaView, Image as RNImage } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import { Image } from "expo-image";

const images = [
  "https://ucarecdn.com/40855c87-7727-4797-b770-4e853876eecb/659CC36EB17B4768B254EDA7F50AB7E8.jpg",
  "https://ucarecdn.com/41b78879-4ec9-4dbd-b30b-79a98ef90b97/CFCA26CF55A240D9BC2983E88346AB76.jpg",
  "https://ucarecdn.com/8887b6cd-ff28-491c-ba16-750b530a005d/454BF61FEBA0483C8DA814B5FBAD124F.jpeg",
  "https://ucarecdn.com/17690658-4c1e-42db-9566-24481e90abec/IMAGE20230302224315.jpg",
  "https://ucarecdn.com/7ae04c38-ede7-4451-bc16-bc376cfb9a0a/IMAGE20230302224325.jpg",
  "https://ucarecdn.com/4ef4ea2e-d332-4ad6-8529-df365e8def1c/IMAGE20230302224347.jpg",
];

const Second = () => {
  return (
    <View style={{ flexDirection: "row", gap: 16, flexWrap: "wrap" }}>
      {images.map((item) => (
        <View key={item} style={{ width: 88, height: 152 }}>
          <Image style={{ flex: 1 }} source={item} />
          {/* uncomment next line to see the performance difference */}
          {/* <RNImage style={{ flex: 1 }} source={{ uri: item }} /> */}
        </View>
      ))}
    </View>
  );
};

const renderScene = SceneMap({
  first: Second,
  second: Second,
});
const routes = [
  { key: "first", title: "First" },
  { key: "second", title: "Second" },
];

export default function App() {
  const [index, setIndex] = React.useState(0);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
      />
    </SafeAreaView>
  );
}
