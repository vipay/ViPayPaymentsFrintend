import {showMessage} from 'react-native-flash-message';
import moment from 'moment';

const showError = message => {
  showMessage({
    type: 'danger',
    icon: 'danger',
    message,
  });
};

const showSuccess = message => {
  showMessage({
    type: 'success',
    icon: 'success',
    message,
  });
};

export function otpTimerCounter(seconds) {
  // alert(seconds)
  let m = Math.floor(seconds / 60);
  let s = seconds % 60;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;
  return `${m}:${s}`;
}

export function momentTime(time) {
  return moment() - 60 < time / 1000 && time / 1000 < moment()
    ? 'Just now'
    : moment(time).calendar(null, {
        sameDay: '[Today]',
        nextDay: '[Tomorrow]',
        nextWeek: 'dddd',
        lastDay: '[Yesterday]',
        lastWeek: '[Last] dddd',
        sameElse: 'DD/MM/YYYY',
      }) == 'Yesterday'
    ? 'Yesterday'
    : moment() - 86400 < time / 1000 && time / 1000 < moment()
    ? moment(time)
        .fromNow()
        .replace('hours', 'hrs')
        .replace('minute', 'min')
        .replace('minutes', 'mins')
        .replace('hour', 'hr')
    : moment(time / 1000).format('DD MMM, YYYY');
}

export {showError, showSuccess};
