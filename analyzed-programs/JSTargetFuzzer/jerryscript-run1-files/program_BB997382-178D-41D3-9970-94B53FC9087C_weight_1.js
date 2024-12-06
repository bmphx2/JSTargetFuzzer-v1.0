function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -2147483647;
    Math.min(1.2900520431941984e+308 + 1.2900520431941984e+308);
}
const v7 = new F0();
const v8 = new F0();
const v9 = new F0();
function f10(a11, a12) {
    const o19 = {
        [F0](a14, a15, a16, a17) {
            const o18 = {
                __proto__: a16,
                ...v8,
            };
            v8.h = v9;
            a14[65537] = a11;
            return a15;
        },
        [-1]: v8,
        "e": F0,
    };
    return o19;
}
f10(v8, v9);
f10(v8, v9);
f10(v7, v8);
const v28 = new Uint32Array(181);
let v30 = BigUint64Array;
let v31 = new v30(1);
let v32 = 253;
[v32,,v30,v31] = v28;
try { v30["abs"](181, v32, v30); } catch (e) {}
new Uint16Array(v32);
for (let i45 = 0; i45 < 2; i45++) {
    const v51 = new Function("x");
    v51.name;
}
Function();
