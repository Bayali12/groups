import { FC } from 'react';

import { Group as GroupProps } from '../../types';

import styles from './styles.module.scss';
import { Accordion } from '../Accordion';
import { User } from '../User';

export const Group: FC<GroupProps> = ({ name, closed, avatar_color, members_count, friends }) => {
    return (
        <div className={styles.group}>
            <div className={styles.avatar} style={{ backgroundColor: avatar_color }}>
                {!avatar_color && 'Нет цвета'}
            </div>
            <div className={styles.content}>
                <span className={styles.name}>{name}</span>
                <span className={styles.closed}>{closed ? 'Закрытое сообщество' : 'Открытое сообщество'}</span>
                <span className={styles.membersCount}>Подписчики: {members_count}</span>
                {friends && (
                    <div className={styles.friends}>
                        <Accordion title={`Друзья подписанные на сообщество: ${friends.length}`}>
                            {friends.map((friend, index) => (
                                <User key={index} first_name={friend.first_name} last_name={friend.last_name} /> //тут у юзеров нет id поэтому в key index оставил. В реальности user без id я думаю не бывает
                            ))}
                        </Accordion>
                    </div>
                )}
            </div>
        </div>
    );
};
