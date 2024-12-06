function f0() {
}
function f1() {
    return f0;
}
function f2(a3) {
    const o8 = {
        set g(a5) {
            let v4 = this;
            ({"d":a5,"e":f1,...v4} = v4.e);
            v4[v4];
        },
        [f1]: f0,
        "d": a3,
        "a": a3,
        "f": f1,
        __proto__: f1,
        "h": a3,
    };
    return f1;
}
const v9 = f2(f0);
const v10 = f2(f0);
const v11 = f2(f0);
function F12(a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = f1;
    this.c = a15;
}
new F12(v10, v9);
const v17 = new F12(v11, v10);
new F12(f1, f1);
function F19(a21, a22, a23) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = v17;
}
new F19(v10, f0, v10);
const v25 = new F19(v10, v10, v9);
new F19(v11, v25, v10);
for (let [v28,v29] of "resizable") {
}
