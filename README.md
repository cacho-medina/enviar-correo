# Servidor para envio de correos

### Descripcion

Se utilizó la herramienta resend para el envio de correos de formulario de contactos para la empresa Boulevard Sur.

### Instalacion

1. Clona el proyecto
2. Dirigete a la carpeta `/server_boulevard-sur`
3. Instala las dependencias con `npm install`
4. Crea un archivo `.env` en la raiz del proyecto y coloca las variables de puerto (`PORT`) y la key de resend (`RESEND_KEY`)
5. Corre el proyecto con `npm run dev`

### Endpoints

Enviar

```
POST /enviar

```
