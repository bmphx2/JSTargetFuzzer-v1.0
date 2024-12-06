new Uint32Array(127);
const v8 = new Uint16Array(220);
new Int16Array(512);
new Int16Array(255);
const v17 = new Uint8Array(5);
new Uint8ClampedArray(257);
function f21(a22, a23) {
    const o45 = {
        174: a22,
        "c": v17,
        65536: a22,
        "e": v17,
        set f(a25) {
            let v26;
            try { v26 = a25(Int16Array, a25, a25, this); } catch (e) {}
            new Uint8ClampedArray(2);
            const v32 = new Uint16Array(341);
            new Int16Array(16);
            for (let [v36,v37,v38] of v32) {
                v32[v38] = v36;
            }
            let [v39,v40,v41] = v8;
            for (let v42 = 0; v42 < 32; v42++) {
                v26["p" + v42] = v42;
            }
        },
    };
    return o45;
}
f21(5, 255);
const v47 = f21(255, 257);
f21(257, 255);
const v49 = new Uint8Array(257, 257, 255);
let v50;
try { v50 = v49.includes(v49); } catch (e) {}
Object.defineProperty(v47, 257, { enumerable: true, get: f21 });
for (let v51 = 0; v51 < 32; v51++) {
    v17["p" + v51] = v51;
}
v17[3];
try { v50["p"](Int16Array); } catch (e) {}
