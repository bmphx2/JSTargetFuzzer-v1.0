const v3 = [-1000000000000.0,-119657.45823651354,-119657.45823651354];
const v5 = [v3,118834.42994906381,-119657.45823651354,[v3,-1000000000000.0,-1000000000000.0,-1000000000000.0,118834.42994906381]];
new Uint32Array(3376);
new Float64Array(1024);
new Uint16Array(129);
function f15() {
    const v16 = -Infinity;
    const o24 = {
        "g": 255,
        valueOf(a20) {
            a20.valueOf = a20;
            for (const v21 in this) {
                try {
                    super.getOwnPropertyDescriptors(this, -1033928124, 255, v16);
                } catch(e23) {
                }
            }
            return 255;
        },
        [v16]: v16,
        "d": -1033928124,
    };
    return o24;
}
let v25 = f15();
const v26 = f15();
const v27 = f15();
function f31(a32, a33, a34, a35) {
    const o55 = {
        ...v26,
        "g": 4.0,
        set a(a37) {
            const v39 = new BigInt64Array();
            const o40 = {
                ...v39,
            };
            a37[a32] = a37;
            try { a37(this); } catch (e) {}
            Object.defineProperty(v26, 16, { writable: true, value: a32 });
            v25 = v26;
            v5.length ^= 3654;
            const o45 = {
                "apply": f31,
                "construct": f31,
                "deleteProperty": f31,
                "get": f31,
                "getOwnPropertyDescriptor": f15,
                "getPrototypeOf": f15,
                "has": f31,
                "isExtensible": f15,
                "set": f15,
                "setPrototypeOf": f31,
            };
            new Proxy(v27, o45);
            new BigUint64Array(3654);
            new Uint8Array(28);
            new Int32Array(78);
        },
    };
    return o55;
}
const v56 = f31(v27, 1000000000000.0, 1000000000000.0, 1000000.0);
f31(v26, 1000000000000.0, 1000000000000.0, 1000000.0);
const v58 = f31(v25, 4.0, 4.0, 1000000000000.0);
const o62 = {
    __proto__: v56,
    4037: v26,
    "a": v27,
};
const o63 = {
    "h": 1000000.0,
    ...v58,
    "f": f31,
    "c": f31,
    "b": v25,
};
