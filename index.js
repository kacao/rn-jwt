var jwt = require('jsrsasign').jws.JWS;

function sign(payload, key, algorithm='HS256') {
	return jwt.sign(null, {alg: algorithm, cty: "JWT"}, payload, key);
}

function verify(token, key, algorithms=['HS256']) {
	try {
		if (jwt.verify(token, key, algorithms)) {
			return jwt.parse(token).payloadObj;
		}
	} catch (err) {
		console.log(err);
		return undefined;
	}
}

exports = module.exports = {
	sign, verify
}

