import { Group } from '../types';

export const filterData = (
    data: Group[],
    filters: { colorFilter: string; privacyFilter: string | number; friendsSubscribe: boolean },
) => {
    return data.filter((item) => {
        if (filters.colorFilter !== 'all' && item.avatar_color !== filters.colorFilter) {
            return false;
        }
        if (filters.privacyFilter !== 'all' && (Number(filters.privacyFilter) === 1) !== item.closed) {
            return false;
        }
        if (filters.friendsSubscribe && !item.friends) {
            return false;
        }
        return true;
    });
};
