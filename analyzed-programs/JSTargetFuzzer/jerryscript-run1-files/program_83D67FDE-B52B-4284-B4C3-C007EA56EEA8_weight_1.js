const v0 = [776.4032646140988,-2.414230631160453e+307];
const v1 = [5.681018349871687,-1.0];
const v2 = [1e-15,-4.0,0.0,-5.0,1000000.0,-0.0];
function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = v2;
}
const v6 = new F3(F3);
new F3(v0);
const v8 = new F3(v0);
const v9 = [13,9007199254740991];
const v10 = [1073741823,0,268435440];
const v11 = [536870912,7,10,9194];
const o12 = {
};
const o13 = {
};
const v15 = new Proxy(o12, o13);
const o16 = {
    __proto__: v15,
};
o16.g = 1965371547;
function f18(a19, a20, a21, a22) {
    const o26 = {
        __proto__: v10,
        "b": a21,
        "f": v0,
        "h": a21,
        "a": a19,
        "e": a22,
        9: a20,
        get g() {
            const v24 = this[v10];
            super.b = v10;
            try { a19(v9, v24, F3, v10); } catch (e) {}
            return v6;
        },
        "d": a20,
        "c": v2,
        0: F3,
        ...a21,
        [a21]: v8,
    };
    return o26;
}
const v27 = f18(v6, v10, v0, v8);
f18(v0, v1, v11, f18(v27, v0, v10, v27));
/[5J[]]/gym;
