<script setup>
import { ref, watch } from 'vue';
import Calculadora from './components/Calculadora.vue';

const numero1 = ref(0);
const numero2 = ref(0);
const resultado = ref(0);
const operacao = ref('soma');

const calcular = () => {
  switch (operacao.value) {
    case 'soma':
      resultado.value = numero1.value + numero2.value;
      break;
    case 'subtracao':
      resultado.value = numero1.value - numero2.value;
      break;
    case 'divisao':
    resultado.value = numero1.value / numero2.value;
      break;
    case 'multiplicacao':
    resultado.value = numero1.value * numero2.value;
      break;
    default:
      console.error('Ocorreu um erro');
  }
}

watch([numero1, numero2, operacao], () => {
  calcular();
});
</script>

<template>
  <h1>Calculadora Aritmética</h1>
  <div class="container">
    <Calculadora :resultad/>
  </div>
</template>



<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}



.container{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgb(235, 209, 65);
}

input, select{
  padding: 12px;
  border-radius: 10px;
  margin: 0 18px;
}

p{
  font-size: 24px;
}

</style>
