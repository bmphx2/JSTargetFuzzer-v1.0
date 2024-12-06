function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 127;
    this.e = 127;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7) {
    const o21 = {
        "f": a7,
        set b(a9) {
            const v11 = Symbol.iterator;
            const o20 = {
                [v11]() {
                    let v13 = 10;
                    const o19 = {
                        getUTCDate() {
                            v13++;
                            const v17 = v13 == 0;
                            const o18 = {
                                "done": v17,
                                "value": v13,
                            };
                            return o18;
                        },
                    };
                    return o19;
                },
            };
        },
    };
    return o21;
}
f6(v3);
const v23 = f6(v4);
f6(v3);
new BigUint64Array(16);
new Float32Array(9);
new Int32Array(1000);
new BigInt64Array(256);
const v45 = new Uint32Array(227);
new Uint16Array(129, -3, v23);
function F49(a51, a52) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a52;
}
new F49(256, 129);
new F49(v45, 227);
new F49(v45, 129);
function f56() {
}
new Uint8Array(227);
let v70 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
new Int32Array(v70);
v70 /= v70;
new WeakSet();
function f76(a77) {
    return 1.702482047949774e+308;
}
class C78 extends f76 {
    [v5];
}
new BigInt64Array(2);
const v90 = [5];
v90.reverse(BigInt64Array, v90, 1073741824);
