function f3(a4) {
    const o19 = {
        set h(a6) {
            const v8 = new WeakSet();
            for (let v15 = 0; v15 < 32; v15++) {
                const v17 = "p" + v15;
                Object.defineProperty("p", -1, { writable: true, get: f3 });
                v8[255] = -2;
                function f18() {
                    return v15;
                }
                a4[v17] = v15;
            }
        },
        "d": 1000,
        "c": 6,
        13: 3,
    };
    return a4;
}
const v20 = f3(3);
f3(6);
const v22 = f3(1000);
v22.e = v20;
v20[2] >>>= v20;
NaN ** 1000;
const v29 = new Map();
v29 >>> v22;
[-10036,-886754510,1439244396,423174159,1073741825,4,-43508,-3,2];
[46071129,23580603,1073741824,268435441,9167,2,16];
[4096,-60147,1073741823,2147483649,-15,268435439,-45816];
const v36 = -2 << -2;
v36 / -2;
v36 || -2;
const v40 = new Uint32Array(v22);
let v42 = BigUint64Array;
let v43 = new v42(1);
let v44 = 253;
[v44,,v42,v43] = v40;
try { v42["abs"](181, v44, v42); } catch (e) {}
const v51 = new Uint16Array(v44);
for (let i57 = 0; i57 < 2; i57++) {
    const v63 = new Function("x");
    v63.name;
}
const v66 = [];
Reflect.apply(("x").trimLeft, Math, v66);
v51[Symbol.isConcatSpreadable];
Function();
