new Int16Array(11);
new BigInt64Array(1);
new Float32Array(3);
const v14 = new Int16Array(255);
const o17 = {
    "maxByteLength": 3916,
};
const v19 = new ArrayBuffer(8, o17);
const v21 = new DataView(v19);
const v24 = new Uint8Array(5);
const v27 = new Uint8ClampedArray(257);
function f28(a29, a30) {
    const o43 = {
        174: a29,
        "c": v24,
        65536: a29,
        "e": v24,
        set f(a32) {
            try { a32(Int16Array, a32, a32, this); } catch (e) {}
            new Uint8ClampedArray(2);
            new Uint16Array(341);
            new Int16Array(16);
        },
    };
    return o43;
}
v27.length ^= 8;
Object.defineProperty(v21, 145, { writable: true, configurable: true, value: v14 });
try { ("boolean").charCodeAt(255); } catch (e) {}
f28(5, 255);
const v49 = f28(255, 257);
f28(257, 255);
const v51 = new Uint8Array(257, 257, 255);
let v52;
try { v52 = v51.includes(v51); } catch (e) {}
Object.defineProperty(v49, 257, { enumerable: true, get: f28 });
for (let v53 = 0; v53 < 32; v53++) {
    v24["p" + v53] = v53;
}
v24[3];
try { v52["p"](Int16Array); } catch (e) {}
