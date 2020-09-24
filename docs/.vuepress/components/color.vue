<template>
  <div
    class="font-color"
    :style="{color:color[type-0]}"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "color",
  props: {
    type: {
      type: String,
      default: () => {
        return "1";
      },
    },
  },
  data() {
    return {
      color: ["#409EFF", "#67C23A", "#E6A23C", "#F56C6C", "#E6A23C", "#909399"],
    };
  },
};
</script>
