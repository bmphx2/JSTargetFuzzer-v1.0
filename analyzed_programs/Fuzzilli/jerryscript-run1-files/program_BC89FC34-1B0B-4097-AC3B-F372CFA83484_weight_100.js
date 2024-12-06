function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = f0;
    this.h = f0;
}
new F1();
const v4 = new F1();
new F1();
new Int32Array(1);
new Int8Array(128);
new Uint16Array(4);
const v15 = `
    function F16(a18, a19) {
        if (!new.target) { throw 'must be called with new'; }
        this.f = 4;
    }
    const v20 = new F16(F16, v4);
    const v21 = new F16(v20, Uint16Array);
    new F16(f0, v21);
`;
eval(v15);
