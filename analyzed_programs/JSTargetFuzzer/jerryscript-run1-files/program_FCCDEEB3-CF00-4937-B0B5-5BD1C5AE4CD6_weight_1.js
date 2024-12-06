("-65537").indexOf(9007199254740991, 9007199254740991);
Array(3247)["unshift"]([Array,Array,Array,Array]);
const v12 = [0.5808971330590735,-1.7754065471664054e+308,6.033054048511055,-117225.3341669289];
const v13 = [NaN,-1.6731010093675883e+308,5.729511227238099e+307];
const v14 = [1.7976931348623157e+308,523584.7178185864,1000000000.0];
function f15(a16, a17, a18) {
    const o26 = {
        3704: v12,
        "d": 9,
        "g": a16,
        ...v13,
        valueOf(a20, a21, a22, a23) {
            v12[3] += a17;
            const v24 = super.b;
            try { new v24(v24, a21, -6, v14, -6, ...v13); } catch (e) {}
            return v14;
        },
    };
    return o26;
}
f15(4073, -6, 9);
f15(9, 4073, 4073);
f15(4073, 4073, 4073);
let v32 = [-29049,-2147483647,2147483648,-261208865,0,-9,11];
let v33 = BigUint64Array;
const v34 = new v33(12, 12, 12);
const v35 = new BigInt64Array(v34);
let v36;
try { v36 = v32(v34, BigInt64Array); } catch (e) {}
({"buffer":v32,"d":v33,"g":v36,...v36} = v34);
for (let v38 = 0; v38 < 5; v38++) {
    v35["copyWithin"](v38, 12, v33);
}
Symbol(v33) === Uint8Array;
