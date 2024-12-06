function f3(a4) {
    const o18 = {
        set f(a6) {
            const v8 = Symbol.iterator;
            const o17 = {
                [v8]() {
                    let v10 = 10;
                    const o16 = {
                        next() {
                            v10--;
                            const v14 = v10 == 0;
                            const o15 = {
                                "done": v14,
                                "value": v10,
                            };
                            return o15;
                        },
                    };
                    return o16;
                },
            };
        },
    };
    return o18;
}
const v19 = f3(4096);
f3(273449077);
const v21 = f3(273449077);
[v21,15,v21,273449077];
[4096,4096];
[273449077,15,4096,v19];
new Uint8ClampedArray(5);
const v31 = Array(127);
function F32(a34, a35, a36) {
    if (!new.target) { throw 'must be called with new'; }
}
const v37 = new F32();
for (const v38 in v31) {
}
Array[7] = v37;
new Int8Array(73);
new Float64Array(0);
const v46 = new Uint32Array(181);
let v48 = BigUint64Array;
let v49 = new v48(1);
let v50 = 253;
[v50,,v48,v49] = v46;
try { v48["abs"](181, v50, v48); } catch (e) {}
new Uint16Array(Uint16Array);
for (let i63 = 0; i63 < 2; i63++) {
    const v69 = new Function("x");
    v69.name;
}
Function();
