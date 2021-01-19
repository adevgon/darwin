import React from "react";
import {Animated, FlatList, Image} from "react-native";

export interface IllustrationsProps{
    illustrations? : any
    deviceWidth: any
    deviceHeight: any
    scrollX: any
}

const Illustrations = (props: IllustrationsProps) => {

    const { illustrations } = props;
    return (
        <FlatList
            horizontal
            pagingEnabled
            scrollEnabled
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            snapToAlignment="center"
            data={illustrations}
            //extraDate={this.state}
            keyExtractor={(item, index) => `${item.id}`}
            renderItem={({ item }) => (
                <Image
                    source={item.source}
                    resizeMode="contain"
                    style={{ width: props.deviceWidth, height: props.deviceHeight / 2, overflow: "visible" }}
                />
            )}
            onScroll={Animated.event([
                {
                    nativeEvent: { contentOffset: { x: props.scrollX } }
                }
            ])}
        />
    )
}

export default Illustrations
