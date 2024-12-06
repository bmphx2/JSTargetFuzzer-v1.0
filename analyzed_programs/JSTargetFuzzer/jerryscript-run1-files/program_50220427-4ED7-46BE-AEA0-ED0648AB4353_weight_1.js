function f0() {
}
function f1() {
    const o5 = {
        [f0]: f0,
        "d": f0,
        "NaN": f0,
        "c": f0,
        set b(a3) {
            [this,this,f0,f0,a3];
        },
        "a": f0,
        ...f0,
        "b": f0,
        "h": f0,
        ...f0,
        ...f0,
    };
    return o5;
}
f1();
f1();
f1();
let v20 = [-29049,-2147483647,2147483648,-261208865,0,-9,11];
let v21 = BigUint64Array;
const v22 = new v21(12, 12, 12);
const v23 = new BigInt64Array(v22);
let v24;
try { v24 = v20(v22, BigInt64Array); } catch (e) {}
({"buffer":v20,"d":v21,"g":v24,...v24} = v22);
for (let v26 = 0; v26 < 5; v26++) {
    v23["copyWithin"](v26, 12, v21);
}
Symbol(v21, Symbol) === Uint8Array;
