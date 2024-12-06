new Uint16Array(14);
const v5 = new Int8Array(66);
const v8 = new Uint16Array(5);
function f9(a10, a11, a12, a13) {
    const o20 = {
        4: a12,
        ...v8,
        set e(a15) {
            let {"byteOffset":v16,} = v5;
            v16 %= a11;
        },
        [14]: 14,
        "d": a10,
        __proto__: a12,
        "c": 5,
        ...a10,
    };
    return o20;
}
const v21 = f9(66, 14, 5, 5);
f9(5, 66, 66, 5);
f9(66, 5, 14, 5);
const o26 = {
    "apply": f9,
};
new Proxy(v21, o26);
const v30 = [6,-7517,644864686,-9007199254740991,0,9007199254740991,-1,6138];
try { v30.reduceRight(v30, v30); } catch (e) {}
