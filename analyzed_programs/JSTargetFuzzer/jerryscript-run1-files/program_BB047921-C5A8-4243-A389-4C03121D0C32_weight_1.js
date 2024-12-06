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
new F6(v4);
const v10 = new F6(v5);
new F6(v3);
const v15 = [v5,v5,1e-15,v10,-3.0];
const v16 = [1e-15];
[F0,v16,v16,v15,F0];
new WeakMap();
const v25 = new Array(9);
const v28 = new Uint32Array(2334);
new Uint32Array(4);
new Int16Array(129);
function F35(a37) {
    if (!new.target) { throw 'must be called with new'; }
}
Math.sin(17986);
const v44 = `
    Uint32Array >= Uint32Array;
    let v46;
    try { v46 = v28.join(v44); } catch (e) {}
    v25[v46];
`;
("number").replace;
const v54 = new BigUint64Array();
v54.slice(129, 255);
eval(v44);
