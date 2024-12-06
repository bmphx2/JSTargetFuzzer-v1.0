class C3 {
    get f() {
        new Uint8Array(144);
        new Uint8Array(128);
        new BigInt64Array(255);
        return 4;
    }
}
new C3();
new C3();
new C3();
const v25 = new Int16Array(255);
const v28 = new Uint8Array(5);
new Uint8ClampedArray(257);
function f32(a33, a34) {
    const o47 = {
        174: a33,
        "c": a34,
        65536: v25,
        "e": v28,
        set f(a36) {
            try { a36(Int16Array, a36, a36, this); } catch (e) {}
            new Uint8ClampedArray(2);
            new Uint16Array(341);
            new Int16Array(16);
        },
    };
    return o47;
}
f32(5, 255);
const v49 = f32(255, 257);
f32(257, 255);
const v51 = new Uint8Array(257, 257, 255);
let v52;
try { v52 = v51.includes(v51); } catch (e) {}
Object.defineProperty(v49, 257, { enumerable: true, get: f32 });
for (let v53 = 0; v53 < 32; v53++) {
    v28["p" + v53] = v53;
}
v28[3];
try { v52["p"](Int16Array); } catch (e) {}
