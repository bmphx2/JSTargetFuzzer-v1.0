new Uint8ClampedArray(512);
new Float64Array(6);
new BigUint64Array(512);
new WeakSet();
function F17(a19, a20) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a20;
}
new F17(257n, 1073741825n);
let v22 = new F17(1073741825n, 257n);
const v23 = new F17(1073741825n, 255n);
const v28 = "length" | v22;
const o32 = {
    valueOf() {
        try { this["replace"](); } catch (e) {}
        const t15 = "fAll7";
        t15.__proto__ = "length";
        return v28;
    },
};
let v34 = 2;
Math.trunc(v23);
v22--;
v34--;
v34 << v23;
Math.floor(v23);
