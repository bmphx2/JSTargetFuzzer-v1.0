function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = -14;
    this.f = -14;
    this.b = -14;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a8;
    this.d = a8;
    this.c = v4;
}
const v9 = new F6(v5);
const v10 = new F6(v4);
const v11 = new F6(v5);
[v9,v5];
const v13 = [v10,v4,v11,v4];
const v14 = [v3];
function f18(a19, a20) {
    const o21 = {
        "e": a20,
    };
    return o21;
}
f18(v13, -12);
f18(v14, -12);
f18(v13, f18);
try {
    new WeakSet(4087n);
} catch(e31) {
} finally {
}
