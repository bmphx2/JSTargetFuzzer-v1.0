function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = -1000000000000.0;
}
new F9(-1000000000000.0, 512n, 0.19993158945463918, -1000000000000.0);
const v16 = new F9(-1000000.0, 512n, -1000000.0, 2n);
new F9(-1000000.0, 2n, 472349.1103984455, v16, v16, F9, -37120n);
function F18() {
    if (!new.target) { throw 'must be called with new'; }
}
let v20 = new F18();
const v22 = new Int32Array(v20);
v22.__proto__ = v20;
v20 /= v22;
