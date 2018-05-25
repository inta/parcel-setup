import fs from 'fs';

export default {
	favicon: fs.readFileSync(__dirname + '/../img/favicon.svg', 'utf8'),
	// favicon2: fs.readFileSync(__dirname + '/../img/favicon.svg'), // base64 ... and exploding file sizes ;)
};
