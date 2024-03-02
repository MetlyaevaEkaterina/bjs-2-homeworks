class AlarmClock {
    constructor () {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock (time, callback) {
        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        } 

        if (this.alarmCollection.find(item => item.time === time)) {
            console.warn('Уже присутствует звонок на это же время');
            return;
        }

        this.alarmCollection.push({callback, time, canCall: true});
    }

    removeClock (time) {
        let index = this.alarmCollection.findIndex(item => item.time === time);
        if (index === -1) {
            return false;
        }
        this.alarmCollection.splice(index, 1);
        return true;
    }

    getCurrentFormattedTime () {
        this.currentDate = new Date();
        return (this.currentDate.getHours() + ":" + this.currentDate.getMinutes())
    }

    start () {
        let checkClock = (alarm) => {
            if (alarm.time === getCurrentFormattedTime()) {
              alarm.callback();
              alarm.canCall = false;
            }
          }
          if (this.timerId === null) {
            this.timerId = setInterval(() => {
              this.alarmCollection.forEach(alarm => checkClock(alarm));
            }, 1000);
          }
    }

    stop () {
        if (this.timerId !== null) {
            clearInterval(this.timerId);
            this.timerId = null;
          }
    }

    resetAllCalls() {
        this.alarmCollection.forEach(alarm => alarm.canCall = true);
    }

    clearAlarms () {
        this.stop();
        this.alarmCollection = [];
    }
}