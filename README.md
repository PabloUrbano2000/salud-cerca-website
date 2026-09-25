# Medimatch

Maqueta responsive para la gestión de citas médicas, construida con React, Vite, Tailwind CSS y React Router. No incluye backend ni datos reales.

## Desarrollo local

```bash
npm install
npm run dev
# o bien
npm run start
```

Para comprobar el proyecto antes de publicar:

```bash
npm run build
npm run lint
```

## Despliegue automático con Cloudflare Pages

Este proyecto no necesita Wrangler para el despliegue automático. Cloudflare Pages instala las dependencias, ejecuta el build y sirve el directorio generado.

1. Crea un repositorio vacío en GitHub.
2. Añade el remoto y sube la rama `main`:

   ```bash
   git add .
   git commit -m "Initial project setup"
   git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
   git push -u origin main
   ```

3. En Cloudflare, abre **Workers & Pages** y selecciona **Create application → Pages → Import an existing Git repository**.
4. Selecciona el repositorio y configura:
   - Production branch: `main`
   - Build command: `npm run build`
   - Build output directory: `dist`

5. Selecciona **Save and Deploy**.

Cloudflare Pages publicará cada cambio enviado a `main` y generará previews para los pull requests. Como no existe un `404.html` en la raíz, Cloudflare tratará la aplicación como SPA y las rutas de React Router funcionarán al recargar la página.

Wrangler solo sería necesario si en el futuro se decide desplegar manualmente desde una terminal o se agregan Cloudflare Workers/Pages Functions.
