function saturdayFun(string='roller-skate'){
    return `This Saturday, I want to ${string}!`
}

const mondayWork = function(activity='go to the office'){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(symbol='*'){
    return function(word='special'){
        return `You are ${symbol}${word}${symbol}!`
    }
}

const Calculator = {
    add: function(){ return 1 + 3 },
    subtract: function(){ return 1 - 3 },
    multiply: function(){ return 1 * 3 },
    divide: function(){ return 10 / 5 },
}

function actionApplyer(number, arr){
    
    for(let i = 0; i < arr.length; i++){
        number = arr[i](number)
    }
    
    return number
}