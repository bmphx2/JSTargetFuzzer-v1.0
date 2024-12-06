function f3() {
    return -268435456;
}
function F6() {
    if (!new.target) { throw 'must be called with new'; }
}
const v8 = new F6();
const o11 = {
    valueOf() {
        this();
        return v8;
    },
};
const v13 = [-268435456,9223372036854775807,6,33477,57157036];
const v14 = [v13,9223372036854775807,f3,257];
[57157036,-268435456,-268435456,v14,v14];
function f16() {
    return v13;
}
const v19 = new BigInt64Array(13);
new Uint32Array(256);
new Float32Array(1591);
const v28 = new Uint32Array(181);
let v30 = BigUint64Array;
let v31 = new v30(1, v14, v19);
let v32 = 253;
[v32,,v30,v31] = v28;
try { v30["abs"](181, v32, v30); } catch (e) {}
new Uint16Array(v32);
for (let i45 = 0;
    (() => {
        const o47 = {
        };
        const v49 = new Int8Array(Int32Array, o47);
        const v50 = v49.__proto__;
        try { new v50(); } catch (e) {}
        return i45 < 2;
    })();
    i45++) {
    const v57 = new Function("x");
    v57.f;
}
Function();
