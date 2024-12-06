const v0 = [45452,536870889,-1743,-4294967297,8];
const v1 = [246408353,-4096,255,6,45512,3,9007199254740992,6,1000];
const v2 = [10];
let v5 = new Array(3);
function f6(a7, a8, a9) {
    const o24 = {
        [a8]: a9,
        7: f6,
        [a9]: a8,
        "b": v2,
        "d": v1,
        [Array]: a8,
        n(a11, a12, a13, a14) {
            let v15 = 10;
            for (; v15--;) {
                const o19 = {
                    "maxByteLength": 65536,
                };
                const v21 = new SharedArrayBuffer(3061, o19);
                new Float32Array(v21);
            }
            return v5;
        },
    };
    v1 << o24;
    v5 = v1;
    return o24;
}
f6(v1, v2, v5);
f6(v1, v1, v1);
const v31 = f6(v5, v0, v0);
const v33 = [v1,v31,v2,3,Array];
const v34 = [3,Array,false,v33,v33];
[v31,3,v34,f6,v34];
const o39 = {
    get c() {
        try {
        const t0 = -62858;
        t0();
        } catch (e) {}
        return -62858;
    },
};
Number["isSafeInteger"]();
