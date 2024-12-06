const v3 = ["f"];
const v4 = [v3,"asIntN","f","EG","EG"];
const v5 = ["f",v3,"f",v4];
const v9 = [];
const v12 = Reflect.apply(v9.pop, v9, v5);
function F16(a18, a19, a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a21;
}
const v22 = new F16("asIntN", v5, 1073741824n, "EG");
new F16("f", v4, 1073741824n, "EG");
new F16("asIntN", v22, -3n, "EG");
const v25 = [1024,-536870912,-7939];
const v26 = [127,-4294967296];
const v27 = [1262143293,15,46313,5,2147483649];
function f28() {
    return v27;
}
const v29 = [f28,f28,v26];
const v30 = [v29,v25,f28,v29];
[v30,v30];
new Float64Array(v29);
const v37 = new Uint32Array(1);
new f28(2);
const v44 = [65535n,0n,964329252n];
let v45 = [964329252n,964329252n,v44,v44];
const v46 = [v45,v45,v44,964329252n,0n];
const v47 = [977677784,-4230];
function f48(a49, a50, a51) {
    return a51;
}
v47.reduceRight(f48);
const v53 = [65535n,v45];
[v46,0n,v53,Uint32Array,v12];
const v55 = [v45];
const t33 = "fdNr";
t33[0] = 65535n;
let v62;
try {
const t0 = "localeCompare";
v62 = new t0(v44, v55, 964329252n, 58270);
} catch (e) {}
async function* f63(a64, a65, a66) {
    ({"length":a64,...v45} = v37);
    await (yield v44);
    yield "fdNr";
    return a64;
}
f63(58270, v53, v62);
