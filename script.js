let money, time;

const start = () => {

    money = +prompt("Ваш бюджет на месяц? ", "");
    time = prompt( "Введите дату в формате YYYY-MM-DD: ", " ");

    while(isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц? ", "");
    }
}

start();

const appData = {
  budget: money,
  timeData: time,
  expenses:{},
  optionalExpenses: null,
  income: [],
  savings: true,
};

const chooseExpenses = () => {

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
};

chooseExpenses();

const  detectDayBudget = () => {

    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert(`Daily budget: ${appData.moneyPerDay}`);
}

detectDayBudget();

const detectLevel = () => {

    if(appData.moneyPerDay < 100) {
        console.log('Minimum level budget');
    } else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log('Middle level budget');
    } else if (appData.moneyPerDay > 2000) {
        console.log("Big level budget");
    } else {
        console.log('Error');
    }
}

detectLevel();

const checkSavings = () => {

    if( appData.savings == true) {
        let save = +prompt("How much summ saving?"),
            percent = +prompt("How much percent?");

            appData.monthIncome = save/100/12*percent;
            alert("Budget in month from your deposit: " + appData.monthIncome);
        }
}

checkSavings();

const chooseOptExpenses = () => {

    for (let i = 1; i <= 3; i ++){
        let optExp = prompt("Opt expenses ? ");
        appData.optionalExpenses[i] = optExp;
        console.log(appData.optionalExpenses);
    }
}

chooseOptExpenses();