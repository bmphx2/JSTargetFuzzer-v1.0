const v0 = [9];
const v1 = [-13893,45742,13];
const v2 = [-46889,-17109,0,4294967296,-4096,9,16,268435441,-7,39820];
const v3 = [v2];
const v4 = [v2,v1,v1,v3,v1];
const v5 = [v3,v4,v2,v4,v1];
const v6 = [2147483648,-63984,1073741825];
const v7 = [1073741823,536870888,6,-2147483647,10];
const v8 = [-1024,16];
function f9(a10, a11, a12, a13) {
    const o14 = {
        "h": v5,
        "e": v5,
        __proto__: v7,
        ...a10,
        "a": a12,
        "d": a13,
        51: v3,
        [-1]: v0,
        "f": v5,
        [v3]: a11,
    };
    return o14;
}
f9(v5, v1, v6, v1);
f9(v7, v4, v7, v8);
const v24 = f9(v5, v7, v4, v2);
class C25 {
    constructor(a27) {
        for (let [i32, i33] = (() => {
                new Uint8Array(this, a27, a27);
                return [0, 10];
            })();
            (() => {
                ~this;
                super.d;
                try { v24.round(a27, v24, this, "p", a27); } catch (e) {}
                return i32 < i33;
            })();
            i32++) {
        }
        try { new C25(); } catch (e) {}
    }
}
new C25();
