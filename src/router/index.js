import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter(
  {
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        name: 'StepOne',
        component: () => import('../views/StepOne.vue')
      },
      {
        path: '/checkout/step-2-payment',
        name: 'StepTwo',
        component: () => import('../views/StepTwo.vue')
      },
      {
        path: '/checkout/step-2-payment',
        name: 'StepThree',
        component: () => import('../views/StepThree.vue')
      }
    ]
  }
)
