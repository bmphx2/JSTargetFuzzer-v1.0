const v2 = new Int32Array(4096, 4096, Int32Array);
new Float64Array(7, v2);
with (v2) {
    buffer = Int32Array;
    v2.buffer = Int32Array;
    try { v2.subarray(); } catch (e) {}
}
new Uint8ClampedArray(12);
new Uint8ClampedArray(512);
new Uint16Array(0);
new Float64Array(512);
let v19 = 1n;
v19 **= 1073741824n;
