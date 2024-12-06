function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = -1511458209;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = v5;
    this.c = a8;
}
const v10 = new F6(v4, v5);
const v11 = new F6(v5, v3);
new F6(v5, v5);
function F13(a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a17;
    this.a = F0;
}
const v18 = new F13(v3, v3, v5);
v4[197] = v5;
v11[v4] = v10;
const v19 = F6 >>> F0;
try { v18.isSafeInteger(v18, F6, F0, v19); } catch (e) {}
v18[1073741824] = F13;
const v21 = new F13(v5, v4, v5);
const v22 = new F13(v4, v5, v5);
function f23(a24, a25) {
    const o30 = {
        get h() {
            with (this) {
                c = v4;
                a24 && F13;
                super.g;
                delete this[4];
            }
            return a25;
        },
        "message": a25,
        [a24]: v3,
        "g": a25,
        "d": a25,
        ...v21,
    };
    return o30;
}
f23(v22, v5);
f23(v18, v4);
f23(v10, v4);
const v35 = new Uint8Array();
v35.sort();
