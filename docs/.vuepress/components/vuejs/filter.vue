<template>
    <div>
        <input v-model="message"/>
        <p>toUpperCase:{{message | capitalize}}</p>
    </div>
</template>
<script>
export default {
  data() {
    return {
      message: "john"
    };
  },
  filters: {
    capitalize: function(val) {
      if (!val) return "";
      val = val.toString();
      return val.charAt(0).toUpperCase() + val.slice(1);
    }
  }
};
</script>
