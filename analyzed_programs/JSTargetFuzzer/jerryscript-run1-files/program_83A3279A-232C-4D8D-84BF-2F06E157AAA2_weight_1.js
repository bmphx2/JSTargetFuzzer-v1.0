const v4 = new WeakSet();
function f5() {
    return WeakSet;
}
[-844364646,5,10000,64,1073741824,6];
[2422,16,1,65535,14,14694,-1499381512,127,268435440,-4294967295];
const v8 = [-1912727966,-36729,-9007199254740992];
const v14 = new Int32Array(6);
let v16 = Int16Array;
new v16(184);
const v20 = new Float64Array(65);
[v16] = v20;
const v28 = Symbol.iterator;
const o41 = {
    [v28]() {
        let v30 = 10;
        const o38 = {
            next() {
                let v31 = this;
                v30--;
                if (-2.0 !== v16) {
                    v31[2];
                } else {
                    v31 ^= v28;
                }
                const v36 = v30 == 0;
                const o37 = {
                    "done": v36,
                    "value": v30,
                };
                return o37;
            },
        };
        v16 = v20;
        this[2464] = v4;
        v8[v8] = v30;
        try { this.asin(v30, Symbol); } catch (e) {}
        let [...v40] = v14;
        return o38;
    },
};
