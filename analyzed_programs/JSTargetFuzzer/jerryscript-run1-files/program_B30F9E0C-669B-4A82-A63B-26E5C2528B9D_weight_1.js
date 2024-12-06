const v1 = new Set();
function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = v1;
    this.h = Set;
    this.d = a4;
}
const v5 = new F2(Set);
const v6 = new F2(v5);
const v7 = new F2(Set);
function F8(a10, a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = v5;
    this.e = a11;
}
new F8(v5, v6, v6);
new F8(v6, v7, v5);
const v15 = new F8(v7, v5, v7);
ArrayBuffer.isView();
const o22 = {
    p() {
        8 == 8;
        return 8;
    },
};
new Int32Array(1);
new Float32Array(0);
const v30 = new F2(Uint32Array);
try { v15.isFrozen(v30, v7, v5, v30); } catch (e) {}
new Int32Array(128);
new Int8Array(45);
new Uint8Array(9);
new Uint32Array(129);
new WeakSet();
const v59 = new URIError(512);
const v62 = new Int16Array(447);
new Uint32Array(2438);
function f69() {
}
const v72 = new Uint8ClampedArray();
try { v72["set"](4096, 1073741823, ...v72, ...1073741823); } catch (e) {}
v59.description <<= 2006448021;
const v83 = [2.18153526798858e+307,9.245044997359844e+307,0.6298892241869216,-Infinity,1e-15,-3.0,3.0,-8.981213181280584,765.4359017770823];
("1073741824").match(v83.copyWithin(v83, v83));
new Uint8Array(0);
let v94 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
const v96 = new BigUint64Array(127);
v94 /= v96;
new WeakSet();
new BigInt64Array(2, -14, v62);
([5]).reverse();
