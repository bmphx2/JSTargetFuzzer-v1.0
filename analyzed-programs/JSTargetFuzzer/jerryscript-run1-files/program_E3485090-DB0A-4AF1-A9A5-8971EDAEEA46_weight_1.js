function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 10000;
}
new F0();
Number.MAX_SAFE_INTEGER;
new F0();
new F0();
function f14() {
    return -9007199254740991;
}
new Uint8Array(1);
const v20 = new Uint8Array(10);
new Int8Array(1024);
function f24() {
    return Uint8Array;
}
[[f24,[v20,Int8Array,1024,1024,f24],Uint8Array],Uint8Array];
function f31() {
    return Int8Array;
}
let v33 = -43723;
const v34 = 10 ** v33;
const v35 = ++v33;
-v34;
-10;
Math.asin(v35);
