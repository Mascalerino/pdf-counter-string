# PDF Name Counter

## Descripción

Este proyecto es una herramienta diseñada para contar la frecuencia de nombres específicos dentro de una serie de documentos PDF. Es ideal para usuarios que necesitan realizar análisis de texto en archivos PDF para obtener estadísticas sobre la presencia de nombres o términos determinados.

## Requisitos Previos

Antes de comenzar a usar esta herramienta, asegúrate de tener instalado Node.js en tu sistema. Puedes descargarlo e instalarlo desde [Node.js oficial](https://nodejs.org/).

## Instalación

Para configurar el proyecto en tu máquina local, sigue estos pasos:

1. Clona el repositorio en tu máquina local usando el siguiente comando en tu terminal:
   git clone https://github.com/Mascalerino/pdf-counter-string.git

2. Navega al directorio del proyecto:

## Uso

Para usar esta herramienta, sigue estos pasos:

1. Coloca tus archivos PDF en la carpeta `pdfs` dentro del directorio del proyecto.

2. Abre el archivo `names.txt` y edita o añade los nombres que deseas buscar en los documentos PDF. Asegúrate de que cada nombre esté en una línea nueva.

3. Ejecuta el script con el siguiente comando:
   npm run start

4. Revisa la consola para ver los resultados de las ocurrencias de cada nombre en los documentos PDF.

5. Las ocurrencias también se guardan en un archivo llamado result.txt

## Estructura del Proyecto

La estructura de carpetas del proyecto es la siguiente:

- `src/`: Contiene los scripts fuente del proyecto.
- `pdfs/`: Debes colocar aquí los PDFs a analizar.
- `names.txt`: Aquí debes listar los nombres a buscar en los PDFs.
- `package.json`: Archivo de configuración de Node.js con las dependencias del proyecto.
- `result.txt`: Aquí se guardan el número de ocurrencias de cada nombre de names.txt

## Contribuir

Si deseas contribuir a este proyecto, por favor fork el repositorio y envía tus pull requests. También puedes abrir un issue para discutir cambios propuestos o reportar bugs.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo `LICENSE.md` para detalles.

## Contacto

Si tienes alguna pregunta o necesitas ayuda con la configuración o uso de esta herramienta, no dudes en contactarme a través de [tallonprogramacion@gmail.com].

---
