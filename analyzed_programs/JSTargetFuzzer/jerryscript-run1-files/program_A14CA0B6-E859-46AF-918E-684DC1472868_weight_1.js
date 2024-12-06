function f0() {
}
function f1() {
    const o2 = {
        "e": f0,
        "g": f0,
        "h": f0,
        ...f0,
        "a": f0,
        "d": f0,
        __proto__: f0,
        "c": f1,
        "b": f0,
        [f0]: f0,
        "f": f0,
        255: f0,
        ...f0,
    };
    function f3(a4) {
        a4 = o2;
        return f1;
    }
    return f3(f3);
}
f1();
f1();
f1();
let v11 = 9;
const v20 = new Uint32Array(181);
let v23 = new BigUint64Array(1);
let v24 = 253;
[v24,,v11,v23] = v20;
try { BigUint64Array["abs"](181, v24, BigUint64Array); } catch (e) {}
new Uint16Array(v24);
for (let i37 = 0; i37 < 2; i37++) {
    const v43 = new Function("x");
    v43.name;
}
Function();
