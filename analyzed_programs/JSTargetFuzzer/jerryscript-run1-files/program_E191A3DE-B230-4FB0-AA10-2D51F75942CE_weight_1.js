function f0() {
}
const v1 = [Infinity,5.0,-1000000000000.0,4.08227743051469,-256.42392126153266,4.624385481479907];
const v2 = [-1000000000.0,0.2132380300146034];
const v3 = [0.7363697938386373,-1.0,-2.2250738585072014e-308,Infinity,-4.0,42290.051633421215,-489.0467395596467];
function f4(a5, a6) {
    const o11 = {
        set b(a8) {
            v1[Symbol.search] = a8;
        },
        "b": v1,
        ...a6,
        "d": v3,
        ...v3,
        ...v2,
        4: f0,
    };
    return o11;
}
const v12 = f4(f4, v2);
const v14 = new Int16Array();
let [,,...v15] = v14;
const v16 = f4(v12, v2);
f4(v16, v16);
const o24 = {
    m(a23) {
        [] = 39946;
        return 39946;
    },
};
try { o24.m(); } catch (e) {}
