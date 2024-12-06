const v2 = new Array(0);
function f3(a4, a5) {
    const o10 = {
        ...a4,
        "a": v2,
        [a4](a7, a8) {
            try { new a5(this, a5, Array, a5); } catch (e) {}
            return v2;
        },
        4294967296: a4,
        "f": a5,
        "e": v2,
        "d": a5,
        "h": v2,
        "g": Array,
    };
    return o10;
}
const v11 = f3(0, Array);
const v12 = f3(v11, 0);
const v13 = f3(Array, v12);
class C17 extends Array {
    static valueOf(a19, a20) {
        a20.b = a20;
        v13.f = v11;
        a19 += v12;
        Array[9.305953032208805] = this;
        return Array;
    }
    static [-2];
    [Array] = Array;
    static #d;
    #a = v13;
    static d;
}
new C17();
let v22 = new C17();
const v23 = new C17();
const v24 = v23[2593539584];
const v25 = [9.305953032208805,-2.0,v24,v11,C17];
[v22,[9.305953032208805,v24,v24],0,0,v25];
v22--;
const o29 = {
    "call": f3,
    "defineProperty": f3,
    "isExtensible": f3,
    "setPrototypeOf": Array,
};
new Proxy(v2, o29);
