new Int32Array(5);
new Uint16Array(4);
new Uint8ClampedArray(1000);
try {
    let v17 = 9007199254740990;
    let v18 = -2147483648;
    Math.imul(v17, v18);
    const v21 = ++v17;
    v21 / v18;
    ++v18;
    v21 - v18;
    !v21;
    -2147483649n & 1073741825;
} catch(e28) {
} finally {
}
const v29 = [-9223372036854775807,2,268435439,0,0,55990];
const o31 = {
    "has": Array,
};
const v33 = new Proxy(v29, o31);
Array in v33;
