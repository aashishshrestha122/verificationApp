const express = require('express');
const cors = require('cors');

const config = require('./src/config');
const errorHandler = require('./src/globalFunc/errorHandler');

const verifyRoutes = require('./src/routes/verifyRoutes');

const app = express();
app.use(
	cors({
		origin: "http://localhost:3000".split(','),
		optionsSuccessStatus: 200
	})
);
app.use(express.json());

app.use('/api/verify', verifyRoutes);

app.get('/', (req, res) => {
	res.json({
		app: "Verification Code",
		description: "Verification Code app",
		author: 'Aashish',
		version: '1.0.0'
	});
});

app.use(errorHandler.genericErrorHandler);

const PORT = config.app.port;

app.listen(PORT, () => console.log(`Server started on ${PORT}`))