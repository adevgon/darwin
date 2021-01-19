import React from "react";
import {Animated, FlatList} from "react-native";
import {TextBlock} from "../../index";

export interface ScrollingTextsProps{
    illustrations? : any
    deviceWidth: any
    deviceHeight: any
    scrollX: any
}

const ScrollingTexts = (props: ScrollingTextsProps) => {

    const Data = [
        {
            title: "Secured, forever.",
            description:
                "Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis.",
        },
        {
            title: "Encrypted, forever.",
            description:
                "Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis.",
        },
        {
            title: "Privacy, forever.",
            description:
                "Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis.",
        }
    ];

    return (
        <FlatList
            horizontal
            pagingEnabled
            scrollEnabled
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            snapToAlignment="center"
            data={Data}
            //extraDate={this.state}
            keyExtractor={(item, index) => `${item.id}`}
            renderItem={({ item }) => (
                <TextBlock
                    title={item.title}
                    description={item.description}
                    deviceWidth={props.deviceWidth}
                    style={{
                        width: props.deviceWidth / 2,
                        height: props.deviceHeight/4,
                        overflow: "visible" }}/>
            )}
            onScroll={Animated.event([
                {
                    nativeEvent: { contentOffset: { x: props.scrollX } }
                }
            ])}
        />
    )
}

export default ScrollingTexts
