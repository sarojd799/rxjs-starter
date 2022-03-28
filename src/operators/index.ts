/**
 * RxJS is mostly useful for its operators, even though the Observable is the foundation. 
 * Operators are the essential pieces that allow complex asynchronous code to be easily composed 
 * in a declarative manner.
 */

import { of } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { ajax } from 'rxjs/ajax';


/**
 * PIPE Operator
 * A Pipeable Operator is a function that takes an Observable as its input and returns another 
 * Observable.  It is a pure operation: the previous Observable stays unmodified.
 * 
 *  syntax: operator()(observable instance)
 *  op4()(op3()(op2()(op1()(obs)))) chaining would become complicated syntax
 *  so pipe operator was introduced
 */


//There are operators for different purposes, and they may be categorized as: creation, 
//transformation, filtering, joining, multicasting, error handling, utility, etc



/**
 * Creation Operators
 * Creation Operators are the other kind of operator, which can be called as standalone 
 * functions to create a new Observable. For example: of(1, 2, 3) creates an observable 
 * that will emit 1, 2, and 3, one right after another. Creation operators will be discussed 
 * in more detail in a later section.
 */
const creationOperators = function () {

    this.ajaxOperator = ajax(`https://api.github.com/users?per_page=5`)
        .pipe(
            map(userResponse => console.log('users: ', userResponse)),
            catchError(error => {
                console.log('error: ', error);
                return of(error);
            })
        );
}


export {
    creationOperators
}