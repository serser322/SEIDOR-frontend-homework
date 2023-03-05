<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import StepBar from '../../components/StepBar.vue'
import BaseCard from '../../components/BaseCard.vue'

// Data
const { t } = useI18n()
const cardData = computed(() => {
  return {
    title: t('common.order_created')
  }
})
// const cardData = {
//   title: t('common.order_created')
// }
</script>

<template>
  <div>
    <StepBar
      :is-step-one-finished="true"
      :is-step-two-finished="true"
    />
    <BaseCard
      :card-data="cardData"
    >
      <template #card_content>
        <div class="info">
          <div class="info__image">
            <img
              src="../../assets/certificate.png"
              alt=""
            >
          </div>
          <div class="info__text">
            <div>{{ $t('step_three.info_1') }}</div>
            <div>{{ $t('step_three.info_2') }}</div>
          </div>
        </div>
      </template>
    </BaseCard>
  </div>
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
