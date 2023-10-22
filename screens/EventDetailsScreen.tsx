import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Button, Text, Image } from 'react-native-ui-lib';
import moment from 'moment';
import styled from 'styled-components/native';
import { NavigationProps, SSDEvent } from '../commonTypes';
import { Layout } from '../components/Layout';

const BackIcon = styled(Image)({
    width: 20,
    height: 20,
    margin: 16
});

type EventDetailsScreenProps = {
    route: {
        params: {
            event: SSDEvent
        }
    }
} & NavigationProps

const MiddleButton = styled(Button)({
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: 'red',
});

const EventDetailsScreen = (props: EventDetailsScreenProps) => {
    const { event } = props.route.params;
    return (
        <Layout style={{ paddingHorizontal: 20 }}>
                            <TouchableOpacity onPress={() => { props.navigation.goBack() }}>
                    <BackIcon
                        source={require('../assets/icons/back.png')}
                    />
                </TouchableOpacity>
            <View>
                <Text text60>
                    {event.title}
                </Text>
                <Text text70>
                    {moment(event.date).format("M[/]D [@] hh:mm")} • {event.location}
                </Text>
                <Text text70>
                    {event.description}
                </Text>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Button label='going' borderRadius={0} flex />
                    <MiddleButton label='intrested' borderRadius={0} flex />
                    <Button label='not going' borderRadius={0} flex />
                </View>
            </View>
        </Layout>
    )
};

export { EventDetailsScreen };
