const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');

var input = {
	language: 'Solidity',
	sources: {
		'inbox.sol': {
			content: source,
		},
	},
	settings: {
		outputSelection: {
			'*': {
				'*': ['*'],
			},
		},
	},
};

var output = JSON.parse(solc.compile(JSON.stringify(input)));
console.log(output.contracts['inbox.sol'].Inbox);

// `output` here contains the JSON output as specified in the documentation
// for (var Inbox in output.contracts['inbox.sol']) {
// 	console.log(Inbox + ': ' + output.contracts['inbox.sol'][Inbox].evm.bytecode.object);
// }
