<script lang="ts" setup>
import { ref } from 'vue'


const handleClick= ref('count');
const saveClick=ref('countt');

const tuue= (val: any, val2: any, data) => {
handleClick.value= !saveClick.value


}

const falsee=(val: any, val2: any, data) => {
handleClick.value= saveClick.value

}




</script>

<template>
  <button @click="tuue(handleClick,saveClick,data) ">toggle</button>
  <button @click="falsee(handleClick,saveClick,data) ">toggle</button>

	<h1 v-if="handleClick  ">Vue is awesome!</h1>
	<input  v-else v-model="text">
</template>
