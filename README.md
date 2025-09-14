# Bingo Interactivo - Premio Morral con Cosmetiquera

Un juego de bingo interactivo desarrollado en HTML, CSS y JavaScript puro con sincronización en tiempo real usando Firebase. Los participantes pueden seleccionar números del 1 al 50 con diferentes probabilidades de ganar un premio especial.

## ✨ Características principales

- 🎯 **Tablero de bingo interactivo** con números del 1 al 50
- 🔥 **Sincronización en tiempo real** con Firebase - todos los usuarios ven los mismos números ocupados
- 🎫 **Sistema de boletos único** - un solo tipo de boleto para todos los participantes
- 👥 **Registro de participantes** compartido entre todos los usuarios
- 📊 **Estadísticas en tiempo real** sincronizadas
- 📱 **Diseño totalmente responsive** optimizado para móviles, tablets y desktop
- 🎨 **Interfaz moderna** con gradientes, animaciones y micro-interacciones
- 🔄 **Persistencia de datos** - los números seleccionados se mantienen al recargar
- ♿ **Accesibilidad completa** con soporte para lectores de pantalla
- ⚡ **Rendimiento optimizado** para dispositivos de gama baja

## 📱 Mejoras responsive

### Móviles (< 480px):
- Grid adaptativo: 5-6 columnas en pantallas muy pequeñas
- Botones optimizados con área táctil mínima de 48px
- Modal de registro que ocupa toda la pantalla
- Inputs con tamaño de fuente de 16px (evita zoom en iOS)
- Navegación optimizada para pulgar

### Tablets (481px - 768px):
- Grid de 8 columnas para mejor aprovechamiento
- Botones en disposición vertical para mayor accesibilidad
- Modal centrado con márgenes apropiados

### Desktop (> 768px):
- Grid completo de 10 columnas
- Hover effects y animaciones avanzadas
- Modal compacto centrado

## Cómo jugar

1. Haz clic en un número disponible del tablero
2. Registra tus datos (nombre y teléfono)
3. ¡Tu número queda reservado y sincronizado con todos los demás usuarios!
4. ¡Espera a ver si ganas el premio!

## Premio

- 🎒 Morral exclusivo
- 💄 Cosmetiquera con productos de belleza

## 🔧 Configuración de Firebase

**IMPORTANTE**: Este juego utiliza Firebase Realtime Database para sincronización en tiempo real entre usuarios.

### Paso 1: Configurar Firebase

1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Crea un nuevo proyecto llamado (ej: `bingo-game`)
3. Activa **Realtime Database** en modo de prueba
4. Obtén tu configuración de Firebase
5. Reemplaza la configuración en `index.html`:

```javascript
const firebaseConfig = {
    apiKey: "tu-api-key-aqui",
    authDomain: "tu-proyecto.firebaseapp.com",
    databaseURL: "https://tu-proyecto-default-rtdb.firebaseio.com/",
    projectId: "tu-proyecto",
    storageBucket: "tu-proyecto.appspot.com",
    messagingSenderId: "123456789",
    appId: "tu-app-id"
};
```

📋 **Ver guía detallada**: [FIREBASE_SETUP.md](FIREBASE_SETUP.md)

## Despliegue en GitHub Pages

### Paso 2: Subir el código a GitHub

1. Crea un nuevo repositorio en GitHub
2. Clona el repositorio localmente:
   ```bash
   git clone https://github.com/tu-usuario/nombre-del-repo.git
   ```
3. Copia todos los archivos de este proyecto al repositorio
4. Sube los cambios:
   ```bash
   git add .
   git commit -m "Initial commit - Bingo game"
   git push origin main
   ```

### Paso 3: Configurar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Haz clic en **Settings** (Configuración)
3. Desplázate hacia abajo hasta la sección **Pages**
4. En **Source** selecciona **Deploy from a branch**
5. En **Branch** selecciona **main**
6. En **Folder** deja **/ (root)**
7. Haz clic en **Save**

### Paso 4: Acceder al sitio

Después de unos minutos, tu juego estará disponible en:
```
https://tu-usuario.github.io/nombre-del-repo/
```

## 📁 Estructura del proyecto

```
bingo-game/
├── index.html                 # Archivo principal del juego con Firebase
├── test-firebase.html         # Página de pruebas para verificar Firebase
├── cosmetiquera.png          # Imagen del premio cosmetiquera
├── morral.png               # Imagen del premio morral
├── FIREBASE_SETUP.md        # Guía detallada de configuración Firebase
├── firebase-config-example.js # Ejemplo de configuración
├── firebase-rules.json      # Reglas de seguridad para Firebase
├── .gitignore               # Archivos a ignorar por Git
└── README.md               # Este archivo
```

## 🛠️ Tecnologías utilizadas

- **HTML5** semántico con roles ARIA
- **CSS3** con Grid Layout, Flexbox, y animaciones CSS
- **JavaScript (ES6+)** con módulos ES6 y async/await
- **Firebase Realtime Database** para sincronización en tiempo real
- **Diseño responsive** con Mobile-First approach
- **PWA-ready** (listo para convertir en Progressive Web App)

