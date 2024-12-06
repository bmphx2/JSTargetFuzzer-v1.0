new Int32Array(3);
new BigInt64Array(1946);
new Int16Array(255);
function f9() {
    return 1946;
}
new Float64Array(12);
const v14 = [42783,-36101,10];
const v17 = Array(61);
const o18 = {
    __proto__: v17,
};
v14[o18];
new BigUint64Array(5);
new Float32Array(Float32Array);
if (0n) {
    function f39() {
        return Float32Array;
    }
    const o40 = {
        "getOwnPropertyDescriptor": f39,
        "isExtensible": f39,
        "ownKeys": f39,
        "set": Array,
    };
    new Proxy(v17, o40);
    1000n / 0n;
} else {
    const v46 = 12 + 9223372036854775807;
    const v48 = v46 >>> (9223372036854775807 % 9223372036854775807);
    Math.pow(12, v46);
    9223372036854775807 && v48;
}
const v52 = (1000n)["x"];
const v54 = Symbol.species;
const t35 = "x";
t35[v54] = 536870887n;
const t37 = 1000n;
t37[9] = 255;
let v55;
try { v55 = v54.toString(255, "x", 1073741824n); } catch (e) {}
v55 = v52;
