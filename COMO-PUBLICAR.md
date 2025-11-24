# 🌐 Cómo Publicar tu Página Web en Internet

Tu página web actualmente funciona en tu computadora. Para que esté disponible en internet y cualquiera pueda verla, necesitas seguir estos pasos:

## 📋 Opciones para Publicar

### Opción 1: GitHub Pages (GRATIS) ⭐ Recomendado

**Ventajas:**
- ✅ Completamente gratis
- ✅ Fácil de usar
- ✅ Dominio incluido (tunombre.github.io)
- ✅ Actualizaciones fáciles

**Pasos:**

1. **Crear cuenta en GitHub**
   - Ve a https://github.com
   - Haz clic en "Sign up" (Registrarse)
   - Crea tu cuenta gratis

2. **Instalar GitHub Desktop** (opcional pero más fácil)
   - Descarga desde: https://desktop.github.com
   - Instala en tu computadora

3. **Crear un repositorio**
   - En GitHub, haz clic en "New repository"
   - Nombre: `mi-taller-polarizado` (o el que prefieras)
   - Marca como "Public"
   - Haz clic en "Create repository"

4. **Subir tus archivos**
   - Arrastra todos tus archivos (.html, .css, .js) al repositorio
   - O usa GitHub Desktop para sincronizar la carpeta

5. **Activar GitHub Pages**
   - En tu repositorio, ve a "Settings"
   - Busca la sección "Pages"
   - En "Source", selecciona "main" branch
   - Guarda los cambios
   - Tu sitio estará en: `https://tu-usuario.github.io/mi-taller-polarizado`

**Video tutorial:** Busca en YouTube "como publicar en github pages"

---

### Opción 2: Netlify (GRATIS) ⭐ Muy Fácil

**Ventajas:**
- ✅ Gratis
- ✅ Súper fácil (arrastra y suelta)
- ✅ Dominio incluido
- ✅ Actualizaciones simples

**Pasos:**

1. **Ir a Netlify**
   - Ve a https://www.netlify.com
   - Haz clic en "Sign up" (Registrarse)

2. **Crear cuenta**
   - Puedes usar tu email o cuenta de GitHub

3. **Subir tu sitio**
   - Haz clic en "Add new site" → "Deploy manually"
   - Arrastra toda tu carpeta "Pagina Web" a la zona indicada
   - ¡Listo! Tu sitio estará publicado en segundos

4. **Tu URL será algo como:**
   - `https://nombre-aleatorio.netlify.app`
   - Puedes cambiar el nombre en la configuración

**Video tutorial:** Busca en YouTube "como publicar en netlify"

---

### Opción 3: Vercel (GRATIS)

**Similar a Netlify:**
- Ve a https://vercel.com
- Regístrate gratis
- Arrastra tu carpeta
- ¡Publicado!

---

### Opción 4: Hosting Tradicional (PAGO)

Si quieres un dominio personalizado como `www.mitallerpolarizado.com`:

**Servicios recomendados:**

1. **Hostinger** (Económico)
   - Precio: ~$2-5 USD/mes
   - Incluye dominio gratis el primer año
   - Web: https://www.hostinger.com

2. **GoDaddy**
   - Precio: ~$5-10 USD/mes
   - Muy conocido
   - Web: https://www.godaddy.com

3. **Bluehost**
   - Precio: ~$3-8 USD/mes
   - Buena reputación
   - Web: https://www.bluehost.com

**Pasos generales:**

1. Comprar hosting y dominio
2. Acceder al panel de control (cPanel)
3. Buscar "File Manager" o "Administrador de archivos"
4. Subir todos tus archivos a la carpeta `public_html`
5. Tu sitio estará en tu dominio

---

## 🔄 Cómo Editar y Actualizar tu Sitio en Netlify

### ⚠️ IMPORTANTE: No puedes editar directamente en Netlify

Netlify solo MUESTRA tu sitio web, no tiene editor. Debes editar en tu computadora y luego subir los cambios.

### 📝 Proceso Completo para Editar:

#### Paso 1: Editar en tu Computadora

1. **Abre admin.html en tu computadora**
   - Haz doble clic en `admin.html`
   - Se abrirá en tu navegador

2. **Haz tus cambios**
   - Cambia textos, imágenes, precios, etc.
   - Haz clic en "Guardar Todos los Cambios"

3. **Verifica los cambios**
   - Abre `index.html` en tu navegador
   - Revisa que todo se vea bien

#### Paso 2: Subir los Cambios a Netlify

**Opción A: Arrastrar y Soltar (Más Fácil)**

1. Ve a https://app.netlify.com
2. Inicia sesión
3. Haz clic en tu sitio
4. Ve a la pestaña "Deploys"
5. Arrastra SOLO estos archivos actualizados:
   - index.html
   - styles.css
   - script.js
6. ¡Listo! Los cambios se verán en 1-2 minutos

