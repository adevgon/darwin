import React from 'react'
import Carousel from "../modules/Carousel/Carousel";
import {Block,Text,Button} from "../components";
import {theme} from "../constants";


export interface WelcomeProps {
    navigation?: any
}
// @ts-ignore
const Welcome = (props: WelcomeProps)=> {

    const illustrations = [
        { id: 1, source: require("../assets/images/illustration_1.png") },
        { id: 2, source: require("../assets/images/illustration_2.png") },
        { id: 3, source: require("../assets/images/illustration_3.png") }
    ]

    return (
       <Block>
           <Block center bottom flex={0.4}>
               <Text h1 center bold>
                   Adaptive
                   <Text h1 primary>
                       {" "}
                       learning
                   </Text>
               </Text>
               <Text h3 gray2 style={{ marginTop: theme.sizes.padding / 2 }}>
                   Enjoy the adaptive learning experience.
               </Text>
           </Block>
            <Carousel  />
           <Block middle flex={0.5} margin={[0, theme.sizes.padding * 2]}>
               <Button gradient onPress={() => props.navigation.navigate("Login")}>
                   <Text center semibold white>
                       Login
                   </Text>
               </Button>
               <Button shadow onPress={() => props.navigation.navigate("Details")}>
                   <Text center semibold>
                       Signup
                   </Text>
               </Button>
           </Block>
       </Block>

    );
}

export default Welcome;
