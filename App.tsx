import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {imagesArray} from "./constants";
import {Asset} from "expo-asset";
import AppLoading from "expo-app-loading";
import Navigation from "./navigation/Navigation";
import Block from "./components/Block";



const App = ()=> {
  // state
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  //event handlers
  const handleResourcesAsync = () => {
    const cacheImages = imagesArray.map((image: string | number) => {
      return Asset.fromModule(image).downloadAsync()
    });
    return Promise.all(cacheImages);
  }

  if (!isLoadingComplete) {
    return (
        <AppLoading
            startAsync={handleResourcesAsync}
            onError={error => console.warn(error)}
            onFinish={() => setIsLoadingComplete(true)}
        />
    );
  }

  return (
      <Block white>
      <Navigation />
      </Block>
  );


}

const styles = StyleSheet.create({});
export default App;
