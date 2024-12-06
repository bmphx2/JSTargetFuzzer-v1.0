function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a12;
}
new F9(1073741824n, -9223372036854775808n);
new F9(-9223372036854775808n, 1073741824n);
new F9(-536870912n, -9223372036854775808n);
const v19 = [1024,-536870912,-7939];
const v20 = [127,-4294967296];
const v21 = [1262143293,15,46313,5,2147483649];
function f22() {
    return v21;
}
const v23 = [f22,f22,v20];
const v24 = [v23,v19,f22,v23];
[v24,v24];
new Float64Array(v23);
const v31 = new Uint32Array(1);
new f22(2);
const v38 = [65535n,0n,964329252n];
let v39 = [964329252n,964329252n,v38,v38];
const v40 = [v39,v39,v38,964329252n,0n];
const v41 = [65535n,v39];
[v40,0n];
const v43 = [v39];
const t23 = "fdNr";
t23[0] = 65535n;
let v50;
try {
const t0 = "localeCompare";
v50 = new t0(v38, v43, 964329252n, 58270);
} catch (e) {}
Symbol("localeCompare");
const o54 = {
    ..."M6mqb",
};
async function* f55(a56, a57, a58) {
    ({"length":a56,...v39} = v31);
    await (yield v38);
    yield "fdNr";
    return a56;
}
f55(58270, v41, v50);
