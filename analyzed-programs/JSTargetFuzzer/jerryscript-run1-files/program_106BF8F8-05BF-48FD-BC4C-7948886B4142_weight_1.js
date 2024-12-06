const v3 = [1321921755];
const v4 = [5,-4294967296,8,-1024,-4,536870912,128,-4294967295];
const v5 = [1000,2147483649];
function f9(a10, a11, a12, a13) {
    const o22 = {
        __proto__: a12,
        p(a15, a16, a17, a18) {
            return 189727.28957545408;
        },
        "h": a12,
        3277165798: -539994.7021139435,
        3: a12,
        10000: v5,
        "e": "268435441",
        "g": v4,
        "f": a12,
        "c": a11,
        [a12]: a11,
        "d": -539994.7021139435,
        9: -2.0,
        ...v5,
        "a": -2.0,
    };
    return o22;
}
const v23 = f9(f9, v5, "GACq3", 1.0204002205909652e+308);
const v24 = f9(v23, v3, "GACq3", 1.0204002205909652e+308);
const v25 = f9(v24, v3, "268435441", 1.0204002205909652e+308);
function f29() {
    Object.defineProperty(v25, 13, { writable: true, enumerable: true, value: 51 });
    typeof v24 === "string";
    v4[14] = -8;
}
const v36 = [-1000000.0,f29,-807.6596022618603,-1000000.0];
const v37 = [v36,-1000000.0,0.014069366437978514,v36];
const v38 = [v37,f29,-807.6596022618603];
f29();
function* f49(a50, a51, a52, a53) {
    try { a52.padStart(a50, "object"); } catch (e) {}
    const o55 = {
        "construct": f29,
        "ownKeys": f29,
        "preventExtensions": f29,
    };
    new Proxy(v38, o55);
    o55[256];
    const v63 = [a52,-11];
    Reflect.apply(v23.p, o55, v63);
    yield* "object";
    return a50;
}
f49(-807.6596022618603, "U7O", "U7O", v37);
