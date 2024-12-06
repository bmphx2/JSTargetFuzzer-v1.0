const v5 = new Float32Array(257);
new BigInt64Array(112);
const v11 = new BigUint64Array(128);
/\p{gc=Nd}Fa+b|c/vygmsid;
const v13 = /b\P{gc=Decimal_Number}/vsd;
const v15 = !/N[\111](\p{General_Category=Decimal_Number}*)?/ygs;
try { v15(v15, 13594); } catch (e) {}
function f17(a18, a19, a20, a21) {
    const o23 = {
        get c() {
            a18[3] = a21;
            return this;
        },
        "h": a19,
    };
    return o23;
}
f17(257, v5, f17(4294967295, BigInt64Array, v11, v13), 128);
f17(-65537, 112, -65537, BigUint64Array);
