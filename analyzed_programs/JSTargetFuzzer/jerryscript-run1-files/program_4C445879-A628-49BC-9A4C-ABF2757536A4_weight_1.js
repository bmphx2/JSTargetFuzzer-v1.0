[];
const v5 = new WeakSet();
new Set();
new Uint8ClampedArray(64);
new Float32Array(9);
new Uint32Array(3539);
function F17() {
    if (!new.target) { throw 'must be called with new'; }
}
const v19 = new F17();
const v20 = [v5];
v20[2190] = v20;
v20.lastIndexOf(v19);
