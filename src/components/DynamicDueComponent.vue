<template>
  <div class="main-content-due-dynamic">
    <h2>Unbeatable dynamic duo</h2>
    <div class="portraits">
      <!-- Javier Ramirez -->
      <figure>
        <img src="../assets/img/javier-foto.png" alt="Javier image" />
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

      img {
        width: 200px;
        border-radius: 30px;
      }
      figcaption {
        text-align: center;
      }
    }
  }
}
</style>
