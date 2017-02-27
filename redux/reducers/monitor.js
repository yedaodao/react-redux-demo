import ActionType from '../constants/ActionType';
import ResOprType from '../constants/ResOprType';
import * as Immutable from 'immutable'

const defMonitor = Immutable.fromJS({});

export default function (state = defMonitor, action) {
    if (action.type !== ActionType.MONITOR) {
        return state;
    }

    switch (action.opr) {
        case ResOprType.GET:
            state = state.set(action.resourceName, action.data);
            break;
        default:

    }

    return state;
}
