function f3() {
    const v6 = new Uint8Array(78);
    v6.reduceRight(Number);
    return "PI";
}
const v9 = ["dR3D","37617"];
const v10 = [v9];
const v11 = [v10];
function f12() {
    return "37617";
}
const v14 = new WeakMap();
class C15 {
    static g = f3;
    set f(a17) {
        v10.valueOf = f3;
        try {
            super.m("dR3D", "dR3D", v14, "PI", v11);
            (-55853n).valueOf();
        } catch(e21) {
        }
    }
    constructor(a23, a24) {
        a24 / this;
        const o26 = {
            "apply": f3,
            "call": f12,
            "construct": f3,
            "deleteProperty": f12,
            "get": f3,
            "getPrototypeOf": f3,
            "isExtensible": f12,
            "preventExtensions": f3,
            "setPrototypeOf": f3,
        };
        new Proxy(this, o26);
    }
}
new C15(v11, "37617");
new C15(v9, "PI");
new C15(v10, v10);
function f32(a33, a34, a35) {
    arguments[1] = arguments.callee;
    return a33;
}
f32();
