function f0() {
}
[f0,f0,f0,f0];
const v2 = [f0];
const v3 = [v2,v2,v2];
[v2,v3,268435441,[v2,v3]];
[f0,268435441,v2];
function f10() {
}
function f11() {
    const o17 = {
        get g() {
            new this();
            return f10;
        },
        "h": f10,
        ...f10,
        "g": f10,
        "a": v2,
        ...f10,
    };
    const v18 = [54783,-268435456,46487,11,-1059659455,16,65537];
    const t22 = [-9223372036854775807,-112563030,128,1073741825,-10,4,-27957,-1,4];
    t22[-62483] = v18;
    const v22 = [4,4,4,4,4];
    const v24 = 4 / 0;
    v24 < v22[903];
    return o17;
}
let v27 = f11();
const v30 = new Int8Array(1000);
for (const v31 in v30) {
    const v33 = v31 * v31;
    v33 * (-7 & v33);
}
const v36 = f11();
f11();
let v40 = Int32Array;
let v41 = new v40(4096);
new Uint32Array(129);
const v47 = new Int16Array(512);
[,v40,v27,v41] = v47;
v36.g += 4096;
const v49 = Symbol.iterator;
const o58 = {
    [v49]() {
        let v51 = 10;
        const o57 = {
            next() {
                v51--;
                const v55 = v51 == 0;
                const o56 = {
                    "done": v55,
                    "value": v51,
                };
                return o56;
            },
        };
        return o57;
    },
};
