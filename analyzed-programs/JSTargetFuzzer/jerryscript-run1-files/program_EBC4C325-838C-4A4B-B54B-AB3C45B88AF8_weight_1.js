class C3 {
    static 5 = "g";
    constructor(a5) {
        function F9(a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            this.e = a12;
        }
        new F9("g", "g", -1n);
        new F9(a5, 1000000000.0, -9223372036854775808n);
        new F9(this, -5.0, -9223372036854775808n);
    }
}
const o17 = {
    "c": 1000000000.0,
};
const t15 = "g";
t15.f = -5.0;
try { C3.toString(1000000000.0, "g", -5.0); } catch (e) {}
new C3("g");
new C3(-5.0);
new C3(1000000000.0);
function f28() {
    const o32 = {
        4096: 24473,
        __proto__: "sticky",
        "g": "sticky",
        ..."sticky",
        ..."sticky",
        "h": f28,
        "f": 24473,
        "a": "sticky",
        "c": -1732131901,
        ["sticky"]: -2.220446049250313e-16,
        [24473]: "sticky",
        ..."sticky",
        13: "sticky",
        "f": 24473,
        "a": 24473,
        "b": "sticky",
        ..."sticky",
        "e": -2.220446049250313e-16,
    };
    return o32;
}
const v33 = f28();
const v34 = f28();
f28();
function f36() {
    return v34;
}
function F40(a42, a43, a44) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = v33;
}
new F40(v33, 4294967296, v34);
const v46 = new F40(4294967296, -53536, v34);
new F40(v46, -1956692059, v34);
new Int16Array(7);
new Int16Array(9);
let v56 = new Uint32Array(2);
v56 |= v56[8];
try {
} catch(e64) {
    v46.g = e64;
}
