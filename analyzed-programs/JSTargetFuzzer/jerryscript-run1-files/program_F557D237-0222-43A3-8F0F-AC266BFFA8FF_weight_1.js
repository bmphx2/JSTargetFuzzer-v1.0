function F1() {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = new F1();
for (let i = 0; i < 5; i++) {
    Object.defineProperty(v3, 220, { writable: true, enumerable: true, value: -256 });
}
const v7 = [-4294967297n,-4294967297n,0n,536870889n];
const v8 = [-4294967297n,v7,536870889n];
const v9 = [0n,0n,v8,0n,v8];
function f10(a11, a12) {
    const o18 = {
        "b": a11,
        [-4294967297n](a14, a15) {
            a11 - v9;
            let v17;
            try { v17 = this.setUint16(a15, a12); } catch (e) {}
            v17[536870887] = a12;
            return this;
        },
        "c": a11,
        "h": a12,
        2: a12,
        [a12]: -4294967297n,
        ...v9,
        __proto__: v7,
        "e": a11,
        [0n]: v9,
    };
    return o18;
}
f10(536870889n, 0n);
f10(-4294967297n, 536870889n);
f10(-4294967297n, 536870889n);
[1.6422171285928056e+307,0.0,-0.0,2.36110141196571e+307,-181.8160908514501,-1000.0];
[NaN,2.220446049250313e-16,-237.17910046640918,-1.0];
[NaN,-2.220446049250313e-16];
new Int8Array(254);
new Uint16Array(128);
new Uint8Array(127);
const v36 = new Uint32Array(181);
let v38 = BigUint64Array;
let v39 = new v38(1);
let v40 = 253;
[v40,,v38,v39] = v36;
try { v38["abs"](181, v40, v38); } catch (e) {}
new Uint16Array(v40);
for (let i53 = 0; i53 < 2; i53++) {
    const v59 = new Function("x");
    v59.name;
}
Function();
