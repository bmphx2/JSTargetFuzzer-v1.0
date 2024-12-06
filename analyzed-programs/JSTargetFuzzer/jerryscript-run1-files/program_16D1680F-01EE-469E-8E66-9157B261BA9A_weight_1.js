new Float32Array(127);
new Uint8ClampedArray(2144);
const v8 = new Uint8Array(9);
new BigUint64Array(9);
new Int16Array(1000);
new Int16Array(Int16Array);
function F21(a23, a24) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a24;
}
new F21(257n, 1073741825n);
const v26 = new F21(v8, 257n);
let v27 = new F21(1073741825n, 255n);
const v32 = v27 | v26;
const o36 = {
    valueOf() {
        try { this["replace"](); } catch (e) {}
        const t17 = "fAll7";
        t17.__proto__ = "replace";
        return v32;
    },
};
let v38 = 2;
Math.trunc(v27);
v27--;
v38-- << v27;
Math.floor(v27);
