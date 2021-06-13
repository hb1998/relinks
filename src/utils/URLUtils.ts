import { nanoid } from 'nanoid'
import { Redis } from './redis';

export const getDestinationUrl = () => {
    return nanoid(8);
}

export const cacheLink = (sourceUrl: string, destinationUrl: string) => {
    Redis.set(destinationUrl, sourceUrl);
}