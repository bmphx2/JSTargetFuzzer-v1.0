function f6(a7, a8) {
    const o14 = {
        ..."function",
        "b": a7,
        ...-9223372036854775807n,
        __proto__: a7,
        [a8](a10, a11) {
            a7[1168] = -9223372036854775807n;
            let {"f":v13,} = super.e;
            return "toPrimitive";
        },
        4: -65536n,
        ...a7,
        [a7]: "function",
        ...a7,
        "f": "toPrimitive",
    };
    return o14;
}
const v15 = f6(-9223372036854775807n, "function");
f6(v15, "function");
f6("toPrimitive", v15);
["function",[-65536n,"function"]];
["n"];
function f24(a25, a26) {
    const v29 = Array.from(1);
    function F30(a32, a33, a34, a35) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v36 = new F30(a26, 1, a26, v29);
    with (v36) {
        try { v29(Array); } catch (e) {}
    }
    return v36;
}
f24(f24, f24);
