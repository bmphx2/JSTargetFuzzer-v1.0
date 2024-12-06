function f0() {
}
function f1() {
    const o4 = {
        8: f0,
        5: f1,
        "c": f0,
        3450: f0,
        ...f0,
        [f0]: f0,
        __proto__: f0,
        "d": f0,
        "b": f0,
        "f": f0,
        [f0]() {
            this.length = 1;
            return f0;
        },
    };
    return o4;
}
const v5 = f1();
const v6 = f1();
const v7 = f1();
new Set();
function f16() {
    return Set;
}
function F17(a19, a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a20;
}
new F17(v7, Set, -256);
new F17(v6, -256, 9223372036854775807);
new F17(v5, v6, 9223372036854775807);
new Int16Array(255);
const v30 = new Uint8Array(5);
new Uint8ClampedArray(257);
function f34(a35, a36) {
    const o49 = {
        174: a35,
        "c": v30,
        65536: a36,
        "e": v30,
        set f(a38) {
            try { a38(Int16Array, a38, a38, this); } catch (e) {}
            new Uint8ClampedArray(2);
            new Uint16Array(341);
            new Int16Array(16);
        },
    };
    return o49;
}
f34(5, 255);
const v51 = f34(255, 257);
f34(257, 255);
const v53 = new Uint8Array(257, 257, 255);
let v54;
try { v54 = v53.includes(v53); } catch (e) {}
Object.defineProperty(v51, 257, { enumerable: true, get: f34 });
for (let v55 = 0; v55 < 32; v55++) {
    v30["p" + v55] = v55;
}
v30[3];
try { v54["p"](Int16Array); } catch (e) {}