**Opción B: Conectar con GitHub (Automático)**

Si conectas tu sitio con GitHub:
1. Edita localmente con admin.html
2. Sube los cambios a GitHub
3. Netlify actualiza automáticamente

---

### 🎯 Flujo de Trabajo Recomendado:

```
1. Editar → admin.html (en tu computadora)
   ↓
2. Guardar cambios
   ↓
3. Verificar → index.html (en tu navegador local)
   ↓
4. Subir a Netlify → Arrastra index.html, styles.css, script.js
   ↓
5. ¡Sitio actualizado en internet!
```

---

### 📹 Tutorial Paso a Paso:

**Para Editar tu Sitio:**

1. **En tu computadora:**
   ```
   - Abre: admin.html
   - Edita lo que necesites
   - Guarda los cambios
   - Cierra el navegador
   ```

2. **Subir a Netlify:**
   ```
   - Ve a: app.netlify.com
   - Clic en tu sitio
   - Clic en "Deploys"
   - Arrastra los 3 archivos:
     * index.html
     * styles.css  
     * script.js
   - Espera 1-2 minutos
   ```

3. **Verificar:**
   ```
   - Abre tu sitio: tunombre.netlify.app
   - Verifica los cambios
   - ¡Listo!
   ```

---

### ❓ Preguntas Frecuentes:

**P: ¿Puedo editar directamente en Netlify?**
R: No, Netlify no tiene editor. Debes editar en tu computadora.

**P: ¿Cada vez que edito debo subir todo?**
R: Sí, pero solo los 3 archivos principales (index.html, styles.css, script.js).

**P: ¿Cuánto tarda en actualizarse?**
R: Entre 1-2 minutos después de subir los archivos.

**P: ¿Pierdo mis cambios anteriores?**
R: No, Netlify guarda un historial. Puedes volver a versiones anteriores.

**P: ¿Puedo editar desde mi celular?**
R: No es práctico. Es mejor usar una computadora.

---

### 💡 Consejos:

1. **Haz respaldo:** Guarda una copia de tu carpeta completa
2. **Prueba local primero:** Siempre verifica en tu computadora antes de subir
3. **Usa nombres descriptivos:** Si haces muchos cambios, anota qué modificaste
4. **Historial de Netlify:** Puedes ver todas las versiones anteriores en "Deploys"

---

## 🔄 Cómo Actualizar en Otras Plataformas

### Si usas GitHub Pages:
1. Edita tus archivos localmente con admin.html
2. Sube los cambios a GitHub
3. Los cambios se reflejan automáticamente

### Si usas Vercel:
1. Edita tus archivos localmente con admin.html
2. Arrastra la carpeta actualizada nuevamente
3. O conecta con GitHub para actualizaciones automáticas

### Si usas Hosting tradicional:
1. Edita tus archivos localmente con admin.html
2. Accede al cPanel
3. Reemplaza los archivos antiguos con los nuevos

---

## ⚠️ IMPORTANTE: Panel de Administración

**NUNCA publiques el archivo `admin.html` en internet sin protección**, ya que cualquiera podría editar tu sitio.

**Opciones seguras:**

1. **No subir admin.html** (Recomendado)
   - Edita todo localmente
   - Solo sube los cambios cuando termines
   - Mantén admin.html solo en tu computadora

2. **Proteger con contraseña** (Avanzado)
   - Requiere configuración en el servidor
   - Agrega autenticación HTTP

3. **Usar solo localmente**
   - Edita en tu computadora
   - Guarda los cambios
   - Sube solo index.html actualizado

---

## 📝 Archivos que DEBES Subir

✅ **Subir estos archivos:**
- index.html
- styles.css
- script.js
- README.md (opcional)

❌ **NO subir (mantener privados):**
- admin.html
- admin-styles.css
- admin-script.js

---

## 🎯 Recomendación Final

**Para empezar rápido y gratis:**

1. Usa **Netlify** (más fácil)
   - Arrastra y suelta
   - Listo en 2 minutos

2. O usa **GitHub Pages** (más profesional)
   - Requiere cuenta GitHub
   - Mejor para actualizaciones frecuentes

**Cuando quieras dominio propio:**
- Compra en Hostinger o GoDaddy
- Ejemplo: www.tupolarizado.com

---

## 🆘 ¿Necesitas Ayuda?

**Tutoriales en YouTube:**
- "Como publicar página web gratis"
- "GitHub Pages tutorial español"
- "Netlify tutorial español"
- "Como subir sitio web a hosting"

**Busca videos recientes (2023-2024) para información actualizada.**

---

## 📞 Próximos Pasos

1. Elige una opción (recomiendo Netlify para empezar)
2. Crea tu cuenta
3. Sube tus archivos (excepto admin.html)
4. ¡Tu sitio estará en línea!
5. Comparte tu URL con tus clientes

**¡Buena suerte con tu taller de polarizado! 🚗✨**
