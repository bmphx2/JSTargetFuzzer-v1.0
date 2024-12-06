function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 7;
    this.c = 7;
    this.e = 7;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a9;
    this.d = a8;
    this.h = a9;
}
const v10 = new F6(v4, v3);
const v11 = new F6(v5, v3);
const v12 = new F6(v10, v4);
function f13(a14, a15, a16, a17) {
    const o25 = {
        __proto__: v12,
        set f(a19) {
            a19 |= [a19,v11,F6,v11,a16];
            let v21;
            try { v21 = a14.acosh(a16, v4, v3, F0, v12); } catch (e) {}
            v4[v10] = this;
            try { v21(); } catch (e) {}
            try {
                super.p(a15, a14, a17);
            } catch(e24) {
            }
        },
        "f": a17,
        10: a16,
        ...a17,
    };
    return o25;
}
for (let [i30, i31] = (() => {
        new Uint8Array();
        return [0, 10];
    })();
    i30 < i31;
    i30++) {
}
f13(v4, v3, v11, v12);
f13(v3, v3, v11, v11);
f13(v5, v5, v12, v10);
function F41(a43, a44, a45) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = f13;
}
new F41(v5, v12, v5);
new F41(v11, v10, v5);
new F41(v3, v10, v4);
function f49() {
}
new Uint8Array(0);
const v61 = [65537,-345187051];
const v62 = [v61,v61,v61,v61,v61];
const v63 = [v62,v62,v62];
class C64 {
    constructor(a66, a67, a68, a69) {
        v62.unshift(v61);
        v62[Symbol.replace] = v63;
    }
}
const v73 = new C64();
new C64(v73, v61, v61, v61);
let v77 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
const v79 = new Int32Array(127);
v77 /= v79;
new WeakSet();
new BigInt64Array(2);
([5]).reverse();
