const v0 = [0.1585479815700822,NaN,-108.19166807338411,-437.82147751732373];
const v1 = [0.5568591276655592,5.0,1000.0,969.6999201544129,213.61772034707292];
const v2 = [-1.7976931348623157e+308];
function f3(a4, a5) {
    const o12 = {
        [v0](a7, a8) {
            a8.d = this;
            let v9;
            try { v9 = a8(a4, a7, a7, v0, v2); } catch (e) {}
            const v10 = v9 - this;
            try { this.valueOf(v10, v10, a5); } catch (e) {}
            return this;
        },
        [v1]: a4,
        "e": a4,
        __proto__: a4,
        "g": a5,
        "b": a4,
        [a4]: v1,
        "c": v2,
        "a": a5,
    };
    return o12;
}
f3(v2, v0);
f3(v2, v1);
f3(v2, v1);
function f19() {
    return 268435439;
}
const v22 = new Float64Array(9);
new BigInt64Array(185);
new BigInt64Array(13);
const v29 = v22 !== 512;
const v31 = Symbol.toPrimitive;
const o34 = {
    [v31]() {
        !v0;
        this.valueOf = f3;
        return v29;
    },
};
