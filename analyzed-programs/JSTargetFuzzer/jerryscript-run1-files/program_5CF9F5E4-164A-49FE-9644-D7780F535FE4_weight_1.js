new Int16Array(13);
new BigInt64Array(3276);
new Uint32Array(128);
function F18(a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a21;
}
new F18(255n, 1073741825n);
const v23 = new F18(1073741825n, 257n);
const v24 = new F18(1073741825n, 255n);
const v29 = "length" | v23;
const o33 = {
    valueOf() {
        let v32;
        try { v32 = this["replace"](); } catch (e) {}
        v32.__proto__ = "length";
        return v29;
    },
};
let v35 = 2;
Math.trunc(v24);
F18--;
Math.floor(v35-- << 128);
