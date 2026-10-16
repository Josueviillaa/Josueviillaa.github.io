# Portfolio · Josu

CV y portfolio de writeups de HackTheBox. Sitio estático construido con **Astro + TypeScript + Tailwind CSS v4**. Estética "cuaderno de pentest / terminal", oscuro por defecto con toggle a claro.

---

## Desarrollo local

Requisitos: **Node.js 20+** y npm.

```bash
npm install      # instala dependencias (solo la primera vez)
npm run dev      # servidor de desarrollo en http://localhost:4321
```

Otros comandos:

```bash
npm run build    # astro check (tipos) + build de producción en dist/
npm run preview  # sirve el build de dist/ para revisarlo
npm run check    # solo comprobación de tipos
```

---

## Tus datos — qué editar

Todo lo personalizable está marcado con el comentario `TODO(Josu)`. Para encontrarlos todos, busca `TODO(Josu)` en el proyecto. Los principales:

| Qué | Dónde |
| --- | --- |
| Nombre, rol, pitch, email, GitHub, LinkedIn | [`src/config/site.ts`](src/config/site.ts) |
| Texto de "Sobre mí" y datos rápidos | [`src/config/site.ts`](src/config/site.ts) → `about`, `facts` |
| Skills / stack (categorías e items) | [`src/data/skills.ts`](src/data/skills.ts) |
| Certificaciones | [`src/data/certs.ts`](src/data/certs.ts) |
| Colores, tipografías, tema | [`src/styles/global.css`](src/styles/global.css) |

> Los enlaces de GitHub y LinkedIn se construyen a partir del **usuario/slug**, no de la URL completa. Pon solo `tu-usuario`.

---

## Añadir una máquina (writeup)

Crear un writeup es **crear un archivo**, sin tocar componentes:

1. Copia la plantilla `src/content/writeups/_plantilla.mdx` a un archivo nuevo en la misma carpeta, p. ej. `src/content/writeups/manager.mdx`.
   - El **nombre del archivo es el slug** de la URL: `manager.mdx` → `/writeups/manager/`.
   - Los archivos que empiezan por `_` se ignoran (por eso la plantilla no se publica).
2. Rellena el frontmatter (metadatos). Campos:

   | Campo | Tipo | Notas |
   | --- | --- | --- |
   | `title` | texto | Nombre de la máquina |
   | `os` | `Linux` · `Windows` · `FreeBSD` · `OpenBSD` · `Otro` | |
   | `difficulty` | `Easy` · `Medium` · `Hard` · `Insane` | Color del badge |
   | `date` | `AAAA-MM-DD` | Ordena los writeups |
   | `ports` | lista | p. ej. `["22/ssh", "80/http"]` |
   | `tags` | lista | Técnicas usadas |
   | `summary` | texto | Aparece en la tarjeta de la home |
   | `retired` | `true` / `false` | Controla el aviso del pie |
   | `draft` | `true` / `false` | `true` = no se publica en producción |

3. Escribe el cuerpo en Markdown. **Cada `## ` es una fase** y se numera sola (01, 02, …).
4. Componentes disponibles sin importar nada:

   ````mdx
   <Terminal title="nmap · maquina.htb">

   ```bash
   nmap -sCV maquina.htb
   ```

   </Terminal>

   <Lesson>

   Qué aprendiste en esta fase.

   </Lesson>
   ````

El esquema de validación de los campos está en [`src/content.config.ts`](src/content.config.ts); si un campo falta o tiene un valor no permitido, `npm run build` avisa.

> **Nota sobre el contenido:** se publican máquinas retiradas con fines educativos y se explica el **concepto** de cada vector, sin credenciales reales ni payloads listos para copiar.

---

## Despliegue — GitHub Pages

Incluye el workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), que hace build y deploy en cada push a `main`.

Pasos la primera vez:

1. Crea el repositorio en GitHub y sube el proyecto.
2. En el repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Haz push a `main`. El workflow publica el sitio.

La `base` y la URL del sitio las inyecta el propio workflow (`configure-pages`), así que funciona tanto en un repo de proyecto (`usuario.github.io/portfolio`) como en uno de usuario (`usuario.github.io`) sin tocar nada.

Para desarrollo local no hace falta configurar nada: `base` cae en `/`.

---

## Estructura

```
src/
├─ config/site.ts        → tus datos (única fuente)
├─ data/                 → skills, certificaciones
├─ content/writeups/     → un .mdx por máquina
├─ content.config.ts     → esquema de los writeups
├─ styles/global.css     → tokens de color, tema, tipografía
├─ layouts/              → BaseLayout, WriteupLayout
├─ components/           → nav, tarjetas, terminal, lección…
└─ pages/                → index, writeups/[slug], 404
```
