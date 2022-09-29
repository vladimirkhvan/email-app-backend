import express from 'express';
import cors from 'cors';

import {saveMessage, getMessages} from './controllers/MessageController.js';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/:receiver', getMessages);

app.post('/', saveMessage);

app.listen(process.env.PORT || 8800, () => {
    console.log('server is working properly');
});
