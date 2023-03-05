<script setup>
const props = defineProps({
  btnData: {
    type: Object,
    default: () => {}
  }
})
</script>

<template>
  <div
    class="btn"
    :class="{ 'to-left': btnData.isBack , 'to-right':btnData.isNext}"
  >
    <div class="btn__icon">
      <span
        v-if="btnData.isBack"
        class="material-symbols-outlined"
      >
        arrow_back_ios
      </span>
    </div>
    <div>
      {{ btnData.text }}
    </div>
    <div class="btn__icon">
      <span
        v-if="btnData.isNext"
        class="material-symbols-outlined"
      >
        arrow_forward_ios
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.btn {
  display: flex;
  justify-content: center;
  align-items: center ;
  border:1px solid black;
  margin: 0.5rem 0;
  padding: 0.5rem;
  border-radius: 5px;
  box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.3);
  background-color: var(--primary);
  color:white;
  min-width: 100%;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 8px aqua
  }

  &:active {
    color:black;
    background-color: yellow;
    box-shadow: 0 0 8px yellow;
  }

  .btn__icon{
    display:flex;
    justify-content: center;
    align-items: center;

    span {
      font-size:1rem
    }
  }

  @media (min-width: 576px) {
    min-width: 120px;
  }
}

.to-left {
    padding-left:1rem;
    padding-right:3rem;
  }

  .to-right {
    padding-left:3rem;
    padding-right: 1rem;
  }
</style>
