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
    const v14 = [Date,Date];
    class C15 extends f0 {
    }
    for (let i18 = -13, i19 = 10; i18 < i19;) {
        ({"f":i19,"length":i18,...C15} = v14);
    }
    return o12;
}
const v25 = f1();
const v26 = f1();
const v27 = f1();
function F31(a33, a34, a35, a36) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 602338320n;
    this.c = v27;
    this.e = a33;
}
function f37(a38, a39, a40, a41) {
    return 0n;
}
const v45 = f37(v27, 9223372036854775807n, v25, v27);
EvalError();
const v48 = new F31(v25, 9223372036854775807n, 0n, v26);
try { v27.o(v45, v25, v48); } catch (e) {}
const v56 = new F31(v48, 602338320n, 9223372036854775807n, v26);
new F31(v26, v56, 0n, v26);
class C58 {
    valueOf(a60, a61) {
        a61();
    }
}
let v63 = new C58();
async function f64(a65, a66) {
    ++v63;
    return f64;
}
f64();
