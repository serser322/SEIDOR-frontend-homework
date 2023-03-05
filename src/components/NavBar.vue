<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

// Locale
const locale = ref('en')
onMounted(() => {
  locale.value = localStorage.getItem('locale') || 'en'
})

const i18n = useI18n()
const setLocale = function (event) {
  const locale = event.target.value
  i18n.locale.value = locale
  localStorage.setItem('locale', locale)
}

// Extend Menu
const isExtended = ref(false)
const extendMenu = function () {
  isExtended.value = !isExtended.value
}
</script>

<template>
  <!-- Web navbar | Start -->
  <nav class="nav">
    <div class="nav__group">
      <div class="nav__group-item">
        <span class="material-symbols-outlined">
          Help
        </span>
        {{ $t('common.help') }}
      </div>
      <div class="nav__group-item">
        <span class="material-symbols-outlined">
          account_circle
        </span>
        {{ $t('common.sign_in') }}
      </div>
      <div class="nav__group-item">
        <span class="material-symbols-outlined">
          flag
        </span>
        <select
          id="locale-select"
          v-model="locale"
          class="nav__group-select"
          name="locale"
          @change="setLocale"
        >
          <option value="en">
            EN
          </option>
          <option value="ch">
            CH
          </option>
        </select>
      </div>
    </div>
  </nav>
  <!-- Web navbar | End -->

  <!-- Mobile sidebar | Start-->
  <aside class="menu">
    <div
      class="menu__list"
      :class="{ 'menu-extended': isExtended }"
    >
      <div class="menu__toggle">
        <span
          class="material-symbols-outlined"
          @click="extendMenu"
        >
          keyboard_double_arrow_right
        </span>
      </div>
      <div class="menu__item">
        <span class="material-symbols-outlined">
          help
        </span>
        <span :class="{ 'hidden': !isExtended }">
          {{ $t('common.help') }}
        </span>
      </div>
      <div class="menu__item">
        <span class="material-symbols-outlined">
          account_circle
        </span>
        <div :class="{ 'hidden': !isExtended }">
          {{ $t('common.sign_in') }}
        </div>
      </div>
      <div class="menu__item">
        <span class="material-symbols-outlined">
          flag
        </span>
        <select
          id="locale-select"
          v-model="locale"
          class="nav__group-select"
          :class="{ 'hidden': !isExtended }"
          name="locale"
          @change="setLocale"
        >
          <option value="en">
            EN
          </option>
          <option value="ch">
            CH
          </option>
        </select>
      </div>
    </div>
  </aside>
  <!-- Mobile sidebar | End -->
</template>

<style lang="scss">
$nav-font-size: 1.2rem;

@mixin item-style() {
  display: flex;
  align-items: center;
  font-size: $nav-font-size;
  padding: 1rem;
  width: 10rem;

  span {
    font-size: 3rem;
    margin-right: 0.5rem;
    color: var(--secondary);
  }

  &:hover {
    cursor: pointer;
    color: var(--primary);

    span {
      color: var(--primary)
    }
  }

  &:active {
    color: yellow;

    span {
      color: yellow
    }
  }
}

.hidden {
  display: none;
}

/* Mobile sidebar style | Start */
.menu {
  display: fixed;
  min-height: 100vh;

  .menu__list {
    /* display: fixed; */
    position: fixed;
    width: 2rem;
    height: 100%;
    background-color: white;
    transition: 0.2s ease-out;

    .menu__toggle {
      display: flex;
      justify-content: end;

      :first-child {
        position: relative;
        top: 0px;
        right: -24px;
        background-color: white;

        &:hover {
          cursor: pointer;
          color: white;
          background-color: var(--primary);
        }

        &:active {
          color: black;
          background-color: yellow;
        }
      }
    }

    .menu__item {
      display: flex;
      align-items: center;

      span {
        font-size: 1.3rem;
        margin: 0.3rem;
        color: var(--secondary);
      }

      :last-child {
        font-size: $nav-font-size;
      }
    }
  }

  /* Extended */
  .menu-extended {
    position: fixed;
    z-index: 2;
    width: 10rem;

    .menu__toggle {
      :first-child {
        transform: rotate(180deg);
      }
    }

    .menu__item {
      @include item-style();
      font-size: 0.5rem;
      padding: 0.3rem;
      width: 10rem;

      :last-child {
        font-size: $nav-font-size;
      }
    }
  }

  @media (min-width: 576px) {
    display: none
  }
}
/* Mobile sidebar style | End */

/* Web navbar | Start */
.nav {
  display: none;

  @media (min-width:576px) {
    display: block;

    .nav__group {
      display: flex;
      justify-content: end;

      .nav__group-item {
        .nav__group-select {
          font-size: $nav-font-size;
        }

        @include item-style();
      }
    }
  }
}

/* Web navbar | End */
</style>
