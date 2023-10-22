import React from 'react';
import { NavigationProps, SSDEvent, Screens } from '../commonTypes';
import { Text, View } from 'react-native-ui-lib';
import { Layout } from '../components/Layout';
import styled from 'styled-components/native';
import moment from 'moment';

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

const events: SSDEvent[] = [
    {
        date: new Date('1995-12-21T03:24:00').getTime(),
        title: 'AMA with Joebama',
        location: 'CIS A101',
        description: 'description'
    },
    {
        date: new Date('1995-12-17T03:24:00').getTime(),
        title: 'Raid Blake\'s apartment (he does not deserve ownership of things)',
        location: 'Blake\'s apartment',
        description: 'description'
    }
]

const EventsScreen = (props:NavigationProps) => {
    const onPressEvent = (event: SSDEvent) => {
        props.navigation.navigate(Screens.EventDetailsScreen, {
            event: event
        });
    };

    return (
        <Layout style={{ paddingHorizontal: 20 }}>
            <>
                {events.map((event: SSDEvent, index: number) => (
                    <Event key={index} onPress={()=>onPressEvent(event)}>
                        <Text text60>
                            {event.title}
                        </Text>
                        <Text text70>
                            {moment(event.date).format("M[/]D [@] hh:mm")} • {event.location}
                        </Text>
                    </Event>
                ))}
            </>
            <View style={{ height: 24 }} />
        </Layout>
    );
};

export { EventsScreen }
