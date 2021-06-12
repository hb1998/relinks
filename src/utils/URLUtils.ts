import { nanoid } from 'nanoid'

export const getDestinationUrl = () => {
    return nanoid(8);
}