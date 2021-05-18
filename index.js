function mapToNegativize(array){
    let new_arr = []
    array.forEach(a => new_arr.push(a*-1))
    return new_arr
}

function mapToNoChange(array){
    let new_arr = []
    array.forEach(a => new_arr.push(a))
    return new_arr 
}

function mapToDouble(array){
    let new_arr = []
    array.forEach(a => new_arr.push(a*2))
    return new_arr 
}

function mapToSquare(array){
    let new_arr = []
    array.forEach(a => new_arr.push(a*a))
    return new_arr 
}

function reduceToTotal(sourceArray, startingPoint=0){
    let total = startingPoint
    sourceArray.forEach(a => total+=a)
    return total
}

function reduceToAllTrue(sourceArray){
    let value = true 
    for(let item of sourceArray){
        if (item === false){
            value = false 
        }
    }
    return value 
}

function reduceToAnyTrue(sourceArray){
    let value = false 
    for(let item of sourceArray){
        if (item === true){
            value = true
        }
    }
    return value
}