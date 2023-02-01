<template>
  <div class="main-content-due-dynamic">
    <h2>Unbeatable dynamic duo</h2>
    <div class="portraits">
      <!-- Javier Ramirez -->
      <figure>
        <img src="../assets/img/javi-foto.jpeg" alt="Javier image" />
        <figcaption>Javier Ram&iacute;rez Pulido</figcaption>
      </figure>
      <!-- Victor Diaz -->
      <figure>
        <img src="../assets/img/victor-foto.png" alt="Victor image" />
        <figcaption>Victor D&iacute;az Bustos</figcaption>
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  name: "DynamicDue"
};
</script>

<style scoped lang="scss">
.main-content-due-dynamic {
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  .portraits {
    display: flex;
    flex-direction: row;

    figure {
      margin: 10px;
      max-width: 200px;
      max-height: 200px;

      img {
        width: 100%;
        height: 100%;

        object-fit: cover;
        border-radius: 30px;
      }
      figcaption {
        text-align: center;
      }
    }
  }
}
</style>
