const v0 = [0];
const v1 = [2034978321,-4294967297,-51091,127,6,257,-1073741824,1073741824,-16,-3709];
const v2 = [6,-53726,-2147483647,0,-65535,268435456,-19032,127];
const v3 = [0.4242244738709853,2.7722550283992575,1.7216949874776105e+308,-1e-15,2.920178865580475,-761530.1572657857,-396.28248676315866,-1.0,-1000000000.0];
const v4 = [-2.2250738585072014e-308,-4.3981122878363905,3.0,0.0];
const v5 = [-2.0,-0.0,-960.4712394402454,0.9436337433444315,-299568.90261136065,844.7105523230982];
function F6(a8, a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = v5;
    this.d = a9;
}
const v12 = new F6(v5, v3, v4, v2);
const v13 = new F6(v1, v3, v1, v3);
const v14 = new F6(v4, v0, v5, v2);
function f15(a16, a17, a18) {
    const o24 = {
        set b(a20) {
            f = a20;
            for (let v21 = 0; v21 < 32; v21++) {
                v2["p" + v21] = v21;
            }
        },
        "e": v5,
        [v5]: a18,
        [a17]: v4,
    };
    return o24;
}
f15(v2, v0, v12);
f15(v5, v3, v13);
f15(v3, v0, v14);
const v28 = [1024,-536870912,-7939];
const v29 = [127,-4294967296];
const v30 = [1262143293,15,46313,5,2147483649];
function f31() {
    return v30;
}
const v32 = [f31,f31,v29];
const v33 = [v32,v28,f31,v32];
[v33,v33];
new Float64Array(v32);
const v40 = new Uint32Array(1);
const v44 = new Int8Array();
const o45 = {
    __proto__: v44,
};
try { o45["fill"](); } catch (e) {}
new f31(2);
const v52 = [65535n,0n,964329252n];
let v53 = [964329252n,964329252n,v52,v52];
const v54 = [v53,v53,v52,964329252n,0n];
const v55 = [65535n,v53];
[v54,0n];
const v57 = [v53];
const t52 = "fdNr";
t52[0] = 65535n;
let v64;
try {
const t0 = "localeCompare";
v64 = new t0(v52, v57, 964329252n, 58270);
} catch (e) {}
async function* f65(a66, a67, a68) {
    ({"length":a66,...v53} = v40);
    await (yield v52);
    yield "fdNr";
    return a66;
}
f65(58270, v55, v64);
