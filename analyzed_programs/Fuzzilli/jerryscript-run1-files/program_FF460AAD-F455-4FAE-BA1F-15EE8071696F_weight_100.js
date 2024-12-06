const v3 = [5.821836228190964,465.52899031883203,1000000.0,-4.0,-1.0,-6.268613025029703,-264.5593904881556];
const v4 = [0.46500482714601243,-4.0474699767563814e+307,4.0,583.3227432864687];
const v5 = [-1.0,0.1567616917250242];
function f6(a7, a8, a9, a10) {
    const o11 = {
        [v4]: a8,
        16: a8,
        [a8]: a10,
        "c": a8,
        [v5]: a7,
        __proto__: a8,
        4034: v4,
        ...v5,
        [v3]: -65535,
        "a": a9,
        "h": a8,
    };
    return o11;
}
const v12 = f6(v5, v4, -14, -4);
const v13 = f6(v3, v5, -14, -65535);
const v14 = f6(v3, v5, -4, -4);
class C15 extends f6 {
    p(a17, a18, a19) {
        super.h = -65535;
        v5[4] &&= -14;
        a18 == f6;
        return v5;
    }
    constructor(a22, a23) {
        super(v3, v3, -14, -65535);
        Object.defineProperty(v12, "e", { writable: true, get: f6, set: f6 });
        try { a22(v4, a22, v3, a23); } catch (e) {}
    }
}
const v25 = new C15(v12, v13);
const v26 = new C15(f6, v25);
new C15(v5, v26);
const v28 = v25.h;
Object.defineProperty(v28, -4, { get: f6 });
class C32 {
    c = C15;
    [v28] = v14;
    2;
}
new C32();
new C32();
new C32();
