function f3() {
    return 3n;
}
class C6 {
    static [1000n] = 9007199254740990;
}
new C6();
const v8 = new C6();
new C6();
const v13 = Symbol.isConcatSpreadable;
new f3();
for (let v15 = 0; v15 < 32; v15++) {
    v8["p" + v15] = v15;
}
with (v13) {
    function F19(a21, a22, a23) {
        if (!new.target) { throw 'must be called with new'; }
    }
    new F19(description);
}
new Uint8ClampedArray(257);
new Int16Array(5);
new Uint8Array(5);
const v34 = new Int32Array(Int32Array, Int32Array, Int32Array);
v34.set(v34);
