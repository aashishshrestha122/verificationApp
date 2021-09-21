
const verifyCode = async (data) => {
	if (data.value.length === 6 && data.value.split('')[data.value.length - 1] != 7) {
		return ('Verified')
	} else {
		throw Error('Verification Error.')
	}
}

module.exports = { verifyCode }
