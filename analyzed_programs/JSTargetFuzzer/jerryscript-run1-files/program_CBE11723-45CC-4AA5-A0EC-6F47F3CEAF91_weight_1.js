function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -1;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v3;
    this.e = v5;
}
const v9 = new F6(v4);
const v10 = new F6(v5);
new F6(v3);
const v15 = [v5,v5,1e-15,v10,-3.0];
const v16 = [1e-15];
const v17 = [F0,v16,v16,v15,F0];
const v19 = new WeakMap();
const v25 = new Array(9);
const v28 = new Uint32Array(2334);
function F29() {
    if (!new.target) { throw 'must be called with new'; }
}
const v31 = [Infinity,0.0,0.4397360972148665,1000.0,2.2250738585072014e-308,-1000000000.0];
const o32 = {
};
const v34 = new Proxy(v31, o32);
const o35 = {
};
new Proxy(v34, o35);
try { F29(); } catch (e) {}
new Uint32Array(4);
const v43 = new Int16Array(129);
Array(129);
let v45 = v4.__proto__;
v17.e = v9;
v45 = v43;
function F47(a49) {
    if (!new.target) { throw 'must be called with new'; }
    this << this[5];
    for (let v52 = 0; v52 < 32; v52++) {
        this["p" + v52] = v52;
    }
}
Math.sin(17986);
const v61 = `
    Uint32Array >= Uint32Array;
    let v63;
    try { v63 = v28.join(v61); } catch (e) {}
    v25[v63];
`;
("number").replace;
const v71 = new BigUint64Array();
v71.slice(129, 255);
eval(v61);
v19.f;
v9.toString = Array;
