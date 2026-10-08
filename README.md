# Sol Dillon — Portfolio

Site minimaliste (en français) pour présenter les fresques murales, illustrations,
design textile et peintures de Sol Dillon. En ligne : https://soldillon.com

Sitio 100% estático (HTML + CSS + JS), sin dependencias — ideal para GitHub Pages.

## Contenido

- `assets/personajes/` — viñetas ilustradas de Sol (PNG transparentes) que forman
  la línea de tiempo del hero.
- `assets/trabajos/` — fotos extraídas del portfolio PDF de Sol (murales Station
  Sucrée / chambre d'enfant / jardín, textiles Hi Prints, identidad Pampier,
  ilustraciones y pinturas).
- Textos: tomados del "Portfolio Sol Dillon.pdf" (À propos, expertise, contacto).

## Personalizar

- **Cambiar/añadir fotos**: poner los .jpg en `assets/trabajos/` y editar las
  `<figure class="work">` de `index.html`.
- **Contacto**: email, Instagram y teléfono están en la sección `#contact` de
  `index.html`.

## Publicar en GitHub Pages

1. Crear un repositorio en GitHub y subir este proyecto.
2. **Settings → Pages → Source: Deploy from a branch**, rama `main`, carpeta `/ (root)`.
3. El sitio queda en `https://<usuario>.github.io/<repo>/`.
