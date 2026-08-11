# Assets pendientes

La página funciona sin estos archivos (hay fondos de respaldo), pero los necesita para verse terminada.

| Archivo | Qué es | Medida sugerida |
|---|---|---|
| `camion.mp4` / `camion.webm` | Clip del camión en loop, últimos 5 segundos | 1280x720, sin audio |
| `hero-poster.jpg` | Primer frame del clip (se muestra mientras carga) | 1280x720, < 120 KB |
| `servicio-fosa.jpg` | Foto de la limpieza de fosa | 1200x900 |
| `servicio-destape.jpg` | Foto de destape de cañerías | 900x700 |
| `servicio-mantencion.jpg` | Foto del equipo o del camión en faena | 900x700 |
| `og.jpg` | Imagen para compartir en WhatsApp y redes | 1200x630 |

## Cómo generar el video del hero

Requiere `ffmpeg` (`brew install ffmpeg`).

Reemplaza `ORIGINAL.MOV` por el archivo real y `HH:MM:SS` por el punto donde
empiezan los últimos 5 segundos que quieres dejar en loop.

```bash
# 1. Recorte de 5 segundos, sin audio, escalado a 1280 de ancho
ffmpeg -ss HH:MM:SS -t 5 -i ORIGINAL.MOV \
  -an -vf "scale=1280:-2,fps=24" \
  -c:v libx264 -crf 30 -preset veryslow -movflags +faststart \
  -pix_fmt yuv420p camion.mp4

# 2. Versión WebM (queda bastante más liviana en navegadores modernos)
ffmpeg -i camion.mp4 -an -c:v libvpx-vp9 -crf 40 -b:v 0 -row-mt 1 camion.webm

# 3. Poster: primer frame del recorte
ffmpeg -i camion.mp4 -frames:v 1 -q:v 4 hero-poster.jpg
```

Objetivo de peso: **menos de 1.5 MB** en `camion.webm`. Si queda más pesado,
sube el `-crf` (más compresión) o baja a `scale=960:-2`. El video se difumina
con el fondo verde de marca vía CSS, así que la pérdida de detalle no se nota.

El video solo empieza a descargarse cuando entra en pantalla, y no se carga
en absoluto si el visitante tiene activado el ahorro de datos o
`prefers-reduced-motion`.
