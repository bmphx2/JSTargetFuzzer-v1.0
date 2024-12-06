function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = f0;
}
new F1();
const v4 = new F1();
new f0();
new Uint8ClampedArray(128);
const v11 = new Float32Array(128);
const v14 = new Uint8Array(v4);
let v25 = 0n;
let v31 = "x";
("multiline")[v31];
const v35 = Symbol.species;
v31[v35] = 536870887n;
v25 **= 1000n;
new Uint8ClampedArray(v11, 1475, 128);
v31 = "multiline";
Symbol.split;
v14[-4294967295];
const t19 = 1000n;
t19[9] = 255;
let v41;
try { v41 = v35.toString(255, v31, 1073741824n); } catch (e) {}
v41 = v35;
