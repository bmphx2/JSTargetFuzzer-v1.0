new Int32Array(8);
let v8;
try { v8 = Int8Array(65536, 65536, -1024); } catch (e) {}
try { v8.m(257, Int32Array, 65536, 8); } catch (e) {}
const v10 = new Int8Array(8);
new Uint16Array(9);
const v17 = new Int32Array(v10);
v17.__proto__ = v10;
function f18() {
    return f18;
}
function f19() {
    const o29 = {
        "b": f18,
        "e": f19,
        p() {
            let v21 = 0;
            do {
                for (let v22 = 0; v22 < 32; v22++) {
                    v17["p" + v22] = v22;
                }
                v21++;
            } while (v21 < 10)
            for (const v28 in this) {
                break;
            }
            return f18;
        },
    };
    return o29;
}
f19().p();
Promise.resolve(BigInt64Array);
