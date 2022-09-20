<template>
<button @click="onClick" class="button">
  <slot></slot>
   <button v-if="props.type == 'scroll'" class="scroll" />
</button>
</template>

<script setup>
const props = defineProps({
    type: {
        type: String,
        default: 'button'
    },
    disabled: {
        type: Boolean,
        default: false
    }
})

const onClick = () => {
    if(props.type == 'scroll'){
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        })
    }

    if(props.type == 'quiz'){
        //quiz logic here
    }
}
</script>

<style scoped lang='scss'>
    .button{
      border: 2px solid black;
      border-radius: 4px;
      padding: 10px 15px;
      background-color: white;
      font-family: 'Apercu';
      font-weight: bold;
      font-size: 18px;
      cursor: pointer;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
        &:hover{
            background-color: #F5F5F5;
        }
        
    }

    .scroll{
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background: url(assets/scrollButtonArrow.svg) no-repeat center;
        cursor: pointer;
    }
</style>