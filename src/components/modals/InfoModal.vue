<template>
  <div class="playModal-container" @click.stop>
    <h1>Information</h1>
    <h2>¿En qué consiste?</h2>
    <p>
      Un juego, un bote económico y un reto imposible: ganar en el 'Preguntados'
      al dúo dinámico.
    </p>
    <p>
      Corren los rumores por ahí de que existe una pareja que no conoce la
      derrota en un juego de pura estrategia e intelecto. Ellos fueron los
      encargados de meter los 2 primeros euros a un cofre que, a día de hoy,
      contiene todo bote acumulado. La dinámica es simple:
    </p>
    <ul>
      <li>
        Busca un fiel compañero para esta aventura (o corre el riesgo de ir solo
        ( ͡° ͜ʖ ͡°) )
      </li>
      <li>Súmate a la cola.</li>
      <li>Introduce 1€ por persona en el cofre (2€ por pareja)</li>
      <li>Juega una partida en vivo contra el dúo dinámico</li>
      <li>Si ganas, te llevas todo lo que haya en el bote</li>
      <li>Si pierdes, se queda en el cofre para el siguiente</li>
    </ul>
    <p>
      Como veréis, en ningún caso el dinero es para nosotros. Nuestro único
      objetivo es promover una actividad que nos acerque a la gente de nuestra
      oficina, que nos obligue a darle al coco y cree un ambiente divertido,
      recompensado con un premio por el que van a tener que sudar.
    </p>
    <h2>Reglas del juego</h2>
    <ul>
      <li>
        Está prohibido por parte de la pareja retadora utilizar ningún tipo de
        comodín, ventaja o trampa en la partida.
      </li>
      <li>
        El dúo retado (Javi y Víctor) cuenta con 3 comodines a lo largo de la
        partida: repetir un intento, eliminar la mitad de las opciones y
        reintentar una pregunta
      </li>
      <li>
        La última corona de cualquiera de los equipos se juega a desafío directo
        contra la pareja oponente, siempre y cuando el resultado no sea de 5-0 a
        favor de cualquiera de los equipos, en cuyo caso se podrá obtener la
        última corona por el procedimiento clásico de pregunta directa.
      </li>
      <li>
        La deportividad y la competitividad son esenciales en partes iguales
        para que el juego funcione.
      </li>
    </ul>
    <h2>Eventos especiales</h2>
    <p>
      Cada 50€ en el bote se realizará un mini-evento en la 5º planta a la hora
      del almuerzo. Habrá barra libre de palomitas para los espectadores y se
      jugará con un formato diferente al habitual. Se realiza un clásico 'mejor
      de 3' en el que las dos primeras partidas se llevan a cabo en un 1 vs 1.
      En caso de una victoria para cada equipo, la tercera partida se resuelve
      con el formato original de 2 vs 2 para desempatar. Aquí la suerte ya no
      está de tu lado, sino que la estrategia es la que te conduce a la victoria
      o al fracaso.
    </p>
    <p>Todo dicho. ¡Mucha suerte y nos vemos las caras pronto!</p>
  </div>
</template>

<script></script>

<style scoped lang="scss">
.playModal-container {
  background-color: #ebebeb;

  padding: 50px 10%;
  margin: 0px 20px;

  max-width: 1000px;
  height: 70%;
  overflow-y: scroll;

  box-shadow: 0 0 10px #000000;

  h1 {
    font-size: 1.7rem;
    margin-bottom: 10px;
  }
  h2 {
    font-size: 1.3rem;
    margin: 20px 0px;
  }
  p {
    text-align: justify;
    margin: 10px 0px;
  }
  ul {
    margin: 10px 0px;

    li {
      margin-bottom: 10px;
    }
    li:before {
      content: "➜ ";
    }
  }
}
</style>
