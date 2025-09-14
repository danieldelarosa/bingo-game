// 🔥 Firebase Configuration Example
// Copia este archivo como 'firebase-config.js' y actualiza con tus datos reales

const firebaseConfig = {
    // Reemplaza estos valores con los de tu proyecto Firebase
    apiKey: "AIzaSyBxxxxx-xxxxxxxxxxxxxxxxxxxxxxx",
    authDomain: "tu-proyecto-bingo.firebaseapp.com",
    databaseURL: "https://tu-proyecto-bingo-default-rtdb.firebaseio.com/",
    projectId: "tu-proyecto-bingo",
    storageBucket: "tu-proyecto-bingo.appspot.com",
    messagingSenderId: "123456789012",
    appId: "1:123456789012:web:abcdef123456789012"
};

// Exportar configuración (si usas módulos)
export default firebaseConfig;

/*
INSTRUCCIONES:
1. Ve a https://console.firebase.google.com/
2. Crea un nuevo proyecto o selecciona uno existente
3. Ve a Configuración del proyecto (⚙️ > Project settings)
4. En la sección "Your apps", haz clic en el ícono web (</>)
5. Registra tu app con un nombre (ej: "bingo-web")
6. Copia los valores de configuración que aparecen
7. Reemplaza los valores de ejemplo arriba con los tuyos
8. Guarda este archivo como 'firebase-config.js'
9. Actualiza el index.html para usar este archivo

IMPORTANTE:
- NO subas este archivo con datos reales a un repositorio público
- Agrega 'firebase-config.js' a tu .gitignore
- Para GitHub Pages, tendrás que incluir la configuración directamente en index.html
*/
