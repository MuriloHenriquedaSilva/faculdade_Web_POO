import {List, Stack, Queue, Deque} from './D1D2D3_Tads'

/*
let p = new Stack();

p.push(100);
p.push(80);
p.push(40);
console.log(p.top);
p.push(200);
p.push(300);
console.log(p.size);
while(!p.isEmpty()){
    console.log(`Size: ${p.size}, pop: ${p.pop()}`);
}


let f = new Queue();
f.enqueue(10);
f.enqueue(20);
f.enqueue(30);
console.log(f.first);
console.log(f.last);
while(!f.isEmpty()){
    console.log(f.dequeue())
}

console.log('--------------');
console.log("Deque:")
let d = new Deque();
d.enqueue(10);
d.enqueue(20);
d.firstEnqueue(5);
d.enqueue(30);
console.log(d.first);
console.log(d.lastDequeue());
*/

console.log("Lista");
let l = new List();
l.push(10);
l.ins(0,20);
l.push(30);
l.push(40);
l.remove(2);
l.change(2,50);
for(let i=0;i<l.size;i++){
    console.log(l.at(i));
}