function f3() {
    return 35801n;
}
function F7(a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a10;
}
const v12 = new F7(35801n, -1, -1);
new F7(1073741824n, -3007, v12);
new F7(65536n, -3007, 65536n);
new Int16Array(255);
const v23 = new Uint8Array(5);
new Uint8ClampedArray(257);
function f27(a28, a29) {
    const o42 = {
        174: a28,
        "c": 35801n,
        65536: a28,
        "e": a29,
        set f(a31) {
            let v32;
            try { v32 = a31(Int16Array, a31, a31, this); } catch (e) {}
            new Uint8ClampedArray(2);
            new v32(341);
            new Int16Array(16);
        },
    };
    return o42;
}
f27(5, 255);
const v44 = f27(255, 257);
f27(257, 255);
const v46 = new Uint8Array(257, 257, 255);
let v47;
try { v47 = v46.includes(v46); } catch (e) {}
Object.defineProperty(v44, 257, { enumerable: true, get: f27 });
for (let v48 = 0; v48 < 32; v48++) {
    const v51 = new ArrayBuffer(ArrayBuffer, ArrayBuffer);
    new DataView(v51);
    const v54 = "p" + v48;
    v23[v54] = v54;
}
v23[3];
try { v47["p"](Int16Array); } catch (e) {}
