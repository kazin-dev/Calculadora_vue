<script setup>
const props = defineProps(['resultado'])
</script>

<template>
    <input type="number" v-model="numero1">

    <select v-model="operacao" @change="calcular">
        <option value="soma">+</option>
        <option value="subtracao">-</option>
        <option value="divisao"> ÷</option>
        <option value="multiplicacao">x</option>
    </select>

    <input type="number" v-model="numero2">

    <p>Resultado: {{ props.resultado }}</p>
</template>