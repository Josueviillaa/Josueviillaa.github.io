<div align="center">

# `~/ portfolio`

**CV y writeups de HackTheBox con estética de cuaderno de pentest.**
Sitio estático, oscuro por defecto, pensado para leerse rápido.

[**▲ Ver en vivo →**](https://josueviillaa.github.io/)

![Deploy](https://github.com/Josueviillaa/Josueviillaa.github.io/actions/workflows/deploy.yml/badge.svg)
![Astro](https://img.shields.io/badge/Astro-0d1117?logo=astro&logoColor=2ee6c3)
![TypeScript](https://img.shields.io/badge/TypeScript-0d1117?logo=typescript&logoColor=2ee6c3)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-0d1117?logo=tailwindcss&logoColor=2ee6c3)

</div>

---

Página personal que funciona como CV y como colección de writeups de máquinas de
HackTheBox. Un writeup nuevo es **un archivo Markdown**, no un cambio de código.

### Características

- **Una sola página** con hero, sobre mí, skills, certificaciones, writeups y contacto.
- **Writeups como contenido**: cada máquina es un `.mdx` validado por esquema; las fases
  se numeran solas y hay bloques de terminal y cajas de "lección aprendida".
- **Tema claro / oscuro** con tokens de color centralizados; el toggle manda sobre la
  preferencia del sistema y no parpadea al cargar.
- **Accesible y responsive**: navegación por teclado, `prefers-reduced-motion`, sin scroll
  horizontal hasta 400 px.
- **Cero backend**: build estático y despliegue automático en cada push.

### Stack

`Astro` · `TypeScript` · `Tailwind CSS v4` · `MDX` · `GitHub Pages`

---

## Desarrollo local

Requisitos: **Node.js 22+** y npm.

```bash
npm install      # solo la primera vez
npm run dev      # http://localhost:4321
```

| Comando | Qué hace |
| --- | --- |
| `npm run dev` | Servidor de desarrollo con recarga en caliente |
| `npm run build` | Comprueba tipos y genera el sitio en `dist/` |
| `npm run preview` | Sirve el `build` para revisarlo |
| `npm run check` | Solo comprobación de tipos |

---

## Añadir una máquina

Crear un writeup es crear un archivo, sin tocar componentes:

1. Copia `src/content/writeups/_plantilla.mdx` a un nombre nuevo, p. ej.
   `src/content/writeups/manager.mdx`. **El nombre del archivo es el slug de la URL**
   (`manager.mdx` → `/writeups/manager/`). Los archivos que empiezan por `_` se ignoran.
2. Rellena el frontmatter:

   | Campo | Valores |
   | --- | --- |
   | `title` | Nombre de la máquina |
   | `os` | Texto libre (`Linux`, `Windows`, `Linux (Ubuntu)`…) |
   | `difficulty` | `Easy` · `Medium` · `Hard` · `Insane` |
   | `date` | `AAAA-MM-DD` (ordena los writeups) |
   | `ports` · `tags` | Listas |
   | `summary` | Frase que sale en la tarjeta |
   | `retired` · `draft` | `draft: true` no se publica |

3. Escribe el cuerpo. Cada `## ` es una fase y se numera sola. Componentes disponibles
   sin importar nada:

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

El esquema de validación está en [`src/content.config.ts`](src/content.config.ts): si un
campo falta o es inválido, `npm run build` avisa.

---

## Estructura

```text
src/
├─ config/            configuración del sitio
├─ data/              skills, certificaciones
├─ content/writeups/  un .mdx por máquina
├─ content.config.ts  esquema de los writeups
├─ styles/            tokens de color, tema, tipografía
├─ layouts/           plantillas de página
├─ components/        nav, tarjetas, terminal, lección…
└─ pages/             index, writeups/[slug], 404
```

---

## Despliegue

El workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) construye y
publica en **GitHub Pages** en cada push a `main`. La ruta base y la URL se detectan solas,
así que funciona igual en un repo de usuario (`usuario.github.io`) que en uno de proyecto
(`usuario.github.io/repo`) sin tocar nada.

<div align="center"><sub>Writeups de máquinas retiradas, con fines educativos sobre entornos autorizados.</sub></div>
