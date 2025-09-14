# 🔥 Guía de Configuración de Firebase para el Bingo

## Paso 1: Crear proyecto en Firebase

1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Haz clic en "Agregar proyecto" o "Create a project"
3. Nombre del proyecto: `bingo-game` (o el nombre que prefieras)
4. Acepta los términos y crea el proyecto

## Paso 2: Configurar Realtime Database

1. En tu proyecto de Firebase, ve al menú lateral izquierdo
2. Haz clic en "Realtime Database"
3. Haz clic en "Crear base de datos"
4. Selecciona una ubicación (recomendado: `us-central1`)
5. **IMPORTANTE**: Selecciona "Iniciar en modo de prueba" (permite lecturas/escrituras por 30 días)

### Reglas de seguridad (temporal para desarrollo):
```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

## Paso 3: Obtener configuración del proyecto

1. En Firebase Console, haz clic en el ícono de configuración ⚙️
2. Selecciona "Configuración del proyecto"
3. Baja hasta "Tus aplicaciones"
4. Haz clic en el ícono `</>` (Web)
5. Nombre de la app: `bingo-web`
6. **NO marcar** "También configurar Firebase Hosting"
7. Copia la configuración que aparece

## Paso 4: Actualizar el código

Reemplaza estas líneas en tu `index.html`:

```javascript
const firebaseConfig = {
    apiKey: "TU_API_KEY",                    // ← Reemplazar
    authDomain: "TU_PROJECT_ID.firebaseapp.com",   // ← Reemplazar
    databaseURL: "https://TU_PROJECT_ID-default-rtdb.firebaseio.com/",  // ← Reemplazar
    projectId: "TU_PROJECT_ID",              // ← Reemplazar
    storageBucket: "TU_PROJECT_ID.appspot.com",    // ← Reemplazar
    messagingSenderId: "TU_SENDER_ID",       // ← Reemplazar
    appId: "TU_APP_ID"                       // ← Reemplazar
};
```

### Ejemplo de configuración real:
```javascript
const firebaseConfig = {
    apiKey: "AIzaSyBxxx-xxxxxxxxxxxxxxxxxxxxxx",
    authDomain: "bingo-game-12345.firebaseapp.com",
    databaseURL: "https://bingo-game-12345-default-rtdb.firebaseio.com/",
    projectId: "bingo-game-12345",
    storageBucket: "bingo-game-12345.appspot.com",
    messagingSenderId: "123456789012",
    appId: "1:123456789012:web:abcdef123456"
};
```

## Paso 5: Verificar funcionamiento

1. Sube el código actualizado a GitHub
2. Ve a tu GitHub Pages
3. Abre la página en dos pestañas diferentes
4. Registra un participante en una pestaña
5. ✅ Debería aparecer automáticamente en la otra pestaña

## 🔒 Configuración de seguridad (IMPORTANTE para producción)

Una vez que confirmes que funciona, actualiza las reglas de Firebase:

```json
{
  "rules": {
    "bingo": {
      "participants": {
        ".read": true,
        ".write": true,
        ".validate": "newData.hasChildren(['number', 'name', 'phone', 'probability', 'timestamp'])"
      }
    }
  }
}
```

## 🚨 Solución de problemas comunes

### Error: "Firebase is not defined"
- Verifica que hayas copiado correctamente la configuración
- Asegúrate de que el proyecto esté activo en Firebase Console

### Error: "Permission denied"
- Verifica que las reglas de Firebase permitan lectura/escritura
- Comprueba que la URL de la base de datos sea correcta

### Los datos no se sincronizan
- Abre las herramientas de desarrollador (F12)
- Ve a la pestaña "Console" para ver errores
- Verifica que la `databaseURL` sea correcta

## 📊 Monitoreo de datos

Para ver los datos almacenados:
1. Ve a Firebase Console
2. Haz clic en "Realtime Database"
3. Verás la estructura: `bingo → participants`

## 💰 Costos

- Firebase Realtime Database tiene un plan gratuito generoso
- Hasta 1GB de almacenamiento
- Hasta 10GB de transferencia de datos por mes
- Para un bingo, esto es más que suficiente

## ✅ Checklist final

- [ ] Proyecto Firebase creado
- [ ] Realtime Database configurada
- [ ] Configuración copiada al código
- [ ] Código subido a GitHub
- [ ] Funcionamiento verificado en múltiples pestañas
- [ ] Reglas de seguridad configuradas