new Float64Array(11);
new BigInt64Array(3409);
new Float64Array(3476);
new Int16Array(255);
const v20 = new Uint8Array(5);
new Uint8ClampedArray(257);
function f24(a25, a26) {
    const o39 = {
        174: a25,
        "c": v20,
        65536: a25,
        "e": v20,
        set f(a28) {
            let v29;
            try { v29 = a28(Int16Array, a28, a28, this); } catch (e) {}
            new Uint8ClampedArray(2);
            new v29(341);
            new a25(16);
        },
    };
    return o39;
}
f24(5, 255);
const v41 = f24(255, 257);
f24(257, 255);
const v43 = new Uint8Array(257, 257, 255);
try { v43.includes(v43); } catch (e) {}
Object.defineProperty(v41, 4491, { enumerable: true, get: f24 });
for (let v45 = 0; v45 < 32; v45++) {
    v20["p" + v45] = v45;
}
v20[3];
try { (1000)["p"](Int16Array); } catch (e) {}
