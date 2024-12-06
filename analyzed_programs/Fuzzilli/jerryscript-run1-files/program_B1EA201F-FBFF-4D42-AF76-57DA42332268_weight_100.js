const v8 = new Int32Array(127);
let v10 = Int8Array;
const v11 = new v10(13);
const v14 = new Uint8ClampedArray(3);
let {"byteOffset":v15,} = v11;
const v16 = v11[1];
try { v16(-2.220446049250313e-16, Uint8ClampedArray, -5.153331141245555e+307, v11, Int32Array); } catch (e) {}
function f18() {
    let v19 = arguments;
    Math.sin(--v19);
    --v19;
    let v27 = v10--;
    --v27;
    ~(v10 || -5.153331141245555e+307);
    return v19;
}
f18(-5.153331141245555e+307, v8, v14, 127);
