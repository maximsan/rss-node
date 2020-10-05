const {resolve, isAbsolute} = require('path')

const resolvePath = (path) => {
    return isAbsolute(path) ? path : resolve(path);
}

module.exports = resolvePath;
