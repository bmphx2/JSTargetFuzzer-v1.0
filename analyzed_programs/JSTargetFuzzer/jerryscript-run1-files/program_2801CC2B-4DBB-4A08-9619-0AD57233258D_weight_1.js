function f3() {
    return "toString";
}
function F4(a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a6;
    this.h = a6;
}
new F4("MIN_SAFE_INTEGER");
new F4("toString");
new F4("boolean");
new Uint16Array(512);
new Uint8ClampedArray(1492);
new Uint8Array(257);
function F22(a24, a25) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a25;
}
new F22(257n, 1073741825n);
const v27 = new F22(1073741825n, 257n);
let v28 = new F22(1073741825n, 255n);
const v33 = "length" | v27;
const o37 = {
    valueOf() {
        try { this["replace"](); } catch (e) {}
        const t25 = "fAll7";
        t25.maxByteLength = F22;
        return v33;
    },
};
let v39 = 2;
Math.trunc(257);
v28--;
v39--;
v39 << v28;
Math.floor(v28);
