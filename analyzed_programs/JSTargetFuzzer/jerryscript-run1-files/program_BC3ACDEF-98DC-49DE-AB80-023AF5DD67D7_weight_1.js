class C3 {
    ["undefined"] = 4.0;
    static ["undefined"];
    toString(a5) {
        a = C3;
        const v6 = a5 ** -1121186564;
        Object.defineProperty(a5, -2, { configurable: true, value: 4.0 });
        const v7 = ("undefined")[v6];
        a5[a5] = "undefined";
        for (let v8 = 0; v8 < 32; v8++) {
            const t10 = "undefined";
            t10["p" + v8] = v8;
        }
        return v7;
    }
}
new C3();
const v12 = new C3();
const v13 = new C3();
function F14(a16, a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = v13;
    this.a = "undefined";
    this.f = a18;
}
new F14(C3, v12, v13);
new F14(v13, v13, F14);
new F14(C3, v12, "undefined");
try {
    1n ^ -2;
} catch(e26) {
} finally {
}
const v28 = new Date();
v28.getUTCMonth();
