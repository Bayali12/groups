import { useAppSelector } from '../../hooks';
import { Group } from '../Group';

import styles from './styles.module.scss';

export const GroupList = () => {
    const groups = useAppSelector((state) => state.groupReducer.groups);

    return (
        <div className={styles.groups}>
            {groups.map((group) => (
                <Group
                    key={group.id}
                    id={group.id}
                    name={group.name}
                    avatar_color={group.avatar_color}
                    members_count={group.members_count}
                    friends={group.friends}
                    closed={group.closed}
                />
            ))}
        </div>
    );
};
