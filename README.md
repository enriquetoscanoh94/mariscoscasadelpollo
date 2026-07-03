# Mariscos Casa del Pollo

Sitio estático móvil para Mariscos Casa del Pollo en Salinas, CA.

## Estructura

- `index.html`: landing principal con llamadas, ubicación, delivery y platillos destacados.
- `menu.html`: menú completo renderizado desde datos.
- `css/`: estilos base y estilos específicos del menú.
- `js/`: comportamiento compartido, home, menú y datos del menú.
- `assets/img/`: imágenes optimizadas usadas por producción.
- `assets/source/`: material fuente local excluido de Git.

## Desarrollo Local

Abre `index.html` directamente en el navegador o sirve la carpeta con cualquier servidor estático.

```bash
npm run check
```

## Producción

El sitio no requiere build. Para publicar, sube los archivos versionados a GitHub Pages, Netlify, Vercel o hosting estático.

No subir:

- `img/`
- `assets/source/`
- `Casadelpollo.PNG`

Esos archivos son fuentes pesadas locales, no assets de producción.
