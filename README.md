# Bingo Interactivo - Premio Morral con Cosmetiquera

Un juego de bingo interactivo desarrollado en HTML, CSS y JavaScript puro con sincronización en tiempo real usando Firebase. Los participantes pueden seleccionar números del 1 al 50 con diferentes probabilidades de ganar un premio especial.

## Características

- 🎯 Tablero de bingo interactivo con números del 1 al 50
- 🔥 **Sincronización en tiempo real** con Firebase - todos los usuarios ven los mismos números ocupados
- 🎲 Sistema de probabilidades ajustables (Normal/Premium)
- 👥 Registro de participantes por número compartido entre todos los usuarios
- 📊 Estadísticas en tiempo real sincronizadas
- 📱 Diseño responsivo para móviles y desktop
- 🎨 Interfaz moderna con gradientes y animaciones
- 🔄 Persistencia de datos - los números seleccionados se mantienen al recargar

## Cómo jugar

1. Selecciona la modalidad de juego (Normal o Premium)
2. Haz clic en un número disponible del tablero
3. Registra tus datos (nombre y teléfono)
4. ¡Tu número queda reservado y sincronizado con todos los demás usuarios!
5. ¡Espera a ver si ganas el premio!

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

## Estructura del proyecto

```
bingo-game/
├── index.html                 # Archivo principal del juego con Firebase
├── cosmetiquera.png          # Imagen del premio cosmetiquera
├── morral.png               # Imagen del premio morral
├── FIREBASE_SETUP.md        # Guía detallada de configuración Firebase
├── firebase-config-example.js # Ejemplo de configuración
├── .gitignore               # Archivos a ignorar por Git
└── README.md               # Este archivo
```

## Tecnologías utilizadas

- **HTML5**
- **CSS3** (con gradientes y animaciones)
- **JavaScript (ES6+)** con módulos
- **Firebase Realtime Database** para sincronización en tiempo real
- **Diseño responsivo**

## ✨ Características de sincronización

- **Tiempo real**: Los cambios se reflejan instantáneamente en todos los dispositivos
- **Multi-usuario**: Múltiples personas pueden usar el bingo simultáneamente
- **Persistencia**: Los datos se mantienen incluso si se cierra el navegador
- **Sin conflictos**: Un número solo puede ser seleccionado por una persona

## Personalización

Puedes personalizar fácilmente:
- Colores y estilos en la sección `<style>`
- Imágenes de los premios
- Texto y descripciones
- Rangos de números (actualmente 1-50)
- Modalidades de probabilidad
- Estructura de datos en Firebase

## 🚨 Notas importantes

- **Firebase Gratuito**: El plan gratuito de Firebase es suficiente para uso normal
- **Seguridad**: En producción, configura reglas de seguridad apropiadas en Firebase
- **Backups**: Firebase maneja automáticamente la redundancia de datos
- **Límites**: Firebase tiene límites de uso en el plan gratuito (1GB almacenamiento, 10GB transferencia/mes)

## Contribuir

¡Las contribuciones son bienvenidas! Si tienes ideas para mejorar el juego, no dudes en crear un issue o pull request.

## Licencia

Este proyecto está bajo la Licencia MIT. Siéntete libre de usarlo y modificarlo.