const v2 = new Int16Array(3);
const v5 = new EvalError(8);
new Float32Array(8);
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.size = this;
    this.d = 3;
    this.e = EvalError;
}
const v13 = new F9(Int16Array, 3, v2, v5);
const v14 = new F9(8, 3);
v14[65535] = v13;
try { v13.m(); } catch (e) {}
new F9(v14, 3);
const v21 = [0,-14421,9007199254740991,2,-9007199254740991];
try {
    v21.length = -2;
} catch(e22) {
}
