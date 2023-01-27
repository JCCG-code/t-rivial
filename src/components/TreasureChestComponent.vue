<template>
  <div>
    <figure>
      <img src="@/assets/img/cofre.png" alt="Treasure Chest" />
      <figcaption><span>2 €</span> pot!</figcaption>
    </figure>
  </div>
</template>

<script>
export default {
  name: "TreasureChest"
};
</script>

<style scoped lang="scss">
figure {
  width: 200px;
  height: 150px;
  margin: 30px;
  animation: shinyEffect 2s ease-in-out forwards infinite alternate;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  figcaption {
    width: 100%;
    text-align: center;
    font-size: 1.4rem;

    span {
      font-size: 2rem;
    }
  }
}

@keyframes shinyEffect {
  0% {
    background-image: radial-gradient(yellow 0%, transparent 50%);
  }
  50% {
    background-image: radial-gradient(yellow 10%, transparent 65%);
  }
  100% {
    background-image: radial-gradient(yellow 20%, transparent 80%);
  }
}
</style>
