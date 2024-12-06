function f0() {
}
class C1 {
    toString() {
        [65535,9223372036854775807,61373,-37677];
        [350894614,168950811,7159,1507131704,10,-2147483648];
        [3,-1024,5,-4294967296,774522683,-268435456,256,-2147483647];
        return f0;
    }
    static {
        f0();
    }
}
const v11 = new C1();
const v12 = new C1();
const v13 = new C1();
class C14 extends f0 {
    m(a16) {
        Object.defineProperty(this, "f", { configurable: true, enumerable: true, get: f0 });
        C1[Symbol.search];
        return a16;
    }
    a;
    #b;
    [-2];
    [v13];
}
const v20 = new C14();
const v21 = new C14();
const v22 = new C14();
class C23 {
    [v21] = v20;
    constructor(a25, a26, a27) {
        let v28;
        try { v28 = a25.getUint16(a27, a27, a27, a25, this); } catch (e) {}
        Object.defineProperty(C1, v28, { writable: true, get: f0, set: f0 });
        delete v21?.a;
    }
    [v12] = v22;
    f = v22;
    static 120;
    8 = v20;
    static #g = C1;
}
const v30 = new C23(v13, v11, v13);
new C23(v21, v13, v11);
const v32 = new C23(v13, v12, C14);
[[v13,v13,f0,v32],v13,v12,v32,v20];
[v30,v20];
const t47 = "symbol";
delete t47[("symbol").normalize("NFKC")];
