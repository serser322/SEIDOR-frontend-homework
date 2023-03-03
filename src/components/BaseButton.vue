<script setup>

</script>

<template>
  <div class="btn">
    <div class="btn__icon">
      <span class="material-symbols-outlined">
        arrow_back_ios
      </span>
    </div>
    <div>
      Continue
    </div>
    <div class="btn__icon">
      <span class="material-symbols-outlined">
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
  margin: 1rem;
  padding: 0.5rem;
  font-size: 1.5rem;
  border-radius: 5px;
  box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.3);
  box-sizing: border-box;

  &:hover {
    cursor: pointer;
    border: 5px solid orange
  }

  .btn__icon{
    display:flex;
    justify-content: center;
    align-items: center;

    span {
      font-size:1rem
    }
  }
}
</style>
