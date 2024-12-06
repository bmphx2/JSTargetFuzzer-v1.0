function f0() {
}
function f1() {
    const o2 = {
        [f0]: f0,
        "d": f0,
        ...f0,
        "f": f0,
        ...f0,
        "h": f0,
        "a": f0,
        "g": f0,
        "c": f0,
        "b": f0,
    };
    return o2;
}
const v3 = f1();
f1();
const v5 = f1();
function f6() {
    return v5;
}
[f0,v5,f1,f6];
const o11 = {
    get c() {
        const v9 = `
            \`A6AOe\`;
        `;
        return this;
    },
};
[[f6],f0,f0];
[-4.0,597.9572341354947,0.0];
[-9.616661614296365,-5.393775193968562,0.0,-7.810767572062898];
[697043.7483847351];
const v19 = new Uint32Array(181);
let v21 = BigUint64Array;
let v22 = new v21(v3);
let v23 = 253;
[v23,,v21,v22] = v19;
try { v21["abs"](181, v23, v21); } catch (e) {}
new Uint16Array(v23);
for (let i36 = 0; i36 < 2; i36++) {
    const v42 = new Function("x");
    v42.name;
}
Function();
