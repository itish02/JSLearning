'strict mode'
const budget = Object.freeze([
    { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
    { value: -45, description: 'Groceries 🥑', user: 'jonas' },
    { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
    { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
    { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
    { value: -20, description: 'Candy 🍭', user: 'matilda' },
    { value: -125, description: 'Toys 🚂', user: 'matilda' },
    { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

const checkLimit = (limits, user) => limits?.[user] ?? 0;

const spendingLimits = Object.freeze({
    jonas: 1000,
    matilda: 100,
});

spendingLimits.jay = 500;
console.log(spendingLimits);

const addExpense = function(
    state,
    limits,
    value,
    description,
    user = 'jonas'
) {
    // if (!user) user = 'jonas';
    const cleanUser = user.toLowerCase();
    // const limit = checkLimit(user);
    // if (limits[user]) {
    //   lim = limits[user];
    // } else {
    //   lim = 0;
    // }

    return (value <= checkLimit(limits, cleanUser)) ? [...state, { value: -value, description, user: cleanUser }] : state;
    // budget.push({ value: -value, description, user: cleanUser });

};
const newBudget1 = addExpense(budget, spendingLimits, 10, 'pizza 🍕');
const newBudget2 = addExpense(newBudget1, spendingLimits, 10, 'Going to movies 🍿', 'Matilda');
const newBudget3 = addExpense(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');
// console.log(newBudget1);
// console.log(newBudget2);

// const checkExpenses = function(state, limits) {
//   return state.map(entry => {
//     return entry.value < -checkLimit(limits, entry.user) ? {...entry, flag: 'limit'} : entry;
//   }); 
// };

const checkExpenses = (state, limits) => {
    state.map(entry => entry.value < -checkLimit(limits, entry.user) ? {...entry, flag: 'limit' } : entry);
};

const finalBudget = checkExpenses(newBudget3, spendingLimits);
console.log(finalBudget);

// console.log(budget);

const bigExpenses = function(spendingLimit) {
    let output = '';
    for (let entry of budget)
        output +=
        entry.value <= -spendingLimit ? `${entry.description.slice(-2)} / ` : '' // Emojis are 2 chars

    output = output.slice(0, -2); // Remove last '/ '
    console.log(output);
};

bigExpenses(100);