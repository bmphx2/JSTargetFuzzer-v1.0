function f0() {
}
function f1() {
    const o12 = {
        __proto__: f0,
        [f0]() {
            new Uint16Array(205);
            new Float64Array(129);
            new Int8Array(129);
            return f0;
        },
    };
    return o12;
}
const v13 = f1();
const v14 = f1();
const v15 = f1();
function F19(a21, a22, a23, a24) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 602338320n;
    this.c = v15;
    this.e = a21;
}
EvalError();
const v27 = new F19(v13, 9223372036854775807n, 0n, v14);
const v28 = new F19(v27, 602338320n, 9223372036854775807n, v14);
new F19(v14, v28, 0n, v14);
class C30 {
    valueOf(a32, a33) {
        a33();
    }
}
let v35 = new C30();
async function f36(a37, a38) {
    ++v35;
    return f36;
}
f36();
