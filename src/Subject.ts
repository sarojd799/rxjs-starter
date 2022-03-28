import { BehaviorSubject, ReplaySubject, Subject, AsyncSubject } from 'rxjs';


export default function SubjectModule() {

    //a special type of observable that multicasts values to diff observers

    console.log("subj")

    // const subject = new Subject<number>();
    // subject.subscribe(v => console.log(`subject observer-A:  ${v}`))
    // subject.subscribe(v => console.log(`subject observer-B: ${v}`))
    // subject.next(1);
    // subject.next(2)

    /*
       There are also a few specializations of the Subject type: 
       1.BehaviorSubject, 
       2.ReplaySubject, 
       3.AsyncSubject
    */



    // console.log("step-1");
    // setTimeout(() => console.log("step-2")) //macro-task
    // Promise.resolve().then(() => console.log("step-3")) //micro-task


    //ex-3 where second subscriber doesn't get any notifications
    // const subject = new Subject<number>()
    // subject.subscribe(v => console.log(`subject observer-A:  ${v}`))
    // subject.next(1);
    // subject.next(2)
    // subject.subscribe(v => console.log(`subject observer-B: ${v}`))

    // const behaviorSub = new BehaviorSubject<number>(0);
    // behaviorSub.subscribe(v => console.log(`subject observer-A:  ${v}`))
    // behaviorSub.next(1);
    // behaviorSub.next(2)
    // behaviorSub.subscribe(v => console.log(`subject observer-B: ${v}`))

    // output:
    // subject observer - A: 0
    // Subject.ts: 38 subject observer - A: 1
    // Subject.ts: 38 subject observer - A: 2
    // Subject.ts: 41 subject observer - B: 2

    //when ever a subscriber subscribes to behavior subject then it will receive its latest value



    //reply subject uses buffer to store emitted value and replys them for the newly connected subscriber
    // const replySubject = new ReplaySubject(3);// 3 is the buffer size

    // replySubject.subscribe(v => console.log(`subscriber-A :${v}`))

    // replySubject.next(1);
    // replySubject.next(2);
    // replySubject.next(3);
    // replySubject.next(4);

    // replySubject.subscribe(v => console.log(`subscriber-B :${v}`))

    // replySubject.next(5);

    /**
     * output:
     *  subscriber-A :1
        Subject.ts:56 subscriber-A :2
        Subject.ts:56 subscriber-A :3
        Subject.ts:56 subscriber-A :4
        Subject.ts:63 subscriber-B :2
        Subject.ts:63 subscriber-B :3
        Subject.ts:63 subscriber-B :4
        Subject.ts:56 subscriber-A :5
        Subject.ts:63 subscriber-B :5
     */



    const subject = new AsyncSubject();

    subject.subscribe({
        next: (v) => console.log(`observerA: ${v}`)
    });

    subject.next(1);
    subject.next(2);
    subject.next(3);
    subject.next(4);

    subject.subscribe({
        next: (v) => console.log(`observerB: ${v}`)
    });

    subject.next(5);
    //subject.complete();
    //The AsyncSubject is similar to the last() operator, in that it waits for the complete notification in order to deliver a single value.
}