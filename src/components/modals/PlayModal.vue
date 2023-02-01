<template>
  <div class="playModal-container" @click.stop>
    <h1>How to play?</h1>
    <p>You only need to fill this fields:</p>
    <form @submit.prevent="handleSubmit">
      <label for="player1">Player one name:</label>
      <input
        type="text"
        name="player1_name"
        id="player1"
        v-model="player1_name"
        autocomplete="off"
      />
      <label for="player2">Player two name:</label>
      <input
        type="text"
        name="player2_name"
        id="player2"
        v-model="player2_name"
        autocomplete="off"
      />
      <input type="submit" value="Send now!" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      player1_name: "",
      player2_name: ""
    };
  },
  methods: {
    handleSubmit() {
      console.log("Sending data..");
      console.log(this.player1_name);
      console.log(this.player2_name);
    }
  }
};
</script>

<style scoped lang="scss">
.playModal-container {
  background-color: #ebebeb;
  max-width: 1000px;

  padding: 30px;
  border-radius: 10px;

  box-shadow: 0 0 10px #000000;

  h1 {
    font-size: 1.7rem;
    margin-bottom: 20px;
  }
  p {
    margin-bottom: 20px;
  }
  form {
    background-color: #0000002a;

    padding: 20px;
    border-radius: 10px;

    display: flex;
    flex-direction: column;

    label {
      margin: 10px 0px;
    }

    input[type="text"] {
      background-image: linear-gradient(
        135deg,
        rgba(0, 0, 255, 0.3),
        rgba(0, 128, 0, 0.3),
        rgba(255, 255, 0, 0.3),
        rgba(255, 166, 0, 0.3),
        rgba(255, 0, 0, 0.3),
        rgba(255, 192, 203, 0.3),
        rgba(128, 0, 128, 0.3)
      );

      padding: 10px;
      border-radius: 10px;
    }
    input[type="submit"] {
      text-align: center;

      background-color: rgb(0, 173, 0);
      margin-top: 30px;
      padding: 10px;
      border-radius: 10px;

      cursor: pointer;
    }
  }
}
</style>
