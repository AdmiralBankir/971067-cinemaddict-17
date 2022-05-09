import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

// Функция из интернета по генерации случайного числа из диапазона
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random
const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getRandomFloat = (min = 0, max = 1) => Math.random() * (max - min + 1) + min;

const getYearFromDate = (date) => dayjs(date).format('YYYY');

const getHumanizeDurationFromMinutes = (minutes) => dayjs.duration(minutes, 'minutes').format('H[h] m[m]');

export {getRandomInteger, getRandomFloat, getYearFromDate, getHumanizeDurationFromMinutes};
