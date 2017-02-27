import _ from 'lodash';

export function extend(...args) {
    let target = args[0] || {},
        options,
        // from 2, they are other objects to extend target
        i = 1,
        len = args.length,
        deep = false,
        clone,
        src, copy, copyIsArray;

    if (i === len) {
        throw new Error('args is invalid');
    }

    if (typeof target === 'boolean') {
        deep = target;

        // skip the boolean and the target
        target = args[i] || {};
        i++;
    }

    // handle target is string etc
    if (typeof target !== 'object' && typeof target !== 'function') {
        target = {};
    }

    // real extend
    for (; i < len; i++) {
        // only deal non-null values
        if ((options = args[i]) != null) {
            for (let name in options) {
                src = target[name];
                copy = options[name];

                // prevent never-ending loop
                if (target === copy) {
                    continue;
                }

                // handle deep copy
                if (deep && copy && (Object.prototype.toString.call(copy) === '[object Object]' || (copyIsArray = _.isArray(copy)))) {
                    if (copyIsArray) {
                        copyIsArray = false;
                        clone = src && _.isArray(src) ? src : [];
                    } else {
                        clone = src && _.isObject(src) ? src : {};
                    }
                    target[name] = extend(deep, clone, copy);
                } else {
                    target[name] = copy;
                }
            }
        }
    }
    return target;
}
