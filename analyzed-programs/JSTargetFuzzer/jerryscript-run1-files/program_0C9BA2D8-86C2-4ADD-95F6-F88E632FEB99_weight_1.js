function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a9;
    this.c = 9007199254740991;
}
new F6(-2, 28369);
new F6(9007199254740991, -58077);
const v12 = new F6(28369, 9007199254740991);
new Float32Array(v12);
new Uint8Array(129);
new Uint32Array(Float32Array);
const v24 = new Int16Array(255);
const v27 = new Uint8Array(5);
const v30 = new Uint8ClampedArray(257);
function f31(a32, a33) {
    const o46 = {
        174: a32,
        "c": v27,
        65536: a33,
        "e": v27,
        set f(a35) {
            try { a35(Int16Array, a35, a35, this); } catch (e) {}
            new Uint8ClampedArray(2);
            new v30(341);
            new Int16Array(16);
        },
    };
    return o46;
}
f31(5, 255);
const v48 = f31(255, 257);
f31(v24, 255);
const v50 = new Uint8Array(257, 257, 255);
let v51;
try { v51 = v50.includes(v50); } catch (e) {}
Object.defineProperty(v48, 257, { enumerable: true, get: f31 });
for (let v52 = 0; v52 < 32; v52++) {
    v27["p" + v52] = v52;
}
v27[3];
try { v51["p"](Int16Array); } catch (e) {}
