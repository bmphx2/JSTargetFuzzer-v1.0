const v3 = [536870912,12,13,9007199254740992,256,65535,141518456,512,-6];
[-536870912,-2822,9007199254740990,-4096,0,268435440];
const v5 = [65535,36404,1073741825,-2,39660];
const v9 = [Infinity,-0.0,1.284571476791911e+308,-2.220446049250313e-16,-2.2250738585072014e-308,2.2250738585072014e-308,1.7976931348623157e+308];
[-0.0,0.6752587198407476,-2.303641349633448e+307,Infinity];
[9.911536381711098,-3.321522511382417,NaN,-1000000000000.0,-1000000.0,2.220446049250313e-16];
function f14() {
    return v9;
}
try { ("toUpperCase").startsWith("charCodeAt", v5); } catch (e) {}
const v18 = Symbol.iterator;
const o27 = {
    [v18]() {
        let v20 = 10;
        const o26 = {
            next() {
                v20--;
                const v24 = v20 == 0;
                const o25 = {
                    "done": v24,
                    "value": v20,
                };
                return o25;
            },
        };
        return o26;
    },
};
new Uint8ClampedArray(2581);
new BigUint64Array(7);
new Float32Array(9);
function F43(a45, a46, a47, a48) {
    if (!new.target) { throw 'must be called with new'; }
    const t33 = -7n;
    t33.d = a48;
    this.f = -4294967296;
}
new F43(-4294967296, 5n, "global", v9);
new F43(-4294967296, -7n, 255, "global");
const v51 = new F43(-4294967296, 5n, -4294967296, "global");
if ("function" == v51) {
} else {
    function F56(a58, a59, a60) {
        if (!new.target) { throw 'must be called with new'; }
        const t44 = "7";
        t44.c = a60;
    }
    const v61 = new F56(F56, -4294967296, "function");
    new F56(v61, "global", "function");
    new F56(v61, "global", v3);
}
