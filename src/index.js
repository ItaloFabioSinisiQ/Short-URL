require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { nanoid } = require('nanoid');
const validUrl = require('valid-url');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/shorturl', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Modelo de URL
const Url = mongoose.model('Url', {
  originalUrl: String,
  shortUrl: String,
  clicks: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

// Ruta para acortar URL
app.post('/api/shorten', async (req, res) => {
  const { originalUrl } = req.body;

  if (!validUrl.isUri(originalUrl)) {
    return res.status(400).json({ error: 'URL inválida' });
  }

  try {
    let url = await Url.findOne({ originalUrl });
    
    if (url) {
      return res.json(url);
    }

    const shortUrl = nanoid(6);
    url = new Url({
      originalUrl,
      shortUrl
    });

    await url.save();
    res.json(url);
  } catch (err) {
    console.error('Error al acortar URL:', err);
    res.status(500).json({ error: 'Error del servidor' });
  }
});

// Ruta para redireccionar
app.get('/:shortUrl', async (req, res) => {
  try {
    const url = await Url.findOne({ shortUrl: req.params.shortUrl });
    
    if (!url) {
      return res.status(404).json({ error: 'URL no encontrada' });
    }

    url.clicks++;
    await url.save();

    // Asegurarse de que la URL original tenga el protocolo correcto
    let redirectUrl = url.originalUrl;
    if (!redirectUrl.startsWith('http://') && !redirectUrl.startsWith('https://')) {
      redirectUrl = 'https://' + redirectUrl;
    }

    res.redirect(redirectUrl);
  } catch (err) {
    console.error('Error al redireccionar:', err);
    res.status(500).json({ error: 'Error del servidor' });
  }
});

// Ruta para obtener estadísticas
app.get('/api/stats/:shortUrl', async (req, res) => {
  try {
    const url = await Url.findOne({ shortUrl: req.params.shortUrl });
    
    if (!url) {
      return res.status(404).json({ error: 'URL no encontrada' });
    }

    res.json({
      originalUrl: url.originalUrl,
      shortUrl: url.shortUrl,
      clicks: url.clicks,
      createdAt: url.createdAt
    });
  } catch (err) {
    console.error('Error al obtener estadísticas:', err);
    res.status(500).json({ error: 'Error del servidor' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
}); 