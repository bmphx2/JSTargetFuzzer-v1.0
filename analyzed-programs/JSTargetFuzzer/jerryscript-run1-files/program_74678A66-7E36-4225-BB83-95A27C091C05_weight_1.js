function f0() {
}
function f1() {
    const o2 = {
        __proto__: f0,
        "h": f0,
        ...f0,
        ...f0,
        [f0]: f0,
        "d": f0,
        "e": f0,
        "c": f0,
        "a": f0,
        1935: f0,
        "g": f0,
        "b": f0,
        "f": f0,
    };
    return o2;
}
const v3 = f1();
const v4 = f1();
f1();
class C6 {
    static [f1] = v3;
    static set d(a8) {
        const o9 = {
            7: a8,
            [v4]: v4,
        };
        const o10 = {
            "call": f1,
            "construct": f1,
            "deleteProperty": f0,
            "get": f1,
            "getOwnPropertyDescriptor": f0,
            "set": f0,
            "setPrototypeOf": f0,
        };
        new Proxy(v3, o10);
    }
}
const v13 = new C6();
const v14 = new C6();
new C6();
function f17(a18, a19, a20, a21) {
    const o31 = {
        "g": f0,
        ...v14,
        "b": C6,
        ...a21,
        "c": v4,
        "e": a21,
        n(a23, a24, a25) {
            a25[536870912];
            const t54 = super.a;
            t54[0] = this;
            return -739444412;
        },
    };
    return o31;
}
for (let i33 = 0; i33 < 6; i33++) {
    v14[1725612576];
}
f17(v3, f17(v4, C6, v3, v3), v3, f17(v3, v13, C6, C6));
("d").padStart("d");
