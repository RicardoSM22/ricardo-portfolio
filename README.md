# Ricardo Sánchez Medina — Portafolio

Sitio funcional en **React + TypeScript + Vite**, listo para GitHub y Vercel.

## Ejecutar localmente

Requiere Node.js 20 o superior.

```bash
npm install
npm run dev
```

Abre la dirección local que muestra Vite (normalmente http://localhost:5173).

## Verificar producción

```bash
npm run build
npm run preview
```

## Publicar en GitHub y Vercel

1. Descomprime este proyecto y abre una terminal **dentro de esta carpeta** (donde está `package.json`).
2. Si tu repositorio ya existe, copia los archivos del proyecto a la raíz de ese repositorio, reemplazando los anteriores, pero **sin borrar la carpeta `.git`**. No subas `node_modules` ni `dist`.
3. Ejecuta `npm install`, `npm run build`, `git add .`, `git commit -m "Nuevo portafolio"` y `git push`.
4. En Vercel, importa tu repositorio GitHub si aún no está conectado. Framework: **Vite**. Build Command: `npm run build`. Output Directory: `dist`. Root Directory: `./` si `package.json` está en la raíz.
5. Si ya tienes Vercel conectado a esa rama, cada `git push` activará un nuevo despliegue. El archivo `vercel.json` permite recargar rutas como `/projects/transito-mx` sin errores 404.

## Editar proyectos, imágenes y videos

- Datos de proyectos: `src/data.ts`.
- Imágenes reales: `public/media/` (copiadas del archivo proporcionado).
- Cada proyecto tiene `image`, `gallery` y `video` opcionales.
- Para añadir una portada, guarda por ejemplo `public/media/nautilus/cover.jpg` y asigna `image:'/media/nautilus/cover.jpg'`.
- Para un video publicado, asigna `video:'https://www.youtube.com/watch?v=...'` en el proyecto. No se muestra un enlace roto cuando `video` no está definido.
- Idiomas: los textos bilingües de los proyectos están en `src/data.ts` (`es` / `en`); los textos de la interfaz en `src/main.tsx`.
- El CV queda **pendiente**: no se incluye un enlace de descarga hasta que estén terminados los PDF actualizados.
- WhatsApp: el botón usa un enlace `wa.me`; el número no se imprime en la interfaz, pero **es visible al abrir o inspeccionar el enlace**.

## Notas de contenido

- Las imágenes de `project-enterprise.jpg`, `project-truck.jpg` y otras imágenes genéricas antiguas se conservan en `public/media` pero no se presentan como evidencia real de proyectos.
- Proyectos sin capturas muestran un marcador explícito de material pendiente.
- Las imágenes de terceros y marcas se usan para identificar trabajos desarrollados para clientes de los empleadores, no para sugerir contratación directa.
- No se han inventado métricas ni videos.
