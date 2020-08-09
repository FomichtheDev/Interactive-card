const months = [{value: 'Month', selected: true, disabled: true}];
for(let i = 1; i <= 12; i++){
    if(i > 0 && i < 10){
        months.push({
            value: '0' + i,
            selected: false,
            disabled: false
        });
    }
    else{
        months.push({
            value: i,
            selected: false,
            disabled: false
        });
    }
}

export default months;