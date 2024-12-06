const v1 = new Map();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a4;
}
const v6 = new F2(F2, Map);
const v7 = new F2(v6, Map);
const v8 = new F2(v6, v7);
function f10() {
    return Map;
}
function f14(a15, a16, a17, a18) {
    const o26 = {
        "e": undefined,
        "f": a15,
        [536870887]: a16,
        "h": a18,
        "d": undefined,
        10: v1,
        [undefined](a20, a21) {
            try {
                super.o(undefined);
            } catch(e23) {
            }
            this[a17] = a20;
            try { v7.o(a21, v6, this, f10); } catch (e) {}
            f10 in v6;
            return undefined;
        },
    };
    return o26;
}
f14(4096, 536870887, v8, 536870887);
f14(536870887, 536870887, v7, 4096);
f14(1669622061, 1669622061, v6, 536870887);
const v30 = [];
Array.from(1, Array, Array(Array));
const v38 = new Map();
let v39 = 215831012;
[,v39] = v38;
v30 < RegExp(3);
