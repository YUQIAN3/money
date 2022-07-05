<template>
      <layout class-prefix="layout">
        <NumberPad/>
        <Type/>
        <Notes/>
        <Tags/>
      </layout>
</template>
<script>
import NumberPad from '@/components/Money/NumberPad';
import Type from '@/components/Money/Types';
import Tags from '@/components/Money/Tags';
import Notes from '@/components/Money/Notes';
export default {
  name: "Money",
  components: {Notes, Tags, Type, NumberPad},
};
</script>
<style lang="scss">
.layout-content{
  display: flex;
  flex-direction: column-reverse;
}
</style>
