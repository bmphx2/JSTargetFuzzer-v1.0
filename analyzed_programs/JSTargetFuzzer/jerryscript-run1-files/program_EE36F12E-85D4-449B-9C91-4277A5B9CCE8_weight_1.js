function f0() {
}
function f1() {
    const o6 = {
        [f1]() {
            for (let v3 = 0; v3 < 32; v3++) {
                this["p" + v3] = v3;
            }
            return this;
        },
        2147483648: f0,
        "f": f0,
    };
    return o6;
}
f1();
f1();
f1();
const v15 = new ArrayBuffer(129);
new Uint8Array(v15);
[1.555844213646356e+308];
[-1e-15,1000.0];
[1.0,-199383.18297459418,1.7976931348623157e+308,6.314580215474898,-1000000.0,4.0,-1000.0,1e-15];
let v21 = 6;
const v23 = new Uint8Array(v21);
new Uint8Array(3818);
new BigInt64Array(169);
function F33(a35, a36, a37) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a35;
}
new F33(v21, Uint8Array, 128n);
new F33(169, v23, 128n);
new F33(Uint8Array, BigInt64Array, 16n);
v21 %= 3818;
function f41(a42) {
    return Uint8Array;
}
class C43 extends f41 {
    e;
    2 = v21;
    static [3818] = F33;
}
Uint8Array ^ 169;
