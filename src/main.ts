import errorHandlingOperators from "./ErrorHandlingOperators";
import conditionalOperators from "./ConditionalOperators";
import mathOperators from "./MathOperators";
import { from } from "rxjs";
import { delay } from "rxjs/operators";
import SubjectModule from './Subject'

//mathOperators();  //Completed

//conditionalOperators(); //Completed

//errorHandlingOperators();


// const arrayObs = from([1, 2, 3, 4]).pipe(delay(1000));

// arrayObs.subscribe(val => console.log("value-1" + val))
// arrayObs.subscribe(val => console.log("value-2" + val))
// arrayObs.subscribe(val => console.log("value-3" + val))



SubjectModule()
