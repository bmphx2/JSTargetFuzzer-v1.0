let v1 = Int16Array;
const v2 = new v1(149);
new Int32Array(v1);
let v9 = 183731562;
--v9;
let v11 = v9 | v9;
++v1;
v11++;
let v14 = 0.217849843387091;
Math.round(v14++);
const v18 = new Float32Array(3);
new Int16Array(1024);
function F22(a24, a25) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a24;
    this.c = a24;
    this.a = v18;
}
const v26 = new F22(1024, F22);
const v27 = [1893666078];
v26.__proto__ = v18;
for (let v28 = 0; v28 < 32; v28++) {
    v2["p" + v28] = v28;
}
with (v27) {
    function f32(a33, a34, a35) {
        return length;
    }
    f32();
}
new F22(149, v18);
new F22(1024, 1024);
function f39() {
    const o42 = {
        set d(a41) {
        },
    };
    return o42;
}
const t39 = f39();
t39.d = f39;
