function f3() {
    return f3;
}
class C4 extends f3 {
    constructor(a6, a7) {
        super();
        try { this["setBigInt64"](a7, a6); } catch (e) {}
    }
    static get c() {
        const v11 = -4096n instanceof f3;
        const o14 = {
            "maxByteLength": 44261026,
        };
        const v16 = new ArrayBuffer(7, o14);
        new BigUint64Array(v16);
        return v11;
    }
}
const v19 = new C4(-1318272156n, -4096n);
const v20 = new C4(6n, 6n);
const v21 = new C4(v20, -4096n);
function f22() {
    return v21;
}
const v24 = C4[WeakSet];
v24 % v24;
const v26 = [f22,v19];
[f22,[v24,v20,6n,f22],v26,-4096n,C4];
new WeakSet();
Date.UTC(536870887);
