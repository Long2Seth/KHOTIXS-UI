import { useRef } from 'react';

export function useCategoryRefs() {
    const technologyRef = useRef<HTMLElement>(null);
    const concertRef = useRef<HTMLElement>(null);
    const sportRef = useRef<HTMLElement>(null);
    const communityRef = useRef<HTMLElement>(null);
    const conferenceRef = useRef<HTMLElement>(null);
    const generalRef = useRef<HTMLElement>(null);

    return {
        technologyRef,
        concertRef,
        sportRef,
        communityRef,
        conferenceRef,
        generalRef,
    };
}