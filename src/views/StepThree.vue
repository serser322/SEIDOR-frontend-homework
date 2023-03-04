<script setup>
import StepBar from '../components/StepBar.vue'
import BaseCard from '../components/BaseCard.vue'

// Data
const cardData = {
  title: 'Order Created',
  description: ''
}
</script>

<template>
  <StepBar />
  <BaseCard
    :card-data="cardData"
  >
    <template #card_content>
      <div class="info">
        <div class="info__image">
          <img
            src="../assets/certificate.png"
            alt=""
          >
        </div>
        <div class="info__text">
          <div>Congratulations, your payment was successful.</div>
          <div>Shortly a confirmation email will arrive to your inbox</div>
        </div>
      </div>
    </template>
  </BaseCard>
</template>

<style lang="scss" scoped>

.info {
  display: flex;
  flex-direction: column;
  align-items: center;

  .info__text {
    >div {
      text-align: center;
    }
  }

  img {
  width: 50px;
  border-radius: 4px;
  margin-bottom: 1.5rem;
}
}
</style>
