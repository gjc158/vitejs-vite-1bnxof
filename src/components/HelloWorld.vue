<script setup lang="ts">
import { ref, computed, watch } from 'vue';

defineProps<{ msg: string }>();

const count = ref(0);
import { useUserStore } from '../store/user';

const user = useUserStore();

console.info(user.counter);

const triCounter = computed(() => {
  return user.counter * 3;
});
function reset() {
  user.$reset();
}

function setCount() {
  // user.$patch({
  //   counter: 5,
  // });
  // 相同效果
  user.$patch((state) => {
    state.counter = 5;
  });
}

function randomCounter() {
  user.randomCounter();
}
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="user.counter++">
      user.counter is {{ user.counter }}
    </button>
    <p>{{ triCounter }}</p>
    <p>double: {{ user.doubleCounter }}</p>
    <p>添加其他的值：{{ user.addOtherCounter }}</p>
    <button type="button" @click="reset">重置</button>
    <button type="button" @click="setCount(5)">设置值为5</button>
    <button type="button" @click="randomCounter">随机数</button>

    <p>--------------------------------------------------</p>
    <button type="button" @click="count++">count is {{ count }}</button>

    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
