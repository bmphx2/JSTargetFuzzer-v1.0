function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 268435441;
}
new F0();
new F0();
new F0();
new Int8Array(2);
new Uint8ClampedArray(16);
new Float32Array(7);
new Set();
Math - 8;
const t11 = "ZDC";
t11.length = 125;
const o34 = {
    "maxByteLength": 2742,
};
const v36 = new ArrayBuffer(2742, o34);
new DataView(v36);
let v40 = 3.5176318016857255;
Math.hypot("valueOf");
const v42 = ~v40;
const v43 = --v40;
const v44 = v40 || v43;
const v45 = v44 | v43;
Math.cbrt(v44);
v42 * v45;
