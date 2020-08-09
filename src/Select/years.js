const years = [{value: 'Year', selected: true, disabled: true}];
let currYear = new Date().getFullYear();
for(let i = 0; i < 12; i++){
    years.push({
        value: currYear,
        selected: false,
        disabled: false
    });
    currYear++
}

export default years;