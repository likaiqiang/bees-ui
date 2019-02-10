<template>
  <div v-click-outside="hide" style="display:inline-block">
    <ui-input ref="input" @focus="focus" v-model="value"></ui-input>
    <div ref="panels" class="date-picker-panels" v-show="visible">
      <div class="date-picker-years" v-if="mode=='year'">date-picker-years</div>
      <div class="date-picker-months" v-else-if="mode == 'month'">date-picker-months</div>
      <div class="date-picker-days" v-else>date-picker-days</div>
    </div>
  </div>
</template>

<script>
import ClickOutside from "vue-click-outside";
import "@/components/input/index.js";
import Follow from "@/utils/follow.js";
export default {
  name: "ui-date-picker",
  data() {
    return {
      value: "123",
      visible: false,
      mode: "year",
      time: null
    };
  },
  created() {
      this.time = new Date().getTime()
  },
  mounted() {
    Follow(this.$refs.input.$el, this.$refs.panels);
  },
  directives: {
    ClickOutside
  },
  methods: {
    hide() {
      this.visible = false;
    },
    focus() {
      this.visible = true;
    }
  },
  computed: {
    year() {
      return this.time !== null ? new Date(this.time).getFullYear() : undefined;
    },
    month() {
      return this.time !== null ? new Date(this.time).getMonth() : undefined;
    },
    date() {
      return this.time !== null ? new Date(this.time).getDate() : undefined;
    },
    dates() {
      var firstDate,
        lastDate,
        firstDay,
        arr = [],
        year = this.year,
        month = this.month,
        date = this.date
      if (
        typeof this.year !== "undefined" &&
        typeof this.month !== "undefined" &&
        typeof this.date !== "undefined"
      ) {
        firstDate = new Date(year, month, 1).getDate();
        lastDate = new Date(year, month + 1, 0).getDate();
        for (var i = firstDate; i <= lastDate; i++) {
            arr.push(i)
        }
        firstDay = new Date(year,month,1).getDay()
        for(var i=0;i<firstDay;i++){
            var d = new Date(year,month,-i).getDate()
            arr.unshift(d)
        }
        for(var i= 1;i<=42-lastDate-firstDay;i++){
            var d = new Date(year,month+1,i).getDate()
            arr.push(d)
        }
        console.log(arr)
        return arr
      }
    }
  }
};
</script>

<style>
</style>
