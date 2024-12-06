function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 9223372036854775807;
}
const v3 = new F0();
new F0();
new F0();
const v12 = [268435456,1619546981,21363];
const v13 = [7,1073741824,4096,-33373,-1024,11,1073741824,0,-11,-268435456];
const v14 = [1262143293,15,46313,5,2147483649];
function f15() {
    return v14;
}
const v16 = [f15,f15,v13];
const v17 = [v16,v12,f15,v16];
[v17,v17];
new Float64Array(v16, 4096, v3);
const v24 = new Uint32Array(1);
new f15(2);
const v31 = [-1n,0n,964329252n];
let v32 = [964329252n,964329252n,v31,v31];
const v33 = [v32,v32,v31,964329252n,0n];
const v34 = [-1n,v32];
[v33,0n];
const v36 = [v32];
const t23 = "message";
t23[0] = -1n;
let v43;
try {
const t0 = "localeCompare";
v43 = new t0(v31, v36, 964329252n, 58270);
} catch (e) {}
async function* f44(a45, a46, a47) {
    ({"length":a45,...v32} = v24);
    await (yield v31);
    yield "message";
    return a45;
}
f44(58270, v34, v43);
