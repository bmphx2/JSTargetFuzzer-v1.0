const v1 = new WeakSet();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = v1;
    this.b = v1;
}
const v6 = new F2(F2, v1);
new F2(v1, v6);
const v8 = new F2(F2, v6);
function F15(a17, a18, a19, a20) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = WeakSet;
    this.e = a18;
}
new F15(4, 512n, 1, -256n);
new F15(1, -65537n, 7, 512n);
new F15(7, 512n, 7, -65537n);
const v25 = new Uint8Array(Uint8Array, Uint8Array, Uint8Array);
const v26 = v25.includes();
try { v1.delete(v1); } catch (e) {}
v8[255] = -256n;
v8[Symbol.unscopables];
try { v26["p"](); } catch (e) {}
