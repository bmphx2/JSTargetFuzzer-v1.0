function F6(a8, a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 2147483648;
}
const v12 = new F6(-5, 2147483648, 59430, 2);
new F6(v12, 2, 59430, 2147483648);
const v14 = new F6(2, 2147483648, 2, 2147483648);
function f15(a16, a17) {
    const o29 = {
        "h": F6,
        "g": a17,
        16: a17,
        "d": 59430,
        [v14]: a16,
        m(a19, a20) {
            try { new a20(a16, this, this, a19, a19); } catch (e) {}
            const o24 = {
                "maxByteLength": 3128,
            };
            const v26 = new SharedArrayBuffer(3128, o24);
            new Uint32Array(v26);
            return v26;
        },
    };
    return o29;
}
f15(2147483648, 59430);
f15(-5, -4294967297);
f15(2, 59430);
const v35 = new Uint32Array(181);
let v37 = BigUint64Array;
let v38 = new v37(1);
let v39 = 253;
[v39,,v37,v38] = v35;
try { v37["abs"](181, v39, v37); } catch (e) {}
new Uint16Array(v39);
for (let i52 = 0;
    (() => {
        const o56 = {
            "maxByteLength": 3968,
        };
        const v58 = new ArrayBuffer(2, o56);
        new Uint8ClampedArray(v58);
        return i52 < 2;
    })();
    i52++) {
    const v65 = new Function("x");
    v65.name;
}
Function();
