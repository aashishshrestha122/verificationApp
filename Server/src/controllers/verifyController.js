const HttpStatus = require('http-status-codes');

const verifyService = require('../services/verifyService');

async function verifyCode(req, res, next) {
	try {
		const data = await verifyService.verifyCode({ ...req.body });

		return res.status(HttpStatus.StatusCodes.OK).json(data);
	} catch (err) {
		return res.status(HttpStatus.StatusCodes.BAD_REQUEST).json({ message: err.message });
	}
}


module.exports = { verifyCode }