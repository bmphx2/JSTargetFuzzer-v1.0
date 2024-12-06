const v2 = new Array(4);
function f3() {
    return v2;
}
Object.defineProperty(Array, 512, { writable: true, enumerable: true, get: Array, set: f3 });
function f10(a11, a12) {
    const v14 = Symbol.toPrimitive;
    Array[v14] = f3;
    return v14;
}
f10(-137416.67749724188, -1488)[Symbol.toStringTag];
