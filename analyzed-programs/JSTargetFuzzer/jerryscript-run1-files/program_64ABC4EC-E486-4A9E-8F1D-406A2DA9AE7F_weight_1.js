let v0 = -4294967296;
const v6 = [2.0,v0,4];
const v7 = [v0,v6,v0,v6];
[v7,v0,4,2.0];
const v11 = Symbol.unscopables;
let v12 = 0;
do {
    for (let v13 = 0; v13 < 32; v13++) {
        Symbol["p" + v13] = v13;
    }
    v12++;
} while (v12 >= 4)
const v19 = ("number")[v11];
v0 **= 4;
for (let v20 = 0; v20 < 32; v20++) {
    v11["p" + v20] = v20;
}
const v27 = Array(504);
function f28(a29, a30) {
    const o31 = {
        ["d"]: a30,
        "h": v27,
        ...v7,
        "b": v11,
        "g": a30,
        ...v11,
        "c": a30,
    };
    return o31;
}
f28(4, v27);
f28(4, v7);
f28(9007199254740992, v19);
function f35() {
    return Array;
}
const o44 = {
    p(a38, a39, a40, a41) {
        (Array / Array) * a41;
    },
};
v27[undefined] = f35;
