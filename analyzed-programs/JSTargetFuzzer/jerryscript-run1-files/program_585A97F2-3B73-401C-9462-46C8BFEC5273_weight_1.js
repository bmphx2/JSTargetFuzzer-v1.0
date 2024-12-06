function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 268435440;
    this.b = 268435440;
    this.d = 268435440;
}
const v3 = new F0();
new F0();
const v5 = new F0();
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = F0;
}
new F6(v5);
new F6(v5);
new F6(v3);
const v14 = new BigUint64Array(129);
new Uint8ClampedArray(256);
new Uint16Array(2133);
new Int16Array(255);
const v26 = new Uint8Array(5);
new Uint8ClampedArray(257);
function f30(a31, a32) {
    const o45 = {
        174: a31,
        "c": v26,
        65536: a31,
        "e": v26,
        set f(a34) {
            try { a34(Int16Array, a34, a34, this); } catch (e) {}
            new v14(2);
            new Uint16Array(341);
            new Int16Array(Int16Array);
        },
    };
    return o45;
}
f30(5, 255);
const v47 = f30(255, 257);
f30(257, 255);
const v49 = new Uint8Array(257, 257, 255);
let v50;
try { v50 = v49.includes(v49); } catch (e) {}
Object.defineProperty(v47, 257, { enumerable: true, get: f30 });
for (let v51 = 0; v51 < 32; v51++) {
    v26["p" + v51] = v51;
}
v26[3];
try { v50["p"](Int16Array); } catch (e) {}
