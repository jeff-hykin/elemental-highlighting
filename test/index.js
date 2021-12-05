const path = require('path');
const Mocha = require('mocha');
const glob = require('glob');

module.exports.run = (testsRoot, cb) => {
	// Create the mocha test
	const mocha = new Mocha({
		ui: 'tdd',
		timeout: 10000
	});
	mocha.useColors(true);

	glob('**/**.test.js', { cwd: testsRoot }, (err, files) => {
		if (err) {
			return cb(err);
		}

		// Add files to the test suite
		files.forEach(f => mocha.addFile(path.resolve(testsRoot, f)));

		try {
			// Run the mocha test
			mocha.run(failures => {
				cb(null, failures);
			});

		} catch (err) {
			cb(err);
		}
	});
}