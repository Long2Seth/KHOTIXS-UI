export type CategoriesIcon = {
    icon: string;
    name: string;
    link: string;
    ref: React.RefObject<HTMLElement>;
};

export function useCategories(refs: {
    technologyRef: React.RefObject<HTMLElement>;
    concertRef: React.RefObject<HTMLElement>;
    sportRef: React.RefObject<HTMLElement>;
    communityRef: React.RefObject<HTMLElement>;
    conferenceRef: React.RefObject<HTMLElement>;
    generalRef: React.RefObject<HTMLElement>;
}): CategoriesIcon[] {
    const {
        technologyRef,
        concertRef,
        sportRef,
        communityRef,
        conferenceRef,
        generalRef,
    } = refs;

    return [
        { icon: '/icons/timetable.png', name: 'Technology', link: '/', ref: technologyRef },
        { icon: '/icons/music.png', name: 'Concert', link: '/', ref: concertRef },
        { icon: '/icons/soccer-field.png', name: 'Sport', link: '/', ref: sportRef },
        { icon: '/icons/audience.png', name: 'Community', link: '/', ref: communityRef },
        { icon: '/icons/conference-room.png', name: 'Conferences', link: '/', ref: conferenceRef },
        { icon: '/icons/calendar.png', name: 'General', link: '/', ref: generalRef },
    ];
}