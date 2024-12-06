class C3 {
    m(a5, a6) {
        for (let i9 = 0, i10 = 10; i9 < i10; i9++, i10--) {
            const o18 = {
            };
            new Proxy(this, o18);
        }
        return this;
    }
}
const v21 = new C3();
const v22 = new C3();
new C3();
class C27 {
    static n(a29, a30) {
        let v31 = this.c;
        v31 = v22;
        this.toString = this;
        v21[0] = v22;
        return v31;
    }
    constructor(a33, a34, a35, a36) {
        const o39 = {
            "maxByteLength": 64,
        };
        const v41 = new ArrayBuffer(64, o39);
        new Float32Array(v41);
    }
}
new C27(v21, 268435440, C27, 3);
new C27(v21, 14, 3, 268435440);
new C27(v22, 14, v21, 14);
function F56(a58, a59, a60, a61) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a61;
    this.f = -4294967296;
}
const v62 = new F56(-4294967296, 5n, "global", "-16");
new F56(-4294967296, -7n, "-16", "global", v62, 3, "-16");
const v64 = new F56(-4294967296, 5n, "global", "global");
if ("function" == v64) {
} else {
    function F69(a71, a72, a73) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a73;
    }
    const v74 = new F69(F69, "global", "function");
    new F69(v74, "global", "function");
    new F69(v74, "global", "function");
}
