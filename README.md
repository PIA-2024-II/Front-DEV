# Traductor Mapudungun - Español

Este proyecto es una aplicación web que proporciona servicios de traducción entre Mapudungun y Español, incluyendo reconocimiento de voz (STT), traducción de texto y síntesis de voz (TTS).

## Características

- Interfaz de usuario intuitiva y responsiva
- Modo oscuro/claro
- Reconocimiento de voz (STT)
- Traducción de texto
- Síntesis de voz (TTS)

## Tecnologías Utilizadas

- React
- TypeScript
- Vite
- Tailwind CSS
- Axios para peticiones HTTP

## Cómo clonar el repositorio

Para clonar este repositorio, sigue estos pasos:

1. Abre tu terminal.
2. Navega al directorio donde quieres clonar el proyecto.
3. Ejecuta el siguiente comando:

```bash
git clone https://github.com/tu-usuario/traductor-mapudungun-espanol.git
```

4. Navega al directorio del proyecto:

```bash
cd traductor-mapudungun-espanol
```

## Instalación

Después de clonar el repositorio, sigue estos pasos para instalar las dependencias y ejecutar el proyecto:

1. Instala las dependencias:

```bash
npm install
```

2. Inicia el servidor de desarrollo:

```bash
npm run dev
```

El proyecto debería estar ahora corriendo en `http://localhost:5173` (o el puerto que Vite asigne).

## Estructura del Proyecto

El proyecto está organizado en los siguientes componentes principales:

- `App.tsx`: Componente principal que renderiza la aplicación.
- `TranslatorApp.tsx`: Maneja la lógica general y el estado de la aplicación.
- `STTComponent.tsx`: Componente para el reconocimiento de voz.
- `TraductorComponent.tsx`: Componente para la traducción de texto.
- `TTSComponent.tsx`: Componente para la síntesis de voz.

## Endpoints de los Microservicios

La aplicación interactúa con los siguientes microservicios:

1. Servicio STT (Speech-to-Text):
   - Endpoint: `http://localhost:8000/stt`
   - Método: POST
   - Cuerpo: archivo de audio
   - Respuesta: texto transcrito

2. Servicio de Traducción:
   - Endpoint: `http://localhost:8000/translate`
   - Método: POST
   - Cuerpo: `{ "text": "texto a traducir", "source_lang": "es", "target_lang": "arn" }`
   - Respuesta: `{ "translated_text": "texto traducido" }`

3. Servicio TTS (Text-to-Speech):
   - Endpoint: `http://localhost:8000/tts`
   - Método: POST
   - Cuerpo: `{ "text": "texto a convertir en voz" }`
   - Respuesta: archivo de audio

Nota: Asegúrate de que estos microservicios estén en funcionamiento y sean accesibles desde la aplicación frontend.



## Contribución

Las contribuciones son bienvenidas. Por favor, abre un issue para discutir cambios mayores antes de crear un pull request.

## Licencia

[MIT](https://choosealicense.com/licenses/mit/)