function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = f0;
    const v5 = new Uint16Array(F1);
    for (const v6 of "string") {
        ("string").codePointAt(...v5);
    }
    this.e = f0;
}
new F1();
new F1();
new F1();
new Uint32Array(3211);
new Uint8Array(2337);
new BigInt64Array(44);
new Date();
Array(Array).concat();
if (0n) {
}
