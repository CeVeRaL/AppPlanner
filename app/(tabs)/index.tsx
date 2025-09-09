import { View, StyleSheet } from "react-native";
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";

const PlaceholderImage = require("../../assets/images/white2.jpg")

export default function Index() {
  return (
    <View style={styles.container} >
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage}/>
      </View>
      <View style={styles.footerContainer}>
        <Button label="photo" theme="primary"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width,
    height: height,
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#25292e',
    opacity: 0.7,
  },
  iconsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 20,
  },
  iconItem: {
    alignItems: "center",
