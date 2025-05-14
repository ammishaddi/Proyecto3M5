# PROYECTO 3 MODULO 3- FETCH Y AXIOS PARA EL USO DE APIs
El presente repositorio contiene el proyecto 3 del Módulo "Desarrollo avanzado en JS" del master en Frontend

## Objetivos de aprendizaje
- Aplicar fetch y axios para poder acceder y trabajar con APIs, y observar la diferencia entre ambos

## FETCH
- Use la API de Harry Potter
- Fue relativamente sencillo manejar la API con fetch
- No me funciono agregar el ?limit=20 para delimitar el número de personajes así que tuve que poner un slice:  data.slice(0, 21)


## Fetch 
![Texto alternativo](https://i.imgur.com/B339FLO.png)

### Código JS
![Texto alternativo](https://i.imgur.com/jf9f24D.png)

### Código HTML
![Texto alternativo](https://i.imgur.com/By3GkFa.png)

## AXIOS
- Use la API de Naruto
- Me estuve peleando con la instalación de axios ya que me salían muchos errores y tuve que intentar instalarlo como 5 veces
- Me costó más trabajo manejar la API con axios, aunque creo que fue más por errores que se dieron en el código que por propiamente usar axios
- Para poner la imagen del personaje no me habia dado cuenta que la API tiene 2 imagenes, tuve que poner que solo accediera a la posicion 0  image.src = personaje.images[0];
- por alguna razon no me funciono solo el import axios from axios asi te tuve que poner el import axios from 'https://cdn.skypack.dev/axios'
- me daba siempre fallo al cargar personajes, luego vi que en la API a diferencia de otras, todos los personajes vienen dentro de "characters" asi que tuve que cambiar de const personajes = response.data.slice(0, 21);  a const personajes = response.data.characters.slice(0, 21); y ya me funcionó, estuve mucho tiempo tratando de ver donde estaba el error y era ahí :c
- Hay algunos valores a los que no puedo acceder, no se si es cuestión de la API porque luego suo exactamente la misma linea para acceder a un valor similar y si me lo da, al final termine dejando poca info por lo mismo
- Otra cosa es que al momento de hacer el git add . no me dejo y me empezó a mandar un monton de advertencias en bucle, ahi ya no supe que hacer y le pedi ayuda a chatgpt jaja :c y me dijo que pusiera un .gitignore, asi que ya no se subieron todos los archivos de node_modules porque la temrinal bash empezaba a salir un mensaje en bucle si lo intentaba subir 

## Axios
![Texto alternativo](https://i.imgur.com/jf9f24D.png)

### Código JS
![Texto alternativo](https://i.imgur.com/DRrZKQ3.png)

### Código HTML
![Texto alternativo](https://i.imgur.com/gMaOFOu.png)



