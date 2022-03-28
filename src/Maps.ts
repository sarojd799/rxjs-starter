import { of } from "rxjs";
import { map, mapTo } from "rxjs/operators";

//1.map: applies customization to each emitted event by observable and returns result as observable
const mapExample = () => {
    of(1, 2, 3, 4).pipe(
        map(num => num * 2)
    ).subscribe(res => console.log(res));
}

//2.mapTo: Maps each source observable to single value and returns obserable
const mapToExample = () => {
    of(1, 2, 3, 4).pipe(
        mapTo('This Value')
    ).subscribe(res => console.log(res));
}

const executor = function () {
    mapExample();
    mapToExample();
}

export default executor;