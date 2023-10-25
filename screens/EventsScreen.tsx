import React from 'react';
import { NavigationProps, SSDEvent, Screens } from '../commonTypes';
import { Text, View } from 'react-native-ui-lib';
import { Layout } from '../components/Layout';
import styled from 'styled-components/native';
import moment from 'moment';
import { events } from '../data';

const Event = styled.TouchableOpacity({
    backgroundColor: 'lightblue',
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    borderTopColor: 'white',
    borderBottomColor: '#aaa',
    borderTopWidth: .5,
    borderBottomWidth: .5
});

const EventsScreen = (props: NavigationProps) => {
    const onPressEvent = (event: SSDEvent) => {
        props.navigation.navigate(Screens.EventDetailsScreen, {
            event: event
        });
    };

    return (
        <Layout style={{ paddingHorizontal: 20 }}>
            <Text text50 marginT-80>
                Upcoming meetings
            </Text>
            <>
                {events.map((event: SSDEvent, index: number) => (
                    <Event key={index} onPress={() => onPressEvent(event)}>
                        <Text text60>
                            {event.title}
                        </Text>
                        <Text text70>
                            {moment(event.date).format('M[/]D [@] hh:mm')} • {event.location}
                        </Text>
                    </Event>
                ))}
            </>
            <View style={{ height: 24 }} />
        </Layout>
    );
};

export { EventsScreen };
