function f0() {
}
function f1() {
    return f0;
}
function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a4;
    this.d = f1;
    this.c = a4;
}
const v5 = new F2(F2);
const v6 = new F2(v5);
new F2(f1);
try { v6.exp(f0, v5, 268435440n, -11); } catch (e) {}
const v16 = Symbol.iterator;
const o25 = {
    [v16]() {
        let v18 = 10;
        const o24 = {
            next() {
                v18--;
                const v22 = v18 == 0;
                const o23 = {
                    "done": v22,
                    "value": v18,
                };
                return o23;
            },
        };
        return o24;
    },
};
new Int16Array(149);
const v31 = new Int32Array(Int16Array);
let v33 = 0.217849843387091;
Math.round(v33++);
const v37 = new Float32Array(3);
new Int16Array(1024);
function F41(a43, a44) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a43;
    this.c = a43;
    this.a = v37;
}
new F41(1024, F41);
with ([1893666078]) {
    function f48(a49, a50, a51) {
        return length;
    }
    f48();
}
new F41(149, v37);
new F41(1024, 1024);
function f55() {
    const o58 = {
        set d(a57) {
        },
    };
    try { v31.keys(); } catch (e) {}
    let v65 = 1073741824;
    let v66 = +f55;
    --f55;
    -F41;
    --v66;
    v65--;
    Math.abs(v66);
    return o58;
}
const t69 = f55();
t69.d = f55;
