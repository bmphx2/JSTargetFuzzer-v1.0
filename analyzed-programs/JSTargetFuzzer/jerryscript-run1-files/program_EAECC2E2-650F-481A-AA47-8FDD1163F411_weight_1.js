const v1 = new Map();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a5;
    this.c = a5;
}
const v6 = new F2(F2, F2);
const v7 = new F2(v6, v1);
const v8 = new F2(v1, v6);
function F13(a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a15;
    this.c = v7;
    this.d = Map;
}
new F13(1000, v7, F13);
new F13(1000, v6);
new F13(-9223372036854775808, v8);
const v25 = new Int16Array(19);
const v28 = new Uint32Array(64);
const v31 = new Int8Array(1700);
const o32 = {
};
const v34 = new Proxy(v28, o32, Proxy, true, v31);
let v36;
try { v36 = v34["c"](Uint32Array, Uint32Array, v34, v28); } catch (e) {}
const v37 = [v36,-36134n,v36,Uint32Array];
[v34,1700,v37,v25,v37];
const v39 = [-11n];
try { v36(v39); } catch (e) {}
