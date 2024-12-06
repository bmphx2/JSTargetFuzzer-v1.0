new Date();
function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a4;
    this.b = a4;
    this.h = a4;
}
const v5 = new F2(F2);
new F2(v5);
new F2(Date);
new WeakMap();
[-128,43315210,-3,-14];
[9,65536,10000,128,1068562180,257,-840177317];
[-9007199254740991,4294967295,-21529382,-43503,1535695959,-499055017];
new Int16Array(255);
const v21 = new Uint8Array(5);
new Uint8ClampedArray(257);
function f25(a26, a27) {
    const o40 = {
        174: a26,
        "c": v21,
        65536: a26,
        "e": v21,
        set f(a29) {
            try { a29(Int16Array, a29, a29, this); } catch (e) {}
            new Uint8ClampedArray(2);
            new Uint16Array(341);
            new Int16Array(16);
        },
    };
    return o40;
}
f25(5, 255);
const v42 = f25(255, 257);
f25(257, 255);
const v44 = new Uint8Array(257, 257, 255);
let v45;
try { v45 = v44.includes(v44); } catch (e) {}
Object.defineProperty(v42, 257, { enumerable: true, get: f25 });
for (let v46 = 0; v46 < 32; v46++) {
    v21["p" + v46] = v46;
}
v21[3];
try { v45["p"](Int16Array); } catch (e) {}
