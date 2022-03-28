/**
 *  error handling operators: catchError, retry, retryWhen, onErrorResumeNext,repeat
 */

import { from, of } from "rxjs";
import { catchError, map, take } from "rxjs/operators";

//1.catchError: Catches errors on the observable to be handled by returning a new observable or throwing an error.
const catchErrorOperator = () => {
    from([1, 2, 'A']).pipe(
        map(item => {
            if (typeof item !== "number") throw 'Invalid number'
            return item;
        }),
        catchError((err, caught) => caught),
        take(3)
    ).subscribe(res => console.log("catchError result is :" + res));
}


/**
 * @description Error can be thrown from catchError can be handled at the subscribe error callback
 */
const catchErrorOperatorWithCathThrow = () => {
    from([1, 2, 'A']).pipe(
        map(item => {
            if (typeof item !== "number") throw 'Invalid number'
            return item;
        }),
        catchError((err, caught) => {
            throw err
        }),
    ).subscribe({ next: console.log, error: console.error, complete: () => console.log('completed') });
}

//2.retry: no description available in the site

//3.retryWhen

const errorHandlingOperators = function () {

    catchErrorOperator();
    catchErrorOperatorWithCathThrow();

    //Retry
}

export default errorHandlingOperators;