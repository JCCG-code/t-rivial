<template>
  <div class="modal-container" v-if="showModal">
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
          required
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      player1_name: "",
      player2_name: "",
      showModal: true
    };
  },
  methods: {
    async handleSubmit() {
      await this.axios
        .put(
          "/queue",
          {
            player1: this.player1_name,
            player2: this.player2_name
          },
          {
            headers: {
              access_token: "mondongo"
            }
          }
        )
        .then(() => {
          alert("The dynamic duo awaits you. Prepare to die.");
          this.showModal = false;
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }
};
</script>

<style scoped lang="scss">
.modal-container {
  position: fixed;
  top: 0;
  left: 0;

  background-color: #00000036;

  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
}
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
    background-color: #00000017;

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
