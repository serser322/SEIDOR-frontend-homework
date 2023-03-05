<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useStore } from 'vuex'
import StepBar from '../../components/StepBar.vue'
import BaseCard from '../../components/BaseCard.vue'
import BaseButton from '../../components/BaseButton.vue'
import BaseLoader from '../../components/BaseLoader.vue'

// Data
const { t } = useI18n()
const cardData = computed(() => {
  return {
    title: t('common.payment'),
    description: t('step_two.description')
  }
})

const backBtnData = computed(() => {
  return {
    text: t('btn.back'),
    isBack: true,
    isNext: false
  }
})

const payBtnData = computed(() => {
  return {
    text: t('btn.pay'),
    isBack: false,
    isNext: true
  }
})

// To Back page
const router = useRouter()
const toStepOne = function () {
  router.push({ name: 'StepOne' })
}

// To next page
const store = useStore()
const loading = ref(false)

const toStepThree = async function () {
  try {
    loading.value = true
    const response = await fetch('https://run.mocky.io/v3/5fd5b0a0-7cec-4ccf-bdec-b9c99c78e29f')
    const data = await response.json()
    loading.value = false

    store.commit('setPageData', data)
    router.push({
      name: 'StepThree'
    })
  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div>
    <StepBar
      :is-step-one-finished="true"
    />
    <BaseCard :card-data="cardData">
      <template #card_content>
        <div class="info-box">
          <div class="info-box__icon">
            <img
              src="../../assets/credit_card.png"
              alt=""
            >
          </div>
          <h3>
            {{ $t('step_two.credit_card') }}
          </h3>
          <div class="info-box__description">
            {{ $t('step_two.info') }}
          </div>
          <div class="info-box__images">
            <img
              src="../../assets/mastercard.svg"
              alt=""
            >
            <img
              src="../../assets/visa.svg"
              alt=""
            >
          </div>
        </div>
      </template>
      <template #card_footer>
        <div class="base_card__footer">
          <BaseButton
            :btn-data="backBtnData"
            @click="toStepOne"
          />
          <BaseButton
            :btn-data="payBtnData"
            @click="toStepThree"
          />
        </div>
      </template>
    </BaseCard>

    <!-- Loading | Start -->
    <div
      class="loading"
      :class="{'hidden': !loading}"
    >
      <BaseLoader />
    </div>
    <!-- Loading | End -->
  </div>
</template>

<style lang="scss" scoped>
.info-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgb(195, 195, 195);
  padding: 1rem 1rem 0 1rem;

  >h3{
    margin: 0.2rem 0;
  }
  >div {
    margin:0.2rem 1rem;
  }

  .info-box__description{
    text-align: center;
  }
}

.base_card__footer {
  display: flex;
  flex-direction: column;

  @media (min-width: 576px) {
    flex-direction: row;
    justify-content: space-between;
}
}

img {
  width: 50px;
  border-radius: 4px;
}

.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  width:100%;
  height:100%;
  background-color: rgb(205, 205, 205,0.6);
  position: fixed;
  top: 0 ;
  right: 0;
  z-index: 8;
}
.hidden {
  display: none;
}

</style>
