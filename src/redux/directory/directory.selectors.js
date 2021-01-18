import {createSelector} from 'reselect';

const selectDirecoty = state => state.directory ;

export const selectDirecotySection = createSelector(
    [selectDirecoty],
    directory => directory.sections
);