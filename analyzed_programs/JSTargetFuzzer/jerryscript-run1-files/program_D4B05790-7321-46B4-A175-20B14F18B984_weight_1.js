const v2 = new Int16Array(10);
new Float32Array(6);
const v8 = new BigUint64Array(373);
function f9(a10, a11) {
    const o24 = {
        ...v2,
        ...v8,
        n(a13, a14, a15, a16) {
            this.e = a15;
            const v18 = Symbol.toPrimitive;
            const o23 = {
                [v18]() {
                    return a11;
                },
            };
            return a13;
        },
        "b": a11,
        "h": f9,
        "c": a10,
        [a10]: v2,
        __proto__: v8,
    };
    return a11;
}
f9(373, 6);
f9(10, 373);
f9(373, 6);
const v31 = [-16,4];
[-1124966260,9223372036854775807,9,-1022811835,14,-9223372036854775807,-954173599,592825194,-1892405619,4294967296];
const t29 = -12119;
t29[105] = v31;
v31.pop();
