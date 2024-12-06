function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 50663;
    this.c = 50663;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v6 = [1e-15,-1000000.0,-1000.0,4.500438758907001e+307,1.0,-1.7976931348623157e+308];
const v7 = [-6.357265790452955];
const v8 = [536.5176351596765,-484.3258834435469,3.0];
function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = F0;
}
const v15 = new F9(v3, v4, v5, v5);
const v16 = new F9(v15, v8, v3, v3);
const v17 = new F9(v16, v16, v3, v3);
function F18(a20, a21, a22) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a21;
    this.b = v16;
    this.e = v6;
}
new F18(v17, v5, v16);
new F18(v16, v16, F0);
new F18(v4, v16, v7);
const v31 = new Array(9);
const v34 = new Uint32Array(2334);
new Uint32Array(4);
new Int16Array(129);
const v44 = `
    Uint32Array >= Uint32Array;
    let v46;
    try { v46 = v34.join(v44); } catch (e) {}
    v31[v46];
`;
function F48() {
    if (!new.target) { throw 'must be called with new'; }
}
const v50 = new F48();
with (v50) {
    const o53 = {
        valueOf() {
            this();
            return v50;
        },
    };
}
eval(v44);
