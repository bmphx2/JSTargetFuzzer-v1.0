function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 9007199254740991;
}
new F0();
new F0();
new F0();
const v15 = new Float64Array(16);
function f16(a17) {
    const o18 = {
    };
    return o18;
}
v15.findIndex(f16);
const v22 = [];
try { v22.findIndex(); } catch (e) {}
