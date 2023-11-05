import { Officer, PostProps, SSDEvent } from './commonTypes';

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
        position: 'Treasurer',
        image: require('./assets/images/stephen-2.jpg')
    },
    {
        name: 'Param Gupta',
        position: 'Program Officer',
        image: require('./assets/images/param.jpg')
    },
    {
        name: 'Angel',
        position: 'angel',
        image: require('./assets/images/angel.png')
    },
    {
        name: 'CJ Weir',
        position: 'Involvement Officer',
        image: require('./assets/images/cj.png')
    }
];

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
];

export const posts: PostProps[] = [
    {
        title: 'Signin form',
        link: 'https://docs.google.com/forms/d/e/1FAIpQLSdmrFDLjn2wM4k77q_56I3aXJ7BqdDL7FArxH1aOAYc6Z8bMQ/viewform?usp=sf_link',
        body: 'Please sign in we need it for student government funding :plead_emoji:',
        image: require('./assets/images/breaking-bad-ps1.jpg')
    },
    {
        
        title: '11/7/23 Meeting survey',
        link: 'https://docs.google.com/forms/d/e/1FAIpQLSdftHGhWxedsAQF8iR3ljxkRiqc1vNpkIQOXaeRkA4jL4YDjA/viewform?usp=sf_link',
        body: 'Give feedback on the mobile dev meeting from 11/7 and vote for if you want this next topic!',
        image: require('./assets/images/chuck.png')
    },
    {
        
        title: 'SSD is now a Better Call Saul-themed club',
        body: 'Next meeting we will watch the finale',
        image: require('./assets/images/announcement.jpg')
    }
];

