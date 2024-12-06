class C3 {
    static ["p"];
    static 40;
    static set f(a5) {
        const v8 = typeof a5 === "object";
        const t5 = "p";
        t5.__proto__ = a5;
        const o12 = {
            valueOf() {
                this[Symbol.search] = "object";
                return v8;
            },
        };
        this.f = v8;
    }
    4 = 1024;
    [1024] = 1024;
    ["p"] = -338456.4981128295;
}
const v13 = new C3();
const v14 = new C3();
const v15 = new C3();
function f16(a17, a18) {
    const o27 = {
        set c(a20) {
        },
        "h": a18,
        [a17]: 1024,
        "d": v13,
        "b": C3,
    };
    v14.valueOf = f16;
    const o28 = {
        "call": f16,
        "construct": f16,
        "defineProperty": f16,
        "deleteProperty": f16,
        "get": f16,
        "getOwnPropertyDescriptor": f16,
        "getPrototypeOf": f16,
        "has": f16,
        "isExtensible": f16,
        "preventExtensions": f16,
        "set": f16,
        "setPrototypeOf": f16,
    };
    new Proxy(a17, o28);
    return o27;
}
const v31 = f16(C3, C3);
const v32 = f16(v15, v31);
const v33 = f16(v14, v15);
function f34(a35, a36, a37) {
    const o56 = {
        "a": C3,
        valueOf(a39, a40) {
            const o41 = {
                "h": this,
                "d": this,
                ..."p",
                "b": v31,
                "a": -338456.4981128295,
                "e": -338456.4981128295,
                "a": v13,
            };
            a37.b;
            for (let v43 = 0; v43 < 36; v43++) {
                try { this.getDay(); } catch (e) {}
            }
            new Date();
            C3 & v33;
            function f48() {
                new WeakMap();
                Object.defineProperty(arguments, Date, { writable: true, configurable: true, get: Date, set: Date });
                return arguments;
            }
            f48(a35, f34);
            return v32;
        },
        1073741824: a35,
        ...v14,
        [f16]: C3,
        268435456: a37,
        13: a37,
        "d": v33,
        "e": a35,
        "c": a37,
        ...v15,
        "g": v32,
        ...v15,
        ...v31,
        __proto__: C3,
        "g": -338456.4981128295,
        ...v13,
        /*
        __proto__: a35,
        */
        "g": C3,
    };
    return o56;
}
f34(v15, v32, v14);
f34(v33, v32, v32);
f34(v13, v33, v33);
0n ^ 0n;
