# stopWatch
Un cronometro hecho con HTML, CSS y JavaScript donde utilizo un script para actualizar una etiqueta <span> que utilizo como display, ademas de cierta logica interna del script para que un string funcione como hora (MM:SS), explicare la logica a continuacion: 

timeFormatter(): Se encarga de convertir los milisegundos en minutos y segundos (MM:SS), para eso agrego los ceros a la izquierda para que siempre se vean con dos dígitos( padStart(2, '0') ).

updateDisplay(): Esta función se ejecuta cada segundo (uso setInterval()) y calculo el tiempo pasado desde que el cronómetro empezó. Luego actualiza el display con el nuevo valor.

startBtn, stopBtn, y resetBtn: Estos manejadores de eventos inician, detienen y reinician el cronómetro, respectivamente.

