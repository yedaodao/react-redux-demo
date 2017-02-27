import _ from 'lodash';
import ActionType from '../constants/ActionType';
import ResOprType from '../constants/ResOprType';

export function getMonitorData(resourceName) {
    return function (dispatch) {
        let arr = [];
        for (let i = 0; i < 10; i++) {
            arr.push(_.random(0, 9));
        }
        setTimeout(() => {
            dispatch({
                type: ActionType.MONITOR,
                opr: ResOprType.GET,
                resourceName,
                data: arr
            });
        }, 1000);
    }
}
