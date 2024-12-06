function F6(a8, a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = "19419";
    this.g = a11;
}
new F6("-1685687103", F6, -603182711n, 15n);
let v13 = new F6("19419", F6, -3n, -603182711n);
const v14 = new F6("-1685687103", v13, -3n, 15n);
function f15() {
    function F16(a18, a19) {
        if (!new.target) { throw 'must be called with new'; }
        this.d = "-1073741824";
    }
    new F16("19419", "-1685687103");
    new F16("-1073741824", "19419");
    new F16("-1073741824", "-1685687103");
    return v14;
}
class C23 extends f15 {
    o(a25, a26) {
        super.h = a26;
        function f27(a28, a29, a30) {
            const o31 = {
                [a29]: a30,
                "c": a25,
                1: a25,
            };
            return o31;
        }
        f27(-603182711n, -603182711n, a26);
        let v33;
        try { v33 = new C23(a25); } catch (e) {}
        const o34 = {
            "apply": f27,
            "call": f27,
            "get": f15,
            "getOwnPropertyDescriptor": f27,
            "getPrototypeOf": f15,
            "isExtensible": f15,
            "preventExtensions": f15,
            "set": f27,
            "setPrototypeOf": f27,
        };
        new Proxy(v33, o34);
        f27(15n, 15n, a26);
        f27(-3n, 15n, "-1073741824");
        return F6;
    }
}
new C23();
new C23();
new C23();
const v47 = new Uint32Array(3);
const v50 = new Uint8Array(10);
v13 = v14;
f15();
const v57 = new Uint32Array(21);
[2.220446049250313e-16,NaN,1000.0,-Infinity,-2.0,0.8418049481265658];
const v59 = [-2.2250738585072014e-308];
[0.5565764498837954];
["string","string","string","string"];
21 > 2023143923n;
const o66 = {
    "b": 0n,
};
try {
    v47[5] = v57;
} finally {
    v50.valueOf = 10;
    try { v59.reduce(536870912); } catch (e) {}
}
+Uint32Array;
