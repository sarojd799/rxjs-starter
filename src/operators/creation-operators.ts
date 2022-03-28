import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import { from, of } from 'rxjs';


/**
 *  1.ajax
    2.bindCallback
    3.bindNodeCallback
    4.defer
    5.empty
    6.from
    7.fromEvent
    8.fromEventPattern
    9.generate
    10.interval
    11.of
    12.range
    13.throwError
    14.timer
    15.iif
 */

const ajaxOperator = ajax(`https://api.github.com/users?per_page=5`)
    .pipe(
        map(userResponse => console.log('users: ', userResponse)),
        catchError(error => {
            console.log('error: ', error);
            return of(error);
        })
    );

const ajaxOperatorWithPost = ajax({
    url: 'https://httpbin.org/delay/2',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'rxjs-custom-header': 'Rxjs'
    },
    body: {
        rxjs: 'Hello World!'
    }
}).pipe(
    map(userResponse => console.log('users: ', userResponse)),
    catchError(error => {
        console.log('error: ', error);
        return of(error);
    })
);


const ajaxOperatorWithError = ajax(`https://api.github.com/404`).pipe(
    map(userResponse => console.log('users: ', userResponse)),
    catchError(error => {
        console.log('error: ', error);
        return of(error);
    })
);

const ajaxOperatorJson = ajax.getJSON(`https://api.github.com/users?per_page=5`).pipe(
    map(userResponse => console.log('users: ', userResponse)),
    catchError(error => {
        console.log('error: ', error);
        return of(error);
    })
);
//-----------------------------------------------------------------//

/**
 * bindCallback: 
 * Converts a callback API to a function that returns an Observable.
 */
const bindCallbackOperator = 5;


//---------------------------------------------------------------------//

/**
 * from: from<T>(input: ObservableInput<T>, scheduler?: SchedulerLike): Observable<T>
 * description: Creates an Observable from an Array, an array-like object, a Promise, 
 * an iterable object, or an Observable-like object.
 */
const fromOperator = from([10, 20, 30]).subscribe(x => console.log(x));
function* iteratorFunction() {
    yield 1;
    yield 2;
    yield 3;
}
const fromIterator = from(iteratorFunction()).pipe(map(v => console.log(v)));

//-------------------------------------------------------------------------------//

/**
 * fromEvent: Creates an Observable that emits events of a specific type coming 
 * from the given event target.
 * Creates an Observable from DOM events, or Node.js EventEmitter events or others.
 * 
 * syntax: fromEvent<T>(target: any, eventName: string, options?: EventListenerOptions | ((...args: any[]) => T), resultSelector?: (...args: any[]) => T): Observable<T>
 */



//-------------------------------------------------------------------------------------//


/**
 * of: Converts the arguments to an observable sequence.
 * syntax: of<T>(...args: (SchedulerLike | T)[]): Observable<T>
 * 
 * desc: Each argument becomes a next notification.
 * 
 */
const ofOperator = function () {
    of(10, 20, 30).subscribe(val => console.log(val));
}











export {
    ajaxOperator,
    ajaxOperatorWithPost,
    ajaxOperatorWithError,
    ajaxOperatorJson,


    //
    fromOperator,
    fromIterator,
    ofOperator
}