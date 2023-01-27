<template>
  <div class="buttons-container">
    <button id="playButton">Play</button>
    <button id="whatIsButton">Info</button>
  </div>
</template>

<script>
export default {
  name: "SignInReadme"
};
</script>

<style scoped lang="scss">
.buttons-container {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  align-items: center;
}

button {
  background-color: #17a317;
  color: white;
  font-size: 2rem;

  width: 130px;
  height: 60px;
  border-radius: 10px;

  text-align: center;
  cursor: pointer;
}

#playButton {
  background-color: #17a317;
}

#whatIsButton {
  background-color: rgb(102, 99, 255);
}

@media only screen and (min-width: 992px) {
  .buttons-container {
    flex-direction: row;
    column-gap: 150px;
  }
}
</style>
