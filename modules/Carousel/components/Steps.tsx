import React from "react";
import {Animated, StyleSheet} from "react-native";
import {theme} from "../../../constants";
import Block from "../../../components/Block";

export interface StepsProps {
    deviceWidth: any
    deviceHeight:any
    illustrations?: any
    scrollX: any
}

const Steps = (props:StepsProps) => {

    const { illustrations } = props;
    const stepPosition = Animated.divide(props.scrollX, props.deviceWidth);
    const styles = StyleSheet.create({
        stepsContainer: {
            position: "absolute",
            bottom: theme.sizes.base * 2,
            right: 0,
            left: 0
        },
        steps: {
            width: theme.sizes.small,
            height: theme.sizes.small,
            borderRadius: 10,
            marginHorizontal: 2.5
        }
    });


    return (
        <Block row center middle style={styles.stepsContainer}>
            {illustrations.map((item, index) => {
                const opacity = stepPosition.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [0.4, 1, 0.4],
                    extrapolate: "clamp"
                });

                return (
                    <Block
                        animated
                        flex={false}
                        key={`step-${index}`}
                        color="gray"
                        style={[styles.steps,{ opacity }]}
                    />
                );
            })}
        </Block>
    )
}



export default Steps
