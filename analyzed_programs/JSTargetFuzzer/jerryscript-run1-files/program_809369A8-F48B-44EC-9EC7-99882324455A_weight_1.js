const v4 = new Set();
const v8 = v4.constructor;
class C9 extends v8 {
    ["-7"] = 0;
}
const v10 = new C9();
function F11(a13, a14, a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a16;
}
const v17 = new F11("toString", "string", 0, 0);
const v18 = new F11("toString", "-7", 14313, 14313);
const v19 = new F11("-7", "toString", 0, 0);
function f20(a21, a22) {
    a22 = "toString";
    C9[-1542877669] = -1542877669;
    const o34 = {
        268435441: v4,
        ..."toString",
        "b": a22,
        ["toString"]: "-7",
        "g": v17,
        "g": v18,
        [a21]: 0,
        "b": a21,
        __proto__: v4,
        o(a27, a28) {
            let v29;
            try { v29 = a21(a27, a22); } catch (e) {}
            try { v29(a22, 14313, v29, a22); } catch (e) {}
            v29 / a28;
            const v32 = a28 > this;
            v32 ? a28 : this;
            return v32;
        },
        "h": v18,
        ..."toString",
        [v4]: 129n,
        0: 129n,
        [-1]: "-7",
        "e": F11,
        "a": a22,
        "d": v8,
        [v19]: 129n,
        ...v19,
        "f": v10,
        "c": -65537n,
        ...a22,
        6: v18,
        3: C9,
        1017: v19,
        ...v19,
        "h": v4,
    };
    return o34;
}
let v36;
try { v36 = v18["n"](-1542877669, v18, v4, "n", "n"); } catch (e) {}
let v37;
try { v37 = new v36(f20, v4); } catch (e) {}
v37 >> Set;
const o39 = {
    "defineProperty": f20,
    "getPrototypeOf": f20,
    "isExtensible": f20,
    "ownKeys": f20,
    "preventExtensions": f20,
    "set": f20,
};
new Proxy(f20, o39);
const v42 = f20("-7", v17);
f20("toString", v42);
f20("toString", v42);
([0.0]).sort();
