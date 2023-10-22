import { Officer, SSDEvent } from "./commonTypes";

export const officers: Officer[] = [
    {
        name: 'Yonas Bahre',
        position: 'President',
        image: require('./assets/images/yonas.png')
    },
    {
        name: 'Michael Hayworth',
        position: 'Vice President',
        image: require('./assets/images/michael.jpg')
    },
    {
        name: 'Stephen',
        position: 'stephen',
        image: require('./assets/images/stephen.jpg')
    },
    {
        name: 'Param Gupta',
        position: 'Program Officer',
        image: require('./assets/images/param.jpg')
    },
    {
        name: 'Angel',
        position: 'Outreach Officer',
        image: require('./assets/images/angel.png')
    },
    {
        name: 'CJ Weir',
        position: 'Involvement Officer',
        image: require('./assets/images/cj.png')
    }
]

export const events: SSDEvent[] = [
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
