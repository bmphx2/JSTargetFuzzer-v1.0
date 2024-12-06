function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 4294967297;
}
new F0();
new F0();
new F0();
new Uint16Array(1024);
new BigInt64Array(1);
new Uint16Array(1);
function F18(a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a21;
}
new F18(255n, 1073741825n);
const v23 = new F18(1073741825n, 257n);
let v24 = new F18(1073741825n, 255n);
let v29 = "length" | v23;
const o33 = {
    valueOf() {
        try { this["fAll7"](); } catch (e) {}
        const t21 = "fAll7";
        t21.__proto__ = "length";
        return v29;
    },
};
Math.trunc(v24);
const v38 = v24--;
v29--;
2 << v38;
Math.floor(v24);
