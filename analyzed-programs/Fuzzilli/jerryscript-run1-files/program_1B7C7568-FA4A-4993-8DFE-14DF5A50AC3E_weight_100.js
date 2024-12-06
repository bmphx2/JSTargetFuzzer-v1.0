function f0() {
    const o8 = {
        "b": 1000.0,
        "c": "o",
        valueOf(a5, a6) {
            function f7() {
                return a5;
            }
            return a5;
        },
        __proto__: "o",
        ["o"]: 1000.0,
    };
    return o8;
}
const v9 = f0();
const v10 = f0();
f0();
Object.defineProperty(v10, "g", { get: f0 });
[-9223372036854775808,f0,v9,-9223372036854775808];
[[1073741824],-9223372036854775808];
new Uint32Array(0);
new Int16Array(4);
new BigInt64Array(1121);
function F30() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -4;
}
new F30();
new F30();
new F30();
new Int16Array(218);
new Float32Array(127);
const v44 = Symbol.toPrimitive;
const o47 = {
    [v44]() {
        super.d = v10;
        new Float32Array(v44, 1121);
        return 1121;
    },
};
new Uint16Array(5);
[] % 24591;
