import express from 'express';
import db from './config/db.js';

const app = express();

app.use(express.json());

app.get('/api/health', async (req, res) => {
    try {
        const result = await db.query('SELECT NOW()');
        res.json({
            status: 'OK',
            message: 'Server berhasil terhubung.',
            db_time: result.rows[0].now
        });
    } catch (error) {
        console.error(`Error saat health check:`, error.message);
        res.status(500).json({
            status: 'ERROR',
            message: 'Server gagal terhubung dengan database.',
            error: error.message
        });
    }
});

export default app;