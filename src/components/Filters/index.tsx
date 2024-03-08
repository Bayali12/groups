import { colorFilters, privacyFilters } from '../../constants/filters';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { onChangeColor, onChangePrivacy, onChangefriendsSubscribe } from '../../redux/slices/groupSlice';

import styles from './styles.module.scss';

export const Filters = () => {
    const dispatch = useAppDispatch();

    const { filters } = useAppSelector((state) => state.groupReducer);

    return (
        <div className={styles.filters}>
            <h1 className={styles.title}>Фильтры</h1>
            <div className={styles.filtersList}>
                <div className={(styles.filter, styles.colors)}>
                    По цвету:
                    <select value={filters.colorFilter} onChange={(e) => dispatch(onChangeColor(e.target.value))}>
                        {colorFilters.map((filter) => (
                            <option key={filter.value} value={filter.value}>
                                {filter.label}
                            </option>
                        ))}
                    </select>
                </div>

                <div className={(styles.filter, styles.privacy)}>
                    Приватность:
                    <select value={filters.privacyFilter} onChange={(e) => dispatch(onChangePrivacy(e.target.value))}>
                        {privacyFilters.map((filter) => (
                            <option key={filter.value} value={filter.value}>
                                {filter.label}
                            </option>
                        ))}
                    </select>
                </div>

                <label htmlFor="friend" className={(styles.filter, styles.friends)}>
                    <input
                        id="friend"
                        type="checkbox"
                        checked={filters.friendsSubscribe}
                        onChange={(e) => dispatch(onChangefriendsSubscribe(e.target.checked))}
                    />
                    Подписаны друзья
                </label>
            </div>
        </div>
    );
};
