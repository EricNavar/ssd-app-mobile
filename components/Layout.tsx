import React from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
import styled from 'styled-components/native';
import { Colors, View } from 'react-native-ui-lib';

export const StyledView = styled(SafeAreaView)({
    height: '100%',
    backgroundColor: Colors.screenBG
});

export const Layout = (props: {children:JSX.Element | JSX.Element[], style?: any}) => {
    return (
        <StyledView>
            <StatusBar
                animated={true}
                backgroundColor="#61dafb"
            />
            <ScrollView style={props.style}>
                {props.children}
            </ScrollView>
        </StyledView>
    )
};
