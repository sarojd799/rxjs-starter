"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.ofOperator = exports.fromIterator = exports.fromOperator = exports.ajaxOperatorJson = exports.ajaxOperatorWithError = exports.ajaxOperatorWithPost = exports.ajaxOperator = void 0;
var ajax_1 = require("rxjs/ajax");
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
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
var ajaxOperator = ajax_1.ajax("https://api.github.com/users?per_page=5")
    .pipe(operators_1.map(function (userResponse) { return console.log('users: ', userResponse); }), operators_1.catchError(function (error) {
    console.log('error: ', error);
    return rxjs_1.of(error);
}));
exports.ajaxOperator = ajaxOperator;
var ajaxOperatorWithPost = ajax_1.ajax({
    url: 'https://httpbin.org/delay/2',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'rxjs-custom-header': 'Rxjs'
    },
    body: {
        rxjs: 'Hello World!'
    }
}).pipe(operators_1.map(function (userResponse) { return console.log('users: ', userResponse); }), operators_1.catchError(function (error) {
    console.log('error: ', error);
    return rxjs_1.of(error);
}));
exports.ajaxOperatorWithPost = ajaxOperatorWithPost;
var ajaxOperatorWithError = ajax_1.ajax("https://api.github.com/404").pipe(operators_1.map(function (userResponse) { return console.log('users: ', userResponse); }), operators_1.catchError(function (error) {
    console.log('error: ', error);
    return rxjs_1.of(error);
}));
exports.ajaxOperatorWithError = ajaxOperatorWithError;
var ajaxOperatorJson = ajax_1.ajax.getJSON("https://api.github.com/users?per_page=5").pipe(operators_1.map(function (userResponse) { return console.log('users: ', userResponse); }), operators_1.catchError(function (error) {
    console.log('error: ', error);
    return rxjs_1.of(error);
}));
exports.ajaxOperatorJson = ajaxOperatorJson;
//-----------------------------------------------------------------//
/**
 * bindCallback:
 * Converts a callback API to a function that returns an Observable.
 */
var bindCallbackOperator = 5;
//---------------------------------------------------------------------//
/**
 * from: from<T>(input: ObservableInput<T>, scheduler?: SchedulerLike): Observable<T>
 * description: Creates an Observable from an Array, an array-like object, a Promise,
 * an iterable object, or an Observable-like object.
 */
var fromOperator = rxjs_1.from([10, 20, 30]).subscribe(function (x) { return console.log(x); });
exports.fromOperator = fromOperator;
function iteratorFunction() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, 1];
            case 1:
                _a.sent();
                return [4 /*yield*/, 2];
            case 2:
                _a.sent();
                return [4 /*yield*/, 3];
            case 3:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
var fromIterator = rxjs_1.from(iteratorFunction()).pipe(operators_1.map(function (v) { return console.log(v); }));
exports.fromIterator = fromIterator;
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
var ofOperator = function () {
    rxjs_1.of(10, 20, 30).subscribe(function (val) { return console.log(val); });
};
exports.ofOperator = ofOperator;
