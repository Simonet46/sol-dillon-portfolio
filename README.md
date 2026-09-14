# Sol Dillon — Portfolio

Site minimaliste (en français) pour présenter les fresques murales, illustrations,
design textile et peintures de Sol Dillon, avec une animation au scroll : un vidéo
où des créations naissent de sa tête avance au rythme du défilement.

Sitio 100% estático (HTML + CSS + JS), sin dependencias — ideal para GitHub Pages.

## Contenido

- `assets/proceso.mp4` — video generado con Higgsfield (H.264, sin audio audible:
  el elemento `<video>` está siempre `muted`). Se reproduce al ritmo del scroll.
  Si el video no carga, se muestra automáticamente la animación SVG de respaldo.
- `assets/trabajos/` — fotos extraídas del portfolio PDF de Sol (murales Station
  Sucrée / chambre d'enfant / jardín, textiles Hi Prints, identidad Pampier,
  ilustraciones y pinturas).
- Textos: tomados del "Portfolio Sol Dillon.pdf" (À propos, expertise, contacto).

## Personalizar

- **Cambiar/añadir fotos**: poner los .jpg en `assets/trabajos/` y editar las
  `<figure class="work">` de `index.html`.
- **Cambiar el video**: reemplazar `assets/proceso.mp4` (H.264, sin audio ideal)
  o cambiar `VIDEO_SRC` en `js/main.js`.
- **Contacto**: email, Instagram y teléfono están en la sección `#contact` de
  `index.html`.

## Publicar en GitHub Pages

1. Crear un repositorio en GitHub y subir este proyecto.
2. **Settings → Pages → Source: Deploy from a branch**, rama `main`, carpeta `/ (root)`.
3. El sitio queda en `https://<usuario>.github.io/<repo>/`.
