function f0() {
}
function f1() {
    return f0;
}
function F14(a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a17;
}
new F14(257n, 1073741825n);
const v19 = new F14(1073741825n, 257n);
const o20 = {
};
function f21(a22, a23, a24) {
    return f21;
}
for (let v25 = 0; v25 < 5; v25++) {
    Object.defineProperty(v19, 1073741824, { set: f21 });
}
let v26 = new F14(1073741825n, 255n);
const v31 = "length" | v19;
const o35 = {
    valueOf() {
        try { this["replace"](); } catch (e) {}
        const t24 = "fAll7";
        t24.__proto__ = "length";
        return v31;
    },
};
Math.trunc(v26);
v26--;
v26--;
2 << 14;
Math.floor(v26);
