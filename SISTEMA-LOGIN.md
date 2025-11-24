# Sistema de Inicio de Sesión y Administración

## 📋 Descripción

Se ha implementado un sistema completo de autenticación para proteger el panel de administración de tu página web. Ahora solo los usuarios autorizados pueden acceder y editar el contenido del sitio.

## 🔐 Credenciales de Administrador

**Usuario:** `Yapete`  
**Contraseña:** `Yape.d200604`

⚠️ **IMPORTANTE:** Cambia estas credenciales después del primer inicio de sesión por seguridad.

## 🚀 Cómo Usar

### Acceder al Panel de Administración

1. **Desde la página principal:**
   - Ve al footer (parte inferior de la página)
   - Haz clic en el enlace discreto "🔒 Admin"

2. **Directamente:**
   - Abre `login.html` en tu navegador
   - O visita: `tu-dominio.com/login.html`

### Iniciar Sesión

1. Ingresa tu usuario: `Yapete`
2. Ingresa tu contraseña: `Yape.d200604`
3. Haz clic en "Iniciar Sesión"
4. Serás redirigido automáticamente al panel de administración

### Registrar Nuevos Usuarios

1. En la página de login, haz clic en la pestaña "Registrarse"
2. Ingresa un nombre de usuario (mínimo 3 caracteres)
3. Crea una contraseña segura (mínimo 6 caracteres)
4. Confirma la contraseña
5. Haz clic en "Crear Cuenta"
6. Una vez registrado, podrás iniciar sesión con tus nuevas credenciales

### Cerrar Sesión

1. Dentro del panel de administración, busca el botón rojo "Cerrar Sesión" en la barra lateral
2. Haz clic en él
3. Confirma que deseas cerrar sesión
4. Serás redirigido a la página de login

## 📁 Archivos Nuevos

- **`auth.js`** - Sistema de autenticación y gestión de usuarios
- **`login.html`** - Página de inicio de sesión y registro
- **`login-styles.css`** - Estilos para la página de login
- **`SISTEMA-LOGIN.md`** - Esta documentación

## 🔧 Archivos Modificados

- **`admin.html`** - Ahora protegido con autenticación
- **`admin-script.js`** - Integra verificación de sesión y logout
- **`index.html`** - Incluye enlace al login en el footer

## ✨ Características

### Seguridad
- ✅ Protección del panel de administración
- ✅ Contraseñas encriptadas (hash)
- ✅ Sesiones persistentes con localStorage
- ✅ Verificación automática de autenticación
- ✅ Redirección automática si no estás autenticado

### Funcionalidades
- 👤 Usuario administrador predeterminado
- 📝 Registro de nuevos usuarios
- 🔐 Sistema de login/logout
- 💾 Persistencia de sesión
- 🎨 Interfaz moderna y responsive
- ⚡ Validación de formularios en tiempo real

### Interfaz
- 📱 Diseño responsive (funciona en móviles)
- 🎨 Animaciones suaves
- 👁️ Mostrar/ocultar contraseña
- ✅ Mensajes de éxito y error
- 🔄 Estados de carga

## 🛡️ Seguridad

### Recomendaciones

1. **Cambia las credenciales por defecto** después del primer uso
2. **Usa contraseñas fuertes** con letras, números y símbolos
3. **No compartas** tus credenciales de administrador
4. **Cierra sesión** cuando termines de editar
5. **Haz respaldos** regulares de tu configuración

### Limitaciones

⚠️ Este sistema usa localStorage para almacenar datos, lo que significa:
- Los datos se guardan en el navegador del usuario
- Es adecuado para sitios personales o pequeños negocios
- Para sitios con múltiples administradores, considera usar un backend real

## 🔄 Gestión de Usuarios

### Como Administrador

El usuario `Yapete` tiene privilegios especiales:
- No puede ser eliminado
- Puede ver todos los usuarios registrados
- Puede eliminar otros usuarios (función disponible en futuras actualizaciones)

### Usuarios Regulares

Los usuarios registrados pueden:
- Iniciar sesión en el panel
- Editar el contenido del sitio
- Cerrar sesión

## 🐛 Solución de Problemas

### No puedo iniciar sesión
- Verifica que estés usando las credenciales correctas
- Asegúrate de que JavaScript esté habilitado en tu navegador
- Limpia la caché del navegador si es necesario

### Olvidé mi contraseña
Como este sistema usa localStorage:
1. Abre las herramientas de desarrollador (F12)
2. Ve a la pestaña "Application" o "Almacenamiento"
3. Busca "localStorage"
4. Elimina las entradas `site_users` y `current_session`
5. Recarga la página - el usuario admin se recreará automáticamente

### El panel no me deja entrar
- Asegúrate de haber iniciado sesión primero
- Verifica que no hayas cerrado sesión accidentalmente
- Intenta limpiar la caché y volver a iniciar sesión

## 📞 Soporte

Si tienes problemas o preguntas:
1. Revisa esta documentación
2. Verifica que todos los archivos estén en su lugar
3. Asegúrate de que los archivos no hayan sido modificados incorrectamente

## 🔮 Futuras Mejoras

Posibles mejoras que se pueden agregar:
- [ ] Recuperación de contraseña
- [ ] Gestión de usuarios desde el panel admin
- [ ] Roles y permisos (admin, editor, etc.)
- [ ] Registro de actividad (logs)
- [ ] Autenticación de dos factores (2FA)
- [ ] Backend real con base de datos

## 📝 Notas Técnicas

### Almacenamiento
- **Usuarios:** `localStorage.site_users`
- **Sesión:** `localStorage.current_session`
- **Configuración:** `localStorage.siteConfig`

### Estructura de Usuario
```javascript
{
  id: "unique_id",
  username: "nombre_usuario",
  password: "hash_contraseña",
  role: "admin" | "user",
  createdAt: "2024-01-01T00:00:00.000Z"
}
```

### Estructura de Sesión
```javascript
{
  userId: "user_id",
  username: "nombre_usuario",
  role: "admin" | "user",
  loginTime: "2024-01-01T00:00:00.000Z"
}
```

---

**Última actualización:** 2024  
**Versión:** 1.0.0
