<script setup>

</script>

<template>
  <div>
    <!-- Campo de entrada para o primeiro número -->
    <input type="number" v-model="numero1" @input="calcularResultado">
    
    <!-- Campo de seleção para escolher a operação aritmética -->
    <select v-model="operacao" @change="calcularResultado">
      <option value="soma">+</option>
      <option value="subtracao">-</option>
      <option value="multiplicacao">*</option>
      <option value="divisao">/</option>
    </select>
    
    <!-- Campo de entrada para o segundo número -->
    <input type="number" v-model="numero2" @input="calcularResultado">
    
    <!-- Resultado do cálculo -->
    <p>Resultado: {{ resultado }}</p>
  </div>
</template>

<style scoped></style>
