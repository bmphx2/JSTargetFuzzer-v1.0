let v0 = -4.0;
class C3 {
    static get c() {
        this[4] = v0;
        v0 &&= v0;
        this[253] = this;
        this.__proto__;
        let v8 = 342.96110103902606;
        v8++;
        const v10 = -8;
        Math.acosh(8);
        Math.asinh(v8);
        this + v8;
        return v10;
    }
}
const v14 = new C3();
const v15 = new C3();
const v16 = new C3();
function f17() {
    return "boolean";
}
const v19 = new Set();
function f20(a21, a22, a23, a24) {
    const o34 = {
        "h": a22,
        m(a26, a27, a28, a29) {
            const v31 = [a24,a21];
            Reflect.apply(("boolean").slice, a26, v31);
            return "boolean";
        },
        ...a23,
        [v0]: a22,
        "f": "boolean",
        "b": "536870889",
        "c": v14,
        "d": v19,
    };
    return o34;
}
const v35 = f20(v0, C3, v16, v19);
f20(f17, "536870889", v14, "boolean");
v15.__proto__ = f20(Set, "536870889", C3, v16);
Object.defineProperty(v35, "f", { configurable: true, set: f17 });
switch (f17()) {
    case v14:
        break;
}
