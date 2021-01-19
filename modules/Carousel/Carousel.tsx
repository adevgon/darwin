import React from "react";
import Illustrations from "./components/Illustrations";
import Steps from "./components/Steps";
import {Animated, Dimensions} from "react-native";
import Block from "../../components/Block";


const Carousel = () => {

    const scrollX = new Animated.Value(0);
    const {width, height} = Dimensions.get("window");

    // to be removed

    const illustrations = [
        {id: 1, source: require("../../assets/images/illustration_1.png")},
        {id: 2, source: require("../../assets/images/illustration_2.png")},
        {id: 3, source: require("../../assets/images/illustration_3.png")}
    ]

    // to be removed
        return (
            <Block center middle>
                <Illustrations deviceWidth={width} deviceHeight={height} illustrations={illustrations} scrollX={scrollX} />
                <Steps deviceWidth={width} deviceHeight={height} scrollX={scrollX} illustrations={illustrations}/>
            </Block>

        )
}


export default Carousel
