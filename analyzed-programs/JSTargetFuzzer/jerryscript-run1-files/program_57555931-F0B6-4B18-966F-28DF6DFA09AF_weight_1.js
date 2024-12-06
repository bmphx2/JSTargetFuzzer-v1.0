const v1 = new WeakMap();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = WeakMap;
    this.b = a4;
}
const v6 = new F2(v1, v1);
const v7 = new F2(v6, v6);
const v8 = new F2(v7, v1);
const v12 = [-36462,441635535,34803];
const v13 = [4294967297,-312827757,19961];
const v14 = [512];
function f15() {
    return v14;
}
function f16() {
    const v17 = -Infinity;
    const o25 = {
        "g": 255,
        valueOf(a21) {
            a21.valueOf = a21;
            for (const v22 in this) {
                try {
                    super.getOwnPropertyDescriptors(this, -1033928124, 255, v17);
                } catch(e24) {
                }
            }
            return 255;
        },
        [v17]: v17,
        "d": -1033928124,
    };
    return o25;
}
const v26 = f16();
const v27 = f16();
const v28 = f16();
function f32(a33, a34, a35, a36) {
    const o63 = {
        ...v27,
        "g": 4.0,
        set a(a38) {
            a38[a33] = a38;
            try { a38(this); } catch (e) {}
            const v43 = new BigUint64Array(3654);
            a34 -= v43;
            v7[1104] = v7;
            Object.defineProperty(a33, v13, { configurable: true, get: f16, set: f32 });
            a34 - BigUint64Array;
            v28.__proto__ = v12;
            try { this.isNaN(v8, 1000000000000.0, 3654); } catch (e) {}
            Math.log1p(512);
            Math.asin(v43);
            let v51 = v43 >> 512;
            +(!v51);
            String.fromCharCode(String, Int8Array);
            ++v51;
            new Uint8Array(28);
            new Int32Array(78);
        },
    };
    return o63;
}
const v64 = f32(v28, 1000000000000.0, 1000000000000.0, 1000000.0);
f32(v27, 1000000000000.0, 1000000000000.0, 1000000.0);
f32(v26, 4.0, 4.0, 1000000000000.0);
const o78 = {
    __proto__: v64,
    4037: v27,
    o(a71, a72, a73, a74) {
        const o75 = {
            "apply": f15,
            "call": f15,
            "construct": f32,
            "defineProperty": f15,
            "get": f15,
            "getOwnPropertyDescriptor": f16,
            "has": f16,
            "isExtensible": f16,
            "set": f32,
            "setPrototypeOf": f32,
        };
        const v77 = new Proxy(v1, o75);
        return v77;
    },
    "a": v28,
};
const o79 = {
    "h": 1000000.0,
    ...v13,
    "f": f32,
    "c": f32,
    "b": v26,
};
