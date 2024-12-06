function f0() {
    const o10 = {
        ...-4294967295,
        "g": f0,
        ...14,
        ...f0,
        "e": f0,
        4096: 14,
        "a": 14,
        set e(a5) {
            let v6;
            try { v6 = a5(); } catch (e) {}
            let v7;
            try { v7 = new v6(a5); } catch (e) {}
            const v8 = this.a;
            14 >> this;
            v7 = v8;
        },
        [-1000000.0]: -1000000.0,
        ...-1000000.0,
        ...-1000000.0,
        ...14,
        "f": 14,
        "d": 14,
    };
    return o10;
}
const v11 = f0();
const v12 = f0();
const v13 = f0();
function f17(a18, a19, a20, a21) {
    const o32 = {
        "f": v11,
        get d() {
            f0 ^= f0;
            ({"f":a18,} = this);
            super.e = a20;
            try { a18(a19, a18); } catch (e) {}
            return super.d;
        },
        "c": v12,
        8: v12,
        [a18]: a21,
        "g": a21,
        ...a21,
        o(a26, a27, a28) {
            return this;
        },
        __proto__: v11,
    };
    return o32;
}
const v33 = f17(v12, -2.220446049250313e-16, -2.606479930382404, v11);
f17(v13, -2.220446049250313e-16, -2.606479930382404, v12);
const v35 = f17(v13, -2.606479930382404, 1e-15, v13);
class C36 extends f17 {
    p(a38, a39, a40) {
        v12.f **= -2.220446049250313e-16;
        const o41 = {
            ...v11,
            ...v11,
            "d": f0,
            __proto__: v33,
            3710832379: f0,
            "apply": f17,
            "call": f17,
            "construct": f17,
            "iterator": f17,
            "deleteProperty": f17,
            "get": f17,
            "getOwnPropertyDescriptor": f17,
            127: v35,
            154: 1e-15,
            ...a40,
            ...v13,
            ...C36,
            "getPrototypeOf": f17,
            "has": f17,
            "isExtensible": f17,
            "set": f17,
            "setPrototypeOf": f17,
        };
        new Proxy(this, o41);
        return v11;
    }
}
new C36();
new C36();
new C36();
const v47 = (a48) => {
    return v47;
};
const o49 = {
    ...v47,
};
