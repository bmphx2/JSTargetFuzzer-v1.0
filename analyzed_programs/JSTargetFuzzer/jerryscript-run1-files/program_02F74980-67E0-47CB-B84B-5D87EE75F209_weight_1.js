function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = f0;
}
new F1();
new F1();
new F1();
new BigInt64Array(171);
new Float32Array(14);
new Float32Array(240);
const o15 = {
};
const t14 = o15.constructor;
t14();
