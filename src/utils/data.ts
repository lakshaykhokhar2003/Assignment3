export interface sports {
    title: string;
    events: number;
    sport: string;
    image: string;
}

export interface tickets {
    title: string;
    time: string;
    location: string;
    image: string;
    collection: string;
}

export interface ads {
    title: string;
    description: string;
    image: string;
}

export const sports: sports[] = [{
    title: "Sacramento River Cats",
    events: 48,
    sport: "Baseball",
    image: '/Mask group (1).png'
}, {
    title: "Las Vegas Aviators",
    events: 28,
    sport: "Baseball",
    image: '/mask.png'
}, {
    title: "New Jersey Devils",
    events: 15,
    sport: "Ice Hockey",
    image: '/Mask group.png'
}, {
    title: "Las Vegas Aviators",
    events: 28,
    sport: "Baseball",
    image: '/mask.png'
}]


export const ticketsData: tickets[] = [{
    title: "Las Vegas Aviators",
    time: "7:05 PM",
    location: 'Las Vegas Ballpark, Las Vegas, Nevada',
    image: 'ticket1.png',
    collection: "Take Flight Collection"
}, {
    title: "Sacramento River Cats",
    time: "7:05 PM",
    location: "Sutter Health Park, Sacramento, California",
    image: 'ticket.png',
    collection: "Orange Collection"
}, {
    title: "Las Vegas Aviators",
    time: "7:05 PM",
    location: 'Las Vegas Ballpark, Las Vegas, Nevada',
    image: 'ticket1.png',
    collection: "Take Flight Collection"
}]

export const advertisement: ads[] = [{
    title: "Advertisement title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "unnamed (1) 1.png"
}]