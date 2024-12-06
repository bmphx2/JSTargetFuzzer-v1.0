function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 65536;
}
new F0();
const v4 = new F0();
new F0(v4, v4);
new Uint8ClampedArray(492);
const v15 = ([922012284,1073741825,-4294967297,2,536870887,9007199254740990,1068705776,-328380159]).length;
const v20 = Array(10);
function f21(a22, a23, a24, a25) {
    return Array;
}
v20.reduce(f21, "symbol");
Number["isSafeInteger"](v15);
new Int16Array(2);
const v33 = [Int16Array];
Reflect.apply(("unicode").indexOf, "unicode", v33);
5 - 4294967297;
const o40 = {
};
new Int8Array(129);
typeof -268435456n;
