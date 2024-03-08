import { FC } from 'react';

import { User as UserProps } from '../../types';

import styles from './styles.module.scss';

export const User: FC<UserProps> = ({ first_name, last_name }) => {
    return (
        <div className={styles.user}>
            <span className={styles.firstName}>{first_name}</span>
            <span className={styles.lastName}>{last_name}</span>
        </div>
    );
};
