"use strict";

const money = +prompt("Ваш бюджет на месяц? ", ""),
      time = prompt( "Введите дату в формате YYYY-MM-DD: ", " ");

const appData = {
  budget: money,
  timeData: time,
  expenses:{},
  optionalExpenses: null,
  income: [],
  savings: false,
};

for ( let i = 0; i < 2; i++) {
    const a = prompt('Введите обязательную статью расходов в этом месяце'),
          b = prompt('Во сколько обойдется?');

    if( (typeof(a)) === 'string' &&
        (typeof(a)) != null &&
        a.length < 50 &&
        (typeof(b)) != null &&
        a != '' &&
        b!= '' ) {

          console.log('Done');
          appData.expenses[a] = b;
    } else {
      console.log('bad result');
      i--;
    }

};


// WHILE result

// let i = 0;
// while(i < 2) {
//   i++;
//   const a = prompt('Введите обязательную статью расходов в этом месяце'),
//   b = prompt('Во сколько обойдется?');

//   if( (typeof(a)) === 'string' &&
//   (typeof(a)) != null &&
//   a.length < 50 &&
//   (typeof(b)) != null &&
//   a != '' &&
//   b!= '' ) {

//     console.log('Done');
//     appData.expenses[a] = b;
//         } else {
//       console.log('bad result');
//       i--;
//     }
// }


// DO...WHILE result

// do {
//   i++;
//     const a = prompt('Введите обязательную статью расходов в этом месяце'),
//     b = prompt('Во сколько обойдется?');

//     if( (typeof(a)) === 'string' &&
//     (typeof(a)) != null &&
//     a.length < 50 &&
//     (typeof(b)) != null &&
//     a != '' &&
//     b!= '' ) {

//       console.log('Done');
//       appData.expenses[a] = b;
//           } else {
//         console.log('bad result');
//         i--;
//       }
// } while (i < 2);

appData.moneyPerDay = appData.budget / 30;

alert(`Daily budget: ${appData.moneyPerDay}`);

if(appData.moneyPerDay < 100) {
    console.log('Minimum level budget');
} else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('Middle level budget');
} else if (appData.moneyPerDay > 2000) {
    console.log("Big level budget");
} else {
    console.log('Error');
}

