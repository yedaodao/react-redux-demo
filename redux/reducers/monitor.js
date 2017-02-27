import ActionType from '../constants/ActionType';
import ResOprType from '../constants/ResOprType';
import {extend} from '../../util/ObjectUtil';

const defMonitor = {
    map: {},
    array: {}
};

export default function (state = defMonitor, action) {
    let newState = {};
    if (action.type !== ActionType.MONITOR) {
        return state;
    }
    switch (action.opr) {
        case ResOprType.GET:
            newState = Object.assign({}, state);
            newState.map[action.resourceName] = action.data;
            break;
        default:
            newState = state;
    }
    return newState;
}
