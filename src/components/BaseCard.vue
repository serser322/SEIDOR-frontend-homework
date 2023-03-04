<script setup>
const props = defineProps({
  cardData: {
    type: Object,
    default: () => {}
  }

})

</script>

<template>
  <div class="card">
    <h1>{{ cardData.title }}</h1>
    <div class="card__description">
      {{ cardData.description }}
    </div>
    <div class="card__content">
      <slot name="card_content" />
    </div>
    <div class="card__footer">
      <slot name="card_footer" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 50rem;
  height: 25rem;
  border: 2px solid black;
  box-shadow: 3px 3px 0px rgba(0, 0, 0, 0.3);
  background-color: white;

  .card__content,
  .card__footer {
    width: 50%;
  }
}


</style>
