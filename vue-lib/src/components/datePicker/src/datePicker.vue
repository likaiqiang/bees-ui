<template>
  <div v-click-outside="hide" style="display:inline-block">
    <ui-input ref="input" @focus="focus" readonly v-model="formatValue"></ui-input>
    <div class="ui-date-container" ref="panel" v-show="visible">
      <div class="ui-date-x">
        <div class="ui-date-head">
          <a href="javascript:" class="ui-date-prev" @click="prevMonth">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="200"
              viewBox="0 0 200 200"
            >
              <path
                d="M85.876,100.5l49.537-50.526c4.089-4.215,4.089-11.049,0-15.262 c-4.089-4.218-10.719-4.218-14.808,0L63.586,92.868c-4.089,4.215-4.089,11.049,0,15.264l57.018,58.156 c4.089,4.215,10.719,4.215,14.808,0c4.089-4.215,4.089-11.049,0-15.262L85.876,100.5z"
              ></path>
            </svg>
          </a>
          <a href="javascript:" class="ui-date-next" @click="nextMonth">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="200"
              viewBox="0 0 200 200"
            >
              <path
                d="M85.876,100.5l49.537-50.526c4.089-4.215,4.089-11.049,0-15.262 c-4.089-4.218-10.719-4.218-14.808,0L63.586,92.868c-4.089,4.215-4.089,11.049,0,15.264l57.018,58.156 c4.089,4.215,10.719,4.215,14.808,0c4.089-4.215,4.089-11.049,0-15.262L85.876,100.5z"
              ></path>
            </svg>
          </a>
          <a href="javascript:" class="ui-date-switch" @click="isShowYearMonth=true">
            <span>{{`${year}-${month}`}}</span>
            <div v-show="isShowYearMonth" class="ui-date-year-month">
              <ul>
                <li
                  v-for="(item,index) in yearMonth"
                  :key="index"
                  @click.stop="selectYearMonth(item)"
                  :class="yearMonthSelected==index?'selected':''"
                >{{`${item.year}年${item.realMonth}月`}}</li>
              </ul>
            </div>
          </a>
        </div>
        <div class="ui-day-x">
          <span class="ui-day-item">日</span>
          <span class="ui-day-item">一</span>
          <span class="ui-day-item">二</span>
          <span class="ui-day-item">三</span>
          <span class="ui-day-item">四</span>
          <span class="ui-day-item">五</span>
          <span class="ui-day-item">六</span>
        </div>
        <div class="ui-date-body">
          <a
            href="javascript:;"
            :class="['ui-date-item',selected == index ? 'selected' : '']"
            v-for="(item,index) in visibleDates"
            :key="index"
            @click="selecteDate(item,index)"
          >{{item.date}}</a>
        </div>
        <a href="javascript:;" class="ui-date-item ui-date-now" @click="now">今天</a>
      </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from "vue-click-outside";
import "@/components/input/index.js";
import Follow from "@/utils/follow.js";
import { getYearMonthDate } from "./helper.js";
export default {
  name: "ui-date-picker",
  data() {
    return {
      value: new Date(),
      visible: false,
      isShowYearMonth: false,
      isShowMinute: false
    };
  },
  created() {
    this.value = new Date();
  },
  mounted() {
    Follow(this.$refs.input.$el, this.$refs.panel);
  },
  directives: {
    ClickOutside
  },
  methods: {
    hide() {
      this.visible = false;
      this.isShowYearMonth = false
    },
    focus() {
      this.visible = true;
    },
    leftPad(n) {
      return n < 10 ? "0" + n : "" + n;
    },
    selecteDate(item, index) {
      const { year, month, date } = getYearMonthDate(this.value);
      this.value = new Date(year, month + item.monthIndex, item.date);
      this.visible = false;
    },
    prevMonth() {
      var { year, month, date } = getYearMonthDate(this.value);
      this.value = new Date(year, month - 1, date);
    },
    nextMonth() {
      var { year, month, date } = getYearMonthDate(this.value);
      this.value = new Date(year, month + 1, date);
    },
    now() {
      this.value = new Date();
    },
    selectYearMonth(item) {
      var { year, month, date } = getYearMonthDate(this.value);
      this.value = new Date(item.year, item.month, date);
      this.isShowYearMonth = false
      this.$nextTick(()=>{
        console.log(this.isShowYearMonth)
      })
    }
  },
  computed: {
    year() {
      return new Date(this.value).getFullYear();
    },
    month() {
      return this.leftPad(new Date(this.value).getMonth() + 1);
    },
    date() {
      return new Date(this.value).getDate();
    },
    selected() {
      var { date } = getYearMonthDate(this.value);
      var index = this.visibleDates.findIndex(item => {
        return item.monthIndex === 0 && item.date === date;
      });
      if (index) {
        return index;
      }
      return -1;
    },
    yearMonthSelected() {
      var { year, month, date } = getYearMonthDate(this.value);
      if (this.yearMonth && this.yearMonth.length) {
        var index = this.yearMonth.findIndex(item => {
          return item.year == year && item.month == month;
        });
        return index;
      } else return -1;
    },
    formatValue() {
      const { year, month, date } = getYearMonthDate(this.value);
      return `${year}-${this.leftPad(month + 1)}-${this.leftPad(date)}`;
    },
    visibleDates() {
      var arr = [];
      const { year, month, date } = getYearMonthDate(this.value);
      var curDate = new Date(this.value).getDate(),
        firstDay = new Date(year, month, 1).getDay(),
        lastDay = new Date(year, month + 1, 0).getDate(),
        lastMonthDates = [],
        nextMonthDates = [],
        curMonthDates = [],
        nextMonthFirstDay = new Date(year, month + 1, 1).getDay();
      for (var i = firstDay - 1; i >= 0; i--) {
        lastMonthDates.push({
          date: new Date(year, month, -i).getDate(),
          monthIndex: -1
        });
      }
      for (var i = 1; i <= lastDay; i++) {
        curMonthDates.push({
          date: new Date(year, month, i).getDate(),
          monthIndex: 0
        });
      }
      for (var i = 1; i <= 42 - lastMonthDates.length - lastDay; i++) {
        nextMonthDates.push({
          date: new Date(year, month + 1, i).getDate(),
          monthIndex: 1
        });
      }
      return [...lastMonthDates, ...curMonthDates, ...nextMonthDates];
    },
    yearMonth() {
      var arr = [];
      var { year, month, date } = getYearMonthDate(this.value);
      for (var i = 0; i < 12; i++) {
        month--;
        if (month < 0) {
          month = 11;
          year--;
        }
        arr.push({
          year,
          month,
          realMonth:this.leftPad(month+1)
        });
      }
      arr.reverse()
      var { year, month, date } = getYearMonthDate(this.value);
      arr.push({
        year,
        month,
        realMonth:this.leftPad(month+1)
      });
      
      for (var i = 0; i < 12; i++) {
        month++;
        if (month > 11) {
          month = 0;
          year++;
        }
        arr.push({
          year,
          month,
          realMonth:this.leftPad(month+1)
        });
      }
      return arr;
    },
    hourMiunte() {}
  }
};
</script>

<style>
</style>
