const minimist = require('minimist');

const actions = {encode: 'encode', decode: 'decode'};

const processArgs = () => {
    const args = minimist(process.argv.splice(2), {
        string: 'action',
        number: 'shift',
        alias: {a: 'action', s: 'shift', i: 'input', o: 'output'},
    })

    const action = args['action'];
    let shift = args['shift'];
    const input = args['input'];
    const output = args['output'];

    if (Object.values(actions).indexOf(action) === -1) {
        console.error('Action option is absent, but it\'s required parameter. Please provide it.')
        process.exit(9);
    }

    if (shift < 0) {
        console.error('Shift option should be positive value');
        process.exit(9);
    }

    if (shift === true) {
        shift = 0;
    }

    if (Number.isNaN(parseInt(shift))) {
        console.error('Shift option is absent, but it\'s required parameter. Please provide it.')
        process.exit(9);
    }

    return {
        action,
        shift,
        input,
        output
    }
}

module.exports = {
    processArgs,
    actions
};
