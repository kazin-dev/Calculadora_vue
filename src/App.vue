

<script setup>
import { ref, watch } from 'vue';

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
      console.error('Operação não suportada');
  }
}

// Observa as mudanças nas variáveis e chama a função calcular
watch([numero1, numero2, operacao], () => {
  calcular();
});



</script>

<template>
  <div>
    <input type="number" v-model="numero1">
    
    <!-- Campo de seleção para escolher a operação aritmética -->
    <select v-model="operacao" @change="calcular">
      <option value="soma">+</option>
      <option value="subtracao">-</option>
      <option value="divisao"> ÷</option>
      <option value="multiplicacao">x</option>
    </select>
    
    <!-- Campo de entrada para o segundo número -->
    <input type="number" v-model="numero2">
    
    <!-- Resultado do cálculo -->
    <p>Resultado: {{ resultado }}</p>
  </div>
</template>



<style scoped></style>
