function f0() {
}
function f1() {
    const o2 = {
        "d": f0,
        8: f0,
        [f0]: f0,
        [-2]: f0,
        "a": f0,
        __proto__: f0,
        "f": f0,
        "e": f0,
        "b": f0,
        "g": f0,
        ...f0,
        ...f0,
        ...f0,
        "c": f0,
    };
    return o2;
}
const v3 = f1();
const v4 = f1();
const v5 = f1();
const v6 = [v5,v5];
[v3,v4,v4,v6,v6];
[v5,v3,v5,f1];
(-12n).toString();
let v12 = 18209n;
v12 /= -2147483649n;
new Array(255);
async function f18(a19, a20, a21) {
    const v24 = new ArrayBuffer(255);
    new Int32Array(v24);
    return a21;
}
const v29 = eval(eval);
function f30(a31, a32) {
    const o33 = {
        ...v29,
    };
    return v29;
}
const v37 = new ArrayBuffer(10);
new Int8Array(v37, 9);
f30(eval, f30());
