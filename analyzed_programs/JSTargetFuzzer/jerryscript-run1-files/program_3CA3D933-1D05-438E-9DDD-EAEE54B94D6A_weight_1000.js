function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a6;
}
new F3(257n, 1073741825n);
const v8 = new F3(1073741825n, 257n);
let v9 = new F3(1073741825n, 255n);
const v14 = "length" | v8;
const o18 = {
    valueOf() {
        try { this["replace"](); } catch (e) {}
        const t11 = "fAll7";
        t11.__proto__ = "length";
        return v14;
    },
};
let v20 = 2;
Math.trunc(v9);
v9--;
v20--;
v20 << v9;
Math.floor(v9);
