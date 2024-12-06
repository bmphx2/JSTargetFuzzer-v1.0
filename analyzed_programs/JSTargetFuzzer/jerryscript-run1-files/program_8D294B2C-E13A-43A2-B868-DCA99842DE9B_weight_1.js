function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 8;
    this.f = 8;
    this.e = 8;
}
const v3 = new F0();
let v4 = new F0();
const v5 = new F0();
function F10(a12, a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = F0;
    this.d = 1000;
}
new F10(1000, 9007199254740991, v3, 1000);
new F10(9007199254740991, 9007199254740991, v3, -16);
new F10(-16, -16, v4, v5);
function F25(a27, a28) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a28;
}
new F25(257n, 1073741825n);
const v30 = new F25(1073741825n, 257n);
let v31 = new F25(1073741825n, 255n);
const t24 = "fAll7";
t24[2] = F0;
v4[244];
const v40 = "length" | v30;
const o44 = {
    valueOf() {
        try { this["replace"](); } catch (e) {}
        const t31 = "fAll7";
        t31.__proto__ = "length";
        return v40;
    },
};
let v46 = 2;
Math.trunc(v31);
v31--;
v46--;
v46 << v31;
Math.floor(v31);
new Date();
try { ("9").repeat(v46); } catch (e) {}
o44[3] = -3.8151031526640233;
v4 = v3;
