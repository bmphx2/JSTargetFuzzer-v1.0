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
("-1604200484").replaceAll(("-1604200484").__proto__);
function F34(a36, a37, a38, a39) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 602338320n;
    this.c = v27;
    this.e = a36;
}
function f40(a41, a42, a43, a44) {
    return 0n;
}
const v48 = f40(v27, 9223372036854775807n, v25, v27);
EvalError();
const v51 = new F34(v25, 9223372036854775807n, 0n, v26);
try { v27.o(v48, v25, v51); } catch (e) {}
const v59 = new F34(v51, 602338320n, 9223372036854775807n, v26);
new F34(v26, v59, 0n, v26);
class C61 {
    valueOf(a63, a64) {
        a64();
    }
}
let v66 = new C61();
async function f67(a68, a69) {
    ++v66;
    return f67;
}
f67();
