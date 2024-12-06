const v0 = [0.0];
const v1 = [-1.7775619559574146e+308,-1000000000.0,0.0,3.0,48.8293234528619,-5.6432679674845705];
let v2 = [0.9827015039774645,4.0,2.2250738585072014e-308,-2.2250738585072014e-308,3.0,0.5344363211269261,-2.0,-1.7976931348623157e+308,0.28428588366910723,7.300460191426517e+307];
function f3(a4, a5) {
    const o16 = {
        toString(a7, a8) {
            let v9;
            try { v9 = new a4(a7); } catch (e) {}
            v2[-2] = a8 = v9;
            return a7;
        },
        [a5](a11, a12) {
            return a5;
        },
    };
    return o16;
}
const v17 = f3(v2, v2);
let v18 = f3(v2, v2, f3);
const v19 = f3(v1, v1, v0, v17);
class C20 extends f3 {
    static get b() {
        v18 = this;
        this[f3] = v2;
        v2 = v1;
        return this;
    }
    get e() {
        let v24 = 0;
        while (v24 < 0, 0) {
            super.d = f3;
            super.p(v17, v24, v24);
            v24++;
        }
        return f3;
    }
}
const v29 = new C20();
const v30 = new C20();
const v31 = new C20(v17, v18, v18);
function f32(a33, a34) {
    const o35 = {
        "h": a34,
        __proto__: v31,
        ...a34,
        "f": v30,
        [a34]: v17,
        64: C20,
        "d": a34,
        ...v0,
        268435441: a33,
        [v19]: v0,
        "g": v19,
        "g": f3,
    };
    return f3;
}
f32(v29, v31);
f32(v30, v30);
f32(v31, v17);
try {
    f32 * -2;
} catch(e42) {
} finally {
}
