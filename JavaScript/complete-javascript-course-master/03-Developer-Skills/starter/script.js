// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// Func should now receive two arrays of temps
// Can we implement same functionality on two arrays? NO! We have to merge them
/*
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    //value: Number(prompt('Degrees celsius:')),
    value: 10,
  };
  console.table(measurement);
  //console.warn(measurement.value);
  //console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(measureKelvin());

// Using a debugger
const calcTempAmpBug = function (t1, t2) {
  const temps = t1.concat(t2);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const ampBug = calcTempAmpBug([5, 3, 7], [4, 9, 1, 5]);
console.log(ampBug);

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += ` ${arr[i]}°C on day ${i + 1} ...`;
  }
  console.log('...' + str);
};
printForecast(data2);
*/