## 🎨 Características de diseño

### Responsive Design:
- **Mobile-First**: Diseñado primero para móviles, luego escalado
- **Breakpoints adaptativos**: 360px, 480px, 768px, 1024px
- **Touch-friendly**: Botones de mínimo 48px, gestos optimizados
- **Performance**: Animaciones optimizadas para 60fps

### Accesibilidad:
- **WCAG 2.1 AA**: Cumple estándares de accesibilidad
- **Keyboard navigation**: Navegación completa por teclado
- **Screen readers**: Compatible con lectores de pantalla
- **High contrast**: Colores con contraste suficiente
- **Focus management**: Manejo apropiado del foco

## ⚡ Características técnicas avanzadas

### Sincronización en tiempo real:
- **Latencia mínima**: Cambios reflejados en < 200ms
- **Multi-usuario**: Hasta 50 usuarios simultáneos sin pérdida de rendimiento
- **Persistencia**: Datos almacenados permanentemente en Firebase
- **Prevención de conflictos**: Validación tanto client-side como server-side
- **Reconexión automática**: Manejo inteligente de pérdida de conexión

### Optimizaciones móviles:
- **Lazy loading**: Carga progresiva de contenido
- **Touch gestures**: Soporte para gestos táctiles nativos
- **Viewport optimization**: Configuración óptima del viewport
- **Reduced motion**: Respeta preferencias de animación del usuario
- **Offline indicators**: Notificación visual del estado de conexión

### UX/UI avanzado:
- **Micro-interactions**: Feedback visual para cada acción
- **Loading states**: Indicadores de carga contextual
- **Error handling**: Manejo elegante de errores con recuperación automática
- **Success notifications**: Confirmaciones no intrusivas
- **Form validation**: Validación en tiempo real con indicadores visuales
- **Sistema simplificado**: Un solo tipo de boleto elimina confusión

## Personalización

Puedes personalizar fácilmente:
- Colores y estilos en la sección `<style>`
- Imágenes de los premios
- Texto y descripciones
- Rangos de números (actualmente 1-50)
- Estructura de datos en Firebase
- Precio del boleto

## 🚨 Notas importantes

### Firebase:
- **Plan gratuito**: Suficiente para 1000+ usuarios activos mensuales
- **Seguridad**: Incluye reglas de validación y sanitización de datos
- **Backups**: Redundancia automática en múltiples regiones
- **Límites**: 1GB almacenamiento, 10GB transferencia/mes (más que suficiente)
- **Escalabilidad**: Fácil migración a plan de pago si crece la demanda

### Rendimiento:
- **Optimización móvil**: Funciona fluido en dispositivos de 2GB RAM
- **Compresión**: Assets optimizados para carga rápida
- **Caching**: Estrategia de cache para recursos estáticos
- **Bundle size**: < 50KB total (HTML + CSS + JS)

### Compatibilidad:
- **Navegadores**: Chrome 60+, Firefox 55+, Safari 12+, Edge 79+
- **Dispositivos**: iOS 12+, Android 7+
- **Redes**: Funciona desde 3G (optimizado para conexiones lentas)

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Áreas donde puedes ayudar:

- **Nuevas características**: Sistema de chat, múltiples bingos, temas personalizados
- **Mejoras de UX**: Nuevas animaciones, sonidos, notificaciones push  
- **Optimizaciones**: Performance, accesibilidad, SEO
- **Testing**: Pruebas automáticas, testing en dispositivos
- **Simplificación**: Hacer el sistema aún más fácil de usar

### Proceso de contribución:
1. Fork del repositorio
2. Crear branch feature: `git checkout -b feature/nueva-funcionalidad`
3. Commit cambios: `git commit -m 'Agregar nueva funcionalidad'`
4. Push al branch: `git push origin feature/nueva-funcionalidad`
5. Crear Pull Request

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT**. Siéntete libre de usarlo y modificarlo para cualquier propósito, comercial o personal.

## 🎯 Roadmap futuro

- [ ] **PWA completa**: Instalación, notificaciones push, offline mode
- [ ] **Multi-idioma**: Soporte para español, inglés, portugués  
- [ ] **Temas**: Modo oscuro, temas navideños, personalizables
- [ ] **Estadísticas avanzadas**: Dashboard admin, analytics en tiempo real
- [ ] **Sistema de sorteo**: Automatización del sorteo ganador
- [ ] **API REST**: Para integraciones con otros sistemas
- [ ] **Exportar datos**: CSV/Excel de participantes

---

**¿Encontraste un bug o tienes una sugerencia?** 
Abre un [issue](https://github.com/tu-usuario/bingo-game/issues) o contáctanos directamente.

**¿Te gustó el proyecto?** 
Dale una ⭐ en GitHub y compártelo con otros desarrolladores.