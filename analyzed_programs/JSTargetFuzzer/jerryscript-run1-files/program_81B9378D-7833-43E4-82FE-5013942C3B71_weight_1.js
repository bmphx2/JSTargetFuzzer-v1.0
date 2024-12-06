const v0 = [-2.0,1000000000.0];
const v1 = [-2.0,-2.2250738585072014e-308,1000000000000.0,0.3566013012236381,2.0,-1.7976931348623157e+308,0.9030953374524615];
const v2 = [-461660.16304780904,4.2090738984498527e+307,2.220446049250313e-16,Infinity,1.1343413351590689e+308,119584.15704153269,NaN,778767.9933991001,-1.7976931348623157e+308];
function f6() {
    return 6428;
}
function f7(a8, a9, a10, a11) {
    const o17 = {
        "b": a11,
        "a": a10,
        __proto__: v0,
        "e": a11,
        "h": a9,
        "c": a10,
        /*
        __proto__: a10,
        */
        "a": 6428,
        get c() {
            v2[a8] = 6428;
            f6();
            const o14 = {
                "d": f6,
                "construct": f6,
                "defineProperty": f6,
                "get": f6,
                "getPrototypeOf": f6,
                "isExtensible": f6,
                "preventExtensions": f7,
                "set": f6,
            };
            const v16 = new Proxy(v0, o14);
            return v16;
        },
    };
    return o17;
}
f7(v0, -1907707278, v0, v1);
f7(f7(v1, 6428, v0, v2, v0), 1073741825, v1, v0);
for (let i23 = 0; i23 < 10; i23++) {
    v2[i23];
}
new Float64Array(402);
new Uint8Array(0);
new Uint8ClampedArray(15);
const v41 = new Date(-1424814237, undefined);
v41.getTimezoneOffset();
