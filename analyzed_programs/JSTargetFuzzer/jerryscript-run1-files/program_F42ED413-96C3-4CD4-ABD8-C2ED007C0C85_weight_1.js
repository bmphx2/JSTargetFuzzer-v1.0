function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -9223372036854775807;
    this.d = -9223372036854775807;
    this.e = -9223372036854775807;
    function f3() {
        return F0;
    }
    const o4 = {
        __proto__: F0,
    };
}
new F0();
new F0();
new F0();
new Int16Array(255);
const v22 = new Uint8Array(5);
new Uint8ClampedArray(257);
function f26(a27, a28) {
    const o41 = {
        174: a27,
        "c": a27,
        65536: a27,
        "e": v22,
        set f(a30) {
            try { a30(Int16Array, a30, a30, this); } catch (e) {}
            new Uint8ClampedArray(2);
            new Uint16Array(2);
            new Int16Array(16);
        },
    };
    return o41;
}
f26(5, 255);
const v43 = f26(255, 257);
f26(257, 255);
const v45 = new Uint8Array(257, 257, 255);
let v46;
try { v46 = v45.includes(v45); } catch (e) {}
Object.defineProperty(v43, 257, { enumerable: true, get: f26 });
for (let v47 = 0; v47 < 32; v47++) {
    v22["p" + v47] = v47;
}
v22[3];
try { v46["p"](Int16Array); } catch (e) {}
