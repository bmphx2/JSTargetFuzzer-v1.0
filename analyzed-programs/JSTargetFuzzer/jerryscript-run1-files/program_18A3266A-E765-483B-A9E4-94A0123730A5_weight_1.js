new Int32Array(3598);
new Uint8Array(1606);
const v8 = new Float64Array(8);
function F15(a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a18;
}
new F15(257n, 1073741825n);
const v20 = new F15(1073741825n, 257n);
let v21 = new F15(1073741825n, 255n);
const v26 = "length" | v20;
const o30 = {
    valueOf() {
        try { this["replace"](); } catch (e) {}
        const t14 = "fAll7";
        t14.__proto__ = "length";
        return v26;
    },
};
let v32 = 2;
Math.trunc(v21);
v21--;
v32--;
v32 << v21;
Math.floor(v21);
for (let i41 = 0, i42 = 10; i41 < i42; i41++, i42--) {
    try { v8.reverse(); } catch (e) {}
}
