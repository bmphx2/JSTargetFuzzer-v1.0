new Uint8ClampedArray(10);
new Int8Array(1000);
new Int16Array(257);
new Int16Array(255);
const v20 = new Uint8Array(5);
new Uint8ClampedArray(257);
function f24(a25, a26) {
    const o39 = {
        174: a25,
        "c": v20,
        65536: a26,
        "e": v20,
        set f(a28) {
            let v29;
            try { v29 = a28(Int16Array, this, a28, this); } catch (e) {}
            new Uint8ClampedArray(v29);
            new Uint16Array(341);
            new Int16Array(16);
        },
    };
    return o39;
}
f24(5, 2147483648);
const v41 = f24(255, 257);
f24(257, 255);
const v43 = new Uint8Array(4556, 257, 255);
let v44;
try { v44 = v43.includes(v43); } catch (e) {}
Object.defineProperty(v41, 257, { enumerable: true, get: f24 });
for (let v45 = 0; v45 < 32; v45++) {
    v20["p" + v45] = 4556;
}
v20[3];
try { v44["p"](Int16Array); } catch (e) {}
