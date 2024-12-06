function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 11;
}
new F0();
new F0();
new F0();
function F18(a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a21;
}
new F18(257n, 1073741825n);
const v23 = new F18(1073741825n, 257n);
let v24 = new F18(1073741825n, 255n);
const v29 = "length" | v23;
const o33 = {
    valueOf() {
        try { this["replace"](); } catch (e) {}
        const t18 = "fAll7";
        t18.__proto__ = "length";
        return v29;
    },
};
let v35 = 2;
const v36 = [-9007199254740991,127];
v36[5] *= -1000000.0;
("isNaN").toUpperCase();
v36["concat"]();
Math.trunc(v24);
v24--;
v35--;
v35 << v24;
Math.floor(v24);
