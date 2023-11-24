<template>
  <div class="calendar">
    <div class='date-picker'>
      <div class='selected-date'></div>

      <div class='dates'>
        <div class='month'>
          <div class='arrows prev-mth' @click="prevMonth">&lt;</div>
          <div class='mth'>{{ currentDate.format('MMMM') }} {{ currentDate.format('YYYY') }}</div>
          <div class='arrows next-mth' @click="nextMonth">&gt;</div>
        </div>

        <div class='days'>
          <div
              class="day"
              v-for="day in daysInMonth"
              :key="day"
              @click="selectDate(day)"
              :class="{selected: isSelected(day)}"
          >{{ day }}
          </div>
        </div>
      </div>
    </div>

    <div class='time-picker'>
      <div class='hours'>
        <div
            class='hour'
            v-for="hour in 23"
            :key="hour"
            @click="selectHour(hour)"
            :class="{selected: isSelectedHour(hour)}"
        >{{ hour < 10 ? '0' + hour : hour }}
        </div>
      </div>
      <div class='dots'>:</div>
      <div class='minutes'>
        <div
            class='minute'
            v-for="minute in 59"
            :key="minute"
            @click="selectMinutes(minute)"
            :class="{selected: isSelectedMinutes(minute)}"
        >{{ minute < 10 ? '0' + minute : minute }}
        </div>
      </div>
    </div>

    <div class='set-deadline__btns'>
      <button class='set-deadline__btn cancel-btn' @click="backToMainModal">Cancel</button>
      <button class='set-deadline__btn choose-time__btn' @click="saveOption">Save</button>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  data() {
    return {
      currentDate: moment(),
      selectedDate: null,
      selectedHour: null,
      selectedMinute: null,
    }
  },
  methods: {
    selectDate(day) {
      this.selectedDate = moment(this.currentDate).date(day);
    },
    selectHour(hour) {
      console.log(hour)
      this.selectedHour = hour;
    },
    isSelectedHour(hour) {
      return this.selectedHour === hour;
    },
    selectMinutes(minute) {
      this.selectedMinute = minute;
    },
    isSelectedMinutes(minute) {
      return this.selectedMinute === minute;
    },
    isSelected(day) {
      return (
          this.selectedDate &&
          this.selectedDate.date() === day &&
          this.selectedDate.month() === this.currentDate.month()
      );
    },
    prevMonth() {
      this.currentDate = this.currentDate.clone().subtract(1, 'month');
    },
    nextMonth() {
      this.currentDate = this.currentDate.clone().add(1, 'month');
    },
    backToMainModal() {
      this.$emit('cancel');
    },
    saveOption() {
      if (!this.selectedDate && !this.selectedHour && !this.selectedMinute) return;

      this.$emit('save-date', {
        selectedDate: this.selectedDate,
        selectedHour: this.selectedHour,
        selectedMinute: this.selectedMinute,
      });
    }
  },
  computed: {
    daysInMonth() {
      const days = [];
      const daysInCurrentMonth = this.currentDate.daysInMonth();

      for (let i = 1; i <= daysInCurrentMonth; i++) {
        days.push(i);
      }
      return days;
    },
  }
}
</script>

<style scoped>

.days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  /*align-items: center;*/
  /*justify-content: center;*/
  place-items: center;
  /*height: 120px;*/
  gap: 15px;

  margin: 40px 0;
}

.day {
  cursor: pointer;
  font-size: 17px;
  color: white;
  background-color: #151515;
  /*padding: 5px;*/
  width: 50px;
  height: 50px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.day.selected {
  background-color: green;
}

.selected-date {
  text-align: center;
  font-size: 30px;
  color: #FFFFFF;
  font-weight: 700;
}

#set-time {
  background-color: #363636;
  display: flex;
  margin: 0 auto;
}

.month {
  display: flex;
  justify-content: space-between;

  font-family: 'Lato', sans-serif;
  font-size: 30px;
  color: #FFFFFF;
  font-weight: 400;

  margin: 25px 0;
}

.time-picker {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

  margin: 25px 0;
}

.hours,
.minutes {
  background-color: #151515;
  border-radius: 10px;
  height: 100px;
  width: 120px;
  overflow: auto;

  display: flex;
  align-items: center;
  flex-direction: column;

  gap: 10px;

  /* Hide the scrollbar within the container */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
}

.hours::-webkit-scrollbar,
.minutes::-webkit-scrollbar {
  /* Hide the scrollbar for Chrome, Safari, and Opera */
  display: none;
}

.hour,
.minute {
  cursor: pointer;
}

.hour,
.minute,
.dots {
  color: #FFFFFF;
  font-size: 27px;
}

.hour.selected,
.minute.selected {
  background-color: green;
}

.next-mth,
.prev-mth {
  cursor: pointer;
}

.cancel-btn {
  background-color: transparent;
  color: #8687E7;
  border: none;
  cursor: pointer;
}

.set-deadline__btns {
  display: flex;
  justify-content: space-around;
}

.choose-time__btn {
  background-color: #8687E7;
  border: none;
  border-radius: 5px;
  color: #FFFFFF;
  cursor: pointer;
}

.set-deadline__btn {
  width: 120px;
  height: 60px;
  text-transform: capitalize;
  font-size: 17px;
}

</style>