function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 127;
    this.e = 127;
    this.a = 127;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a12;
    this.g = v3;
}
const v13 = new F9(v4, v4);
new F9(v3, v3);
const v15 = new F9(v5, v4);
[-9007199254740991,[v15,v4],v13,1003794187];
[v15,v3,v13];
function f19() {
    return v3;
}
const v25 = new Array(9);
const v28 = new Uint32Array(2334);
new Uint32Array(4);
const v34 = new Int16Array(129);
const v38 = `
    Uint32Array >= Uint32Array;
    let v40;
    try { v40 = v28.join(v38, v34); } catch (e) {}
    v25[v40];
`;
eval(v38);
