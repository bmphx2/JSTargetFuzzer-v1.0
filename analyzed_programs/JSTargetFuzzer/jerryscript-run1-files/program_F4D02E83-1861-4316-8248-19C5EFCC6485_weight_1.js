class C1 {
}
try { C1(); } catch (e) {}
new Uint8ClampedArray(13);
new Uint16Array(1077);
new BigUint64Array(2440);
class C14 {
    [-10];
    n(a16) {
        try { new a16(); } catch (e) {}
        a16 = 9;
        new BigUint64Array(6);
        new BigUint64Array(4096);
        new Int8Array(8);
        return a16;
    }
}
const v27 = new C14();
const v28 = new C14();
const v29 = new C14();
function F30(a32, a33, a34, a35) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = -10;
    this.h = v27;
    this.b = a34;
}
new F30("symbol", v27, v29, v29);
const v37 = new F30(v28, v29, v28, v29);
new F30("symbol", v27, v28, v37);
try { Uint16Array(4096); } catch (e) {}
4096 == 28762n;
function f47() {
    return v27;
}
function f48(a49, a50) {
    a49 instanceof a49;
    return f48;
}
const v53 = new Promise(f48);
v53.finally(f48);
