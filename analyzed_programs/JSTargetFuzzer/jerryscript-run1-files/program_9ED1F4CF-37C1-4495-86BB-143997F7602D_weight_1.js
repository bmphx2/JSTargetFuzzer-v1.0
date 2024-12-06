const v0 = [46179,1755539306];
const v1 = [-6,-2076172494,11,-1,8,-2,65536,1113577956,-9007199254740992];
const v2 = [268435439,-13,-1,-7,2147483648,-52907,268435439,-24398,1771307611,-20464];
const v4 = new WeakMap();
function F6(a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    this.name = v4;
    this.e = a8;
    this.b = a10;
}
const v11 = new F6(v2, v0, v2, F6, v0, v2);
const v12 = new F6(v0, v1, v1);
const v13 = new F6(v4, v1, v0);
function f14(a15, a16, a17) {
    const o20 = {
        get h() {
            a15[this] = F6;
            v0[1073741824] = v12;
            function f19() {
                return v0;
            }
            return v2;
        },
        __proto__: a16,
        ...v13,
        "g": WeakMap,
    };
    return o20;
}
f14(v11, v12, v0, v12, f14(v2, v13, v2));
f14(F6, v12, v1);
class C24 {
    static m(a26, a27, a28) {
    }
}
let v29 = new C24();
let v30;
try { v30 = C24(v13); } catch (e) {}
let v31;
try { v31 = v30(); } catch (e) {}
v29 -= v31;
