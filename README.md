# Acortador de URLs con Código QR

Un servicio moderno de acortamiento de URLs con generación de códigos QR, construido con Node.js, Express, MongoDB y React.

## 🚀 Características

- ✨ Acortamiento de URLs
- 📱 Generación de códigos QR
- 📊 Estadísticas de clics
- 🎨 Interfaz moderna y responsive
- 🌈 Animaciones suaves
- 📥 Descarga de códigos QR
- 🔒 Validación de URLs
- 🎯 Redirección automática

## 🛠️ Tecnologías Utilizadas

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- nanoid (para generar IDs únicos)
- valid-url (para validación de URLs)

### Frontend
- React
- TypeScript
- Framer Motion (para animaciones)
- qrcode.react (para generación de códigos QR)
- CSS moderno con efectos de glassmorphism

## 📋 Requisitos Previos

- Node.js (v14 o superior)
- MongoDB (local o Atlas)
- npm o yarn

## 🔧 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/short-url.git
cd short-url
```

2. Instala las dependencias del backend:
```bash
npm install
```

3. Instala las dependencias del frontend:
```bash
cd frontend
npm install
```

4. Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:
```
MONGODB_URI=mongodb://localhost:27017/shorturl
PORT=3000
```

## 🚀 Ejecución

1. Inicia el servidor backend (desde la raíz del proyecto):
```bash
npm run dev
```

2. En una nueva terminal, inicia el frontend:
```bash
cd frontend
npm start
```

La aplicación estará disponible en:
- Frontend: http://localhost:3001
- Backend API: http://localhost:3000

## 📚 Uso de la API

### Acortar una URL
```http
POST /api/shorten
Content-Type: application/json

{
  "originalUrl": "https://www.ejemplo.com/url-muy-larga"
}
```

### Redirección
```http
GET /:shortUrl
```

### Obtener estadísticas
```http
GET /api/stats/:shortUrl
```

## 🏗️ Estructura del Proyecto

```
short-url/
├── src/
│   └── index.js          # Servidor backend
├── frontend/
│   ├── src/
│   │   ├── components/   # Componentes de React
│   │   ├── App.tsx      # Componente principal
│   │   └── App.css      # Estilos globales
│   └── package.json
└── package.json
```

## 🎨 Características de la Interfaz

### Animaciones
- Fade in al cargar la página
- Animaciones en botones y formularios
- Transiciones suaves en resultados
- Efectos de hover y click
- Fondo con gradiente animado

### Diseño
- Efecto glassmorphism
- Diseño responsive
- Paleta de colores moderna
- Tipografía clara y legible
- Sombras y efectos de profundidad

## 🔒 Seguridad

- Validación de URLs
- Sanitización de entradas
- Protección contra XSS
- Manejo seguro de redirecciones

## 🚀 Despliegue

### Opciones de Hosting
- **Backend:**
  - Heroku
  - Railway
  - DigitalOcean
  - AWS

- **Frontend:**
  - Vercel
  - Netlify
  - GitHub Pages

### Configuración de Dominio
1. Configura un dominio personalizado en tu proveedor de DNS
2. Actualiza las variables de entorno con la nueva URL
3. Configura SSL/HTTPS

## 🤝 Contribuir

1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.

## ✨ Próximas Mejoras

- [ ] Autenticación de usuarios
- [ ] Personalización de enlaces cortos
- [ ] Panel de administración
- [ ] Más estadísticas y análisis
- [ ] API key para desarrolladores
- [ ] Soporte para dominios personalizados
- [ ] Integración con servicios de análisis

## 📞 Soporte

Si encuentras algún problema o tienes alguna sugerencia, por favor abre un issue en el repositorio. 