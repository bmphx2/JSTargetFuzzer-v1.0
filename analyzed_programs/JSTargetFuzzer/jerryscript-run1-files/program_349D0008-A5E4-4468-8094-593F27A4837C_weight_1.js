function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a8;
}
new F6(-12, 126604321);
const v11 = new F6(-9007199254740992, 126604321);
new F6(v11, -9007199254740992);
const v15 = Array(255);
function f16(a17, a18, a19, a20) {
    return F6;
}
Object.defineProperty(v15, 253, { get: f16, set: f16 });
