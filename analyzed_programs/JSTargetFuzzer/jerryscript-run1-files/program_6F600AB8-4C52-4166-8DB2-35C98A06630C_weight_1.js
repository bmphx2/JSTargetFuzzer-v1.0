function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 1073741824;
    this.g = 1073741824;
}
new F0();
new F0();
new F0();
new Uint32Array(257);
new Uint8ClampedArray(3);
new Float64Array(64);
new Uint8Array(1);
const v20 = new Uint8Array(10);
function f21(a22, a23) {
    const t14 = 3;
    new t14();
    return f21;
}
new Uint8Array(1000);
new Int8Array(1024);
function f31() {
    return Uint8Array;
}
[[f31,[v20,Int8Array,1024,1024,f31],Uint8Array],Uint8Array];
function f38() {
    return Int8Array;
}
let v40 = -43723;
const v41 = 10 ** v40;
const v42 = ++v40;
-v41;
-10;
Math.asin(v42);
