/**
 *   types: count, max, min, reduce
 */

import { from, of } from "rxjs";
import { count, max, reduce } from "rxjs/operators";

interface Person {
    age: number,
    name: string
}

//1.count:Counts the number of emissions on the source and emits that number when the source completes.
const countOperator = () => of(1, 2, 3).pipe(count()).subscribe(res => console.log("countVal: " + res))

const countWithPredicate = () => from([1, 2, 3, 4]).pipe(count(num => num % 2 == 0)).subscribe(res => {
    console.log("predicateCount: " + res)
})

//2.max: compares number of emmited events and emits one single value at the end based on comparision
const maxOperator = () => from([2, 3, 55, 1, 198]).pipe(max()).subscribe(res => console.log({ max: res }))

const maxWithComparator = () => of(
    { age: 7, name: 'Foo' },
    { age: 5, name: 'Bar' },
    { age: 9, name: 'Beer' }
).pipe(
    max(
        (a: Person, b: Person) => a.age < b.age ? -1 : 1
    ),
).subscribe(res => console.log({ oldestPerson: res.name }))

//3. min operator is same as max operator where condition would be a.age < b.age ? -1: 1 [i.e same as max]

//4.reduce: same as Array.prototype.reduce | returns value at the end

const reduceOperator = () => from([1, 2, 3, 4]).pipe(
    reduce((acc, num) => acc + num, 0)
).subscribe(res => console.log({ reduceResult: res }));



const mathOperators = function () {
    //count
    countOperator();
    countWithPredicate();

    //max
    maxOperator();
    maxWithComparator();

    //reduce
    reduceOperator()
}

export default mathOperators;