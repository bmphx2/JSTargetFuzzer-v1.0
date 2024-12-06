const v1 = new Map();
function f2(a3, a4) {
    const o5 = {
        "e": a3,
        __proto__: a4,
        "b": Map,
        "d": v1,
        "f": v1,
        "c": Map,
        [a3]: a3,
        "g": a3,
        ...v1,
        "a": a3,
        "h": a4,
        ...a4,
        ...v1,
    };
    return o5;
}
const v6 = f2(v1, v1);
const v8 = f2(f2, f2(v6, v6));
let v12 = 1049143180;
function F15(a17, a18, a19) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a17;
}
new F15("4", v12, v8);
const v21 = new F15(f2, 536870887, v6);
new F15(v21, -16, v8);
function F23() {
    if (!new.target) { throw 'must be called with new'; }
}
const v25 = new F23();
for (let i = 0; i < 5; i++) {
    Object.defineProperty(v25, 220, { writable: true, enumerable: true, value: -256 });
}
const v27 = [977677784,-4230];
for (let i29 = 0; i29 < 9; i29++) {
    v12 |= 536870887;
}
function f35(a36, a37, a38) {
    return a38;
}
v27.reduceRight(f35);
