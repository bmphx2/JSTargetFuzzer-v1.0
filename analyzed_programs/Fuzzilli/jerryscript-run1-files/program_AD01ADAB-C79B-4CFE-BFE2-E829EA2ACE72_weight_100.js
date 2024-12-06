const v2 = new Uint16Array(7);
const v5 = new Int8Array(6);
const v8 = new Uint8ClampedArray(1024);
function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a13;
}
const v15 = new F9(6, 6, Uint16Array, 7);
const v16 = new F9(7, 1024, v5, 6);
const v17 = new F9(1024, 7, v2, 6);
function F18(a20, a21, a22) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = v8;
    this.c = Uint16Array;
    this.b = v5;
}
const v23 = new F18(7, v17, 7);
new F18(7, v23, 7);
new F18(7, v16, 1024);
const v26 = `
    const o27 = {
    };
    new Proxy(v15, o27);
`;
eval(v26);
Int8Array & 7;
try { v8.filter(eval); } catch (e) {}
