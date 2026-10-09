import app from './app.js';
import 'dotenv/config';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server menyala di http://localhost:${PORT}`);
    console.log(`Cek koneksi di httl://localhost:${PORT}/api/health`);
})