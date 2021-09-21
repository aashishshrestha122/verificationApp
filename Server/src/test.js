const testFunctions = require('./services/verifyService');

test(('Check if the code is valid or not'), async () => {
	var value = "777778";
	expect(await testFunctions.verifyCode({ value })).toBe('Verified');
});
