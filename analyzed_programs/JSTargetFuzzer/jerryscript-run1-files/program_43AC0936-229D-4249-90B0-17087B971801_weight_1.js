const v0 = [];
const v7 = 1421892917 || -65536;
Math.sqrt(1421892917);
const v9 = Math.cos(1421892917);
const v10 = 512 & v7;
const v11 = v7 ^ v10;
const v12 = Math.acos(v7);
const v14 = new Map();
function f15(a16, a17) {
    const o25 = {
        "a": a17,
        "h": -65536,
        ...v0,
        __proto__: v14,
        ...a16,
        "g": v0,
        2105: a16,
        [Map]: -65536,
        "f": v12,
        "d": v11,
        "c": -65536,
        "e": v7,
        valueOf(a19, a20, a21, a22) {
            a16++;
            function f24() {
                return v0;
            }
            return v10;
        },
        [1421892917]: 1421892917,
        "d": v14,
        "e": a16,
        [v14]: a16,
        [-65536]: v14,
        ...a17,
        2: Map,
        "b": -29085,
        [v9]: v10,
    };
    return o25;
}
f15(v14, -65536);
f15(-29085, -29085);
const v28 = f15(v14, -29085);
const o30 = {
    "apply": f15,
    "construct": f15,
    "deleteProperty": f15,
    "getOwnPropertyDescriptor": f15,
    "getPrototypeOf": f15,
    "isExtensible": f15,
    "set": f15,
    "setPrototypeOf": f15,
};
new Proxy(v28, o30);
const o45 = {
    valueOf(a34) {
        for (const v35 in this) {
            function F36(a38, a39) {
                if (!new.target) { throw 'must be called with new'; }
            }
            F36(v35, a34);
        }
        const v41 = [-65537,-13162,536870887];
        let v43 = -2.220446049250313e-16;
        [v41,v43 = 0.22410269410035233];
        return this;
    },
};
try { o45.valueOf(); } catch (e) {}
