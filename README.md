# María Soldilon — Portfolio

Sitio minimalista para presentar los murales, pinturas y diseños de María Soldilon,
con una animación al hacer scroll donde de su cabeza salen creaciones.

Es un sitio 100% estático (HTML + CSS + JS), sin dependencias — ideal para GitHub Pages.

## Cómo personalizarlo

1. **Fotos de trabajos** — guardá las fotos en `assets/trabajos/` y en `index.html`
   reemplazá cada `<div class="work__ph …">` por
   `<img src="assets/trabajos/nombre.jpg" alt="Descripción del trabajo">`.
   Actualizá los títulos de cada `figcaption`.

2. **Video real de María** — guardá el video en `assets/proceso.mp4` y en `js/main.js`
   cambiá `const VIDEO_SRC = null;` por `const VIDEO_SRC = 'assets/proceso.mp4';`.
   El video se reproduce al ritmo del scroll (para que funcione bien, exportarlo sin
   audio y en H.264). Mientras no haya video, se muestra la animación ilustrada.

3. **Email e Instagram** — en `index.html`, buscá `hola@mariasoldilon.com` y el link
   de Instagram y reemplazalos por los reales (aparecen en la sección Contacto y en
   el botón "Pedir presupuesto").

## Publicar en GitHub Pages

1. Crear un repositorio en GitHub y subir este proyecto.
2. En el repositorio: **Settings → Pages → Source: Deploy from a branch**,
   elegir la rama `main` y la carpeta `/ (root)`.
3. En unos minutos el sitio queda publicado en `https://<usuario>.github.io/<repo>/`.
