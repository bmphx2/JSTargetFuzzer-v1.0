const v2 = new Float32Array(64);
const v5 = new Int32Array(4);
const v8 = new BigUint64Array(16);
const v10 = v8[Float32Array];
v2.d = v10;
v5[16] = 64;
let {"byteOffset":v11,"d":v12,} = v2;
try { v12.sin(Float32Array, 268435441); } catch (e) {}
const v31 = ("multiline")["x"];
const v33 = Symbol.species;
const t10 = "x";
t10[v31] = 536870887n;
const t12 = 1000n;
t12[9] = 268435441;
class C34 {
}
const v36 = 65537n < C34;
let v37;
try { v37 = v33.toString(255, "x", 9n); } catch (e) {}
if (v36) {
    try { v2.set(v31, v11); } catch (e) {}
    try { v37(v10); } catch (e) {}
} else {
}
v37 = v33;
