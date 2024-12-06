function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 65537;
    this.g = 65537;
    this.b = 65537;
}
new F0();
new F0();
new F0();
new Int16Array(255);
const v17 = new Uint8Array(5);
new Uint8ClampedArray(129);
function f21(a22, a23) {
    const o36 = {
        174: a22,
        "c": v17,
        65536: a22,
        "e": v17,
        set f(a25) {
            try { a25(Int16Array, a25, a25, this); } catch (e) {}
            new Uint8ClampedArray(2);
            new Uint16Array(341);
            new Int16Array(16);
        },
    };
    return o36;
}
f21(5, 255);
const v38 = f21(255, 257);
f21(257, 255);
const v40 = new Uint8Array(257, 257, 255);
let v41;
try { v41 = v40.includes(v40); } catch (e) {}
Object.defineProperty(v38, 257, { enumerable: true, get: f21 });
for (let v42 = 0; v42 < 32; v42++) {
    v17["p" + -1456625012] = v42;
}
v17[3];
try { v41["p"](Int16Array); } catch (e) {}
