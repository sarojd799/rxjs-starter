/**
 * Conditional and Boolean Operators
 * defaultIfEmpty,every,find,findIndex,isEmpty
 */

import { from, of } from "rxjs"
import { defaultIfEmpty, every, find, findIndex, isEmpty, mapTo } from "rxjs/operators"

//1.defaultIfEmpty: if source obseravble completes without any value
const defaultIfEmptyOperator = () => {
    from([]).pipe(defaultIfEmpty('OOPS')).subscribe(res => {
        console.log("res is :" + res)
    })
}

//2.every: handles predicate for each emitted value and returns boolean observable
const everyOperator = () => of(1, 2, 3, 4, 5, 6).pipe(
    every(x => x < 5),
).subscribe(res => console.log("result of every match is " + res))

//3.find: finds match from emitted values and returns the single matched result as observable (value | undefined)
const findOperator = () => of(1, 2, 3, 4, 5, 6).pipe(
    find(num => num > 0)
).subscribe(res => console.log("so find operator result is :" + res))

//4.findIndex: finds the index from predicate result and returns it as observable (index | -1)
const findIndexOperator = () => {
    of(1, 2, 3, 4, 5).pipe(
        findIndex(num => num % 15 === 0),
    ).subscribe(res => console.log("Number divisible by 5 is at index :" + res))
}

//5.isEmpty: To check if the observable is empty returns boolean observable as result
const isEmptyOperator = () => {
    from([]).pipe(
        isEmpty()
    ).subscribe(res => console.log("if empty :" + res))
}


const conditionalOperators = function () {

    defaultIfEmptyOperator();
    everyOperator();
    findOperator();
    findIndexOperator();
    isEmptyOperator();
}

export default conditionalOperators;