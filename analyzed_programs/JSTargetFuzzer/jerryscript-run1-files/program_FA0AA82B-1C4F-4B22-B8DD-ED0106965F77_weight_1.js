function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 51743;
    this.h = 51743;
    this.f = 51743;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7) {
    const o12 = {
        213: v3,
        p(a9) {
            let v10;
            try { v10 = new a9(); } catch (e) {}
            let v11;
            try { v11 = v10(a7, this, a7, v10, v10); } catch (e) {}
            return v11;
        },
        [a7]: a7,
        ...a7,
        ...v3,
        "f": v3,
        "c": v5,
        [v3]: a7,
        "f": a7,
        1073741824: v3,
        1767887478: v4,
        "b": v3,
    };
    return o12;
}
f6(v4);
f6(v5);
const v15 = f6(v3);
function f16() {
    return f6;
}
const v17 = [v3,f16,v5,v4,v3];
const v18 = [v15];
[v18,v18,v4,v3,v18];
URIError();
const v22 = delete v4[f6];
v17[v22] = v22;
