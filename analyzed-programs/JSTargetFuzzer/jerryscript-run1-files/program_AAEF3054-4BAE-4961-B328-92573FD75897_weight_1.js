function f1() {
    return arguments;
}
const v3 = f1();
function f4() {
    const o5 = {
        ...v3,
    };
    return o5;
}
const v6 = f4();
const v7 = f4();
const v9 = new Uint16Array(195);
const v12 = new Int32Array(1224);
let v14 = v12[v9];
const o15 = {
    "apply": f1,
    "defineProperty": f4,
    "deleteProperty": f1,
    "getOwnPropertyDescriptor": f4,
    "preventExtensions": f1,
    "set": f4,
    "setPrototypeOf": f1,
    "c": f4,
    __proto__: v6,
    "b": f4,
    307: 10,
    ...v7,
};
new Proxy(v3, o15);
new Int32Array(10);
Promise.all();
f4 = Uint16Array;
const v24 = v9.buffer;
v3.callee /= 10;
[Int32Array,Uint16Array,Int32Array];
[v14];
[Uint16Array];
let v31 = f1 & Int32Array;
v24.byteLength &= v31;
v14 += Uint16Array;
const v35 = [String];
v31--;
const o40 = {
};
new Proxy(v3, o40);
Reflect.apply(String.raw, String, v35);
