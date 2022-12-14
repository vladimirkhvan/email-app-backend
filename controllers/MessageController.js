import { getCurrentDatetime } from '../utils/getCurrentDatetime.js';

import { db } from '../database/db.js';

export const getMessages = (req, res) => {
    const q = 'SELECT * FROM messages WHERE receiver = ?';
    db.query(q, [req.params.receiver], (err, data) => {
        if (err) {
            return res.json({ success: false, err });
        }
        return res.json({ success: true, messages: data });
    });
};

export const saveMessage = (req, res) => {
    const q =
        'INSERT INTO messages (`topic`, `message`, `sender`, `receiver`, `createdAt`) VALUES (?)';
    db.query(
        q,
        [
            [
                req.body.topic,
                req.body.message,
                req.body.sender,
                req.body.receiver,
                getCurrentDatetime(),
            ],
        ],
        (err, data) => {
            if (err) {
                return res.json({ success: false, err });
            }
            return res.json({ success: true });
        },
    );
};
