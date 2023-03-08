import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter(
  {
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        redirect: '/checkout'
      },
      {
        path: '/checkout',
        name: 'Index',
        component: () => import('../views/index.vue'),
        redirect: '/checkout/step-1-my-data',
        children: [
          {
            path: 'step-1-my-data',
            name: 'StepOne',
            meta: {
              title: 'Step 1 | My Data'
            },
            component: () => import('../views/components/StepOne.vue')
          },
          {
            path: 'step-2-payment',
            name: 'StepTwo',
            meta: {
              title: 'Step 2 | Payment'
            },
            component: () => import('../views/components/StepTwo.vue')
          },
          {
            path: 'step-3-order-confirmation',
            name: 'StepThree',
            meta: {
              title: 'Step 3 | Order Created'
            },
            component: () => import('../views/components/StepThree.vue'),
            props: true
          }
        ]
      },
      {
        path: '/:catchAll(.*)',
        redirect: 'checkout'
      }
    ]
  }
)

router.afterEach((to, from) => {
  document.title = to.meta.title
})
