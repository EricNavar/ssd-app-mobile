import React, { useEffect, useRef } from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
import styled from 'styled-components/native';
import { Colors } from 'react-native-ui-lib';

export const StyledView = styled(SafeAreaView)({
    height: '100%',
    backgroundColor: Colors.screenBG
});

export const Layout = (props: {children:JSX.Element | JSX.Element[], style?: object}) => {
    useEffect(()=>{
        scrollRef.current?.scrollTo({
            y: 0,
            animated: true,
        });
    });

    const scrollRef = useRef();

    return (
        <StyledView>
            <StatusBar
                animated={true}
                backgroundColor="#61dafb"
            />
            <ScrollView style={props.style} ref={scrollRef}>
                {props.children}
            </ScrollView>
        </StyledView>
    );
};
