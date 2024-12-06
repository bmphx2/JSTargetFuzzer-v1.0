function f0() {
}
const v1 = [f0,f0,f0,f0];
const v2 = [v1,v1,f0];
[v1,v2,v1,v2];
function f10(a11, a12, a13) {
    const o32 = {
        "h": a12,
        __proto__: v1,
        "g": f0,
        "f": 5.0,
        get b() {
            const v15 = (5.0)[1073741823];
            const o21 = {
                "apply": f0,
                "call": f0,
                "construct": f0,
                "c": 9223372036854775807,
                "b": v15,
                "d": this,
                6: -4096,
                __proto__: this,
                "defineProperty": f0,
                "deleteProperty": f0,
                "getOwnPropertyDescriptor": v15,
                "getPrototypeOf": v15,
                set c(a17) {
                },
                "has": f0,
                "isExtensible": Infinity,
                "ownKeys": f0,
                "preventExtensions": f0,
                "g": a13,
                "e": 9223372036854775807,
                "a": a12,
                "h": v15,
                ...this,
                "set": f0,
            };
            function F23(a25, a26, a27) {
                if (!new.target) { throw 'must be called with new'; }
                this.d = v15;
                this.c = 9223372036854775807;
            }
            new F23(Proxy, v2, o21);
            const v29 = new F23(5.0, this, Proxy);
            new F23(v29, -16, a13);
            new Proxy(v1, o21);
            return -16;
        },
    };
    return o32;
}
const v33 = f10(-16, 5.0, 5.0);
f10(5.0, Infinity, Infinity);
const v35 = f10(9223372036854775807, -1000.0, Infinity);
for (let i = 0; i < 5; i++) {
}
for (let i = 0; i < 5; i++) {
    v35[v33] = -4096;
    for (let v36 = 0; v36 < 32; v36++) {
        const v38 = "p" + v36;
        v38[v38] = v36;
    }
}
