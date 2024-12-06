function f0() {
}
function f1() {
    return f0;
}
function f2(a3) {
    const v6 = new Uint16Array(3560);
    const v9 = v6[8]["valueOf"]();
    const o14 = {
        set d(a11) {
            let v10 = this;
            ({"d":a11,"e":f1,...v10} = v10.e);
            v10[v10];
        },
        [f1]: f0,
        "d": a3,
        "a": a3,
        "f": f1,
        __proto__: f1,
        "h": a3,
        "g": 3560,
        "c": "valueOf",
        "b": v9,
        "e": f2,
        [3560]: f0,
    };
    return f1;
}
const v15 = f2(f0, f1, f0, f0);
const v16 = f2(f0);
const v17 = f2(f0);
function F18(a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = f1;
    this.c = a21;
}
new F18(v16, v15);
const v23 = new F18(v17, v16);
new f2(f1, f1);
function F25(a27, a28, a29) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = v23;
}
new F25(v16, f0, v16);
const v31 = new F25(v16, v16, v15);
new F25(v17, v31, v16);
for (let [v34,v35] of "resizable") {
}
