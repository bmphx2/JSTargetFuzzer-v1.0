function f0() {
    const o4 = {
        ["d"]: "d",
        __proto__: "d",
        ..."d",
        "f": 7,
        "b": "d",
        ..."d",
        "g": 7,
        ..."d",
        [7]: "d",
        "e": 7,
        ..."d",
        "c": 7.342873747364656,
    };
    return o4;
}
f0();
const v6 = f0();
f0();
let v8 = 4096;
new Uint8ClampedArray(v8);
new BigUint64Array(218);
new BigInt64Array(6);
v8 = 6;
try { v6["n"](); } catch (e) {}
new f0();
new Array(152);
