const v0 = [-1206315570,9007199254740991,-9007199254740992,-4294967297,4294967297,55719,-3,16,59363,7];
const v1 = [1445165328,991790765,65537,3,342070681,1024];
const v2 = [-51165876];
class C3 {
    constructor(a5, a6) {
        for (let v7 = 0; v7 < 32; v7++) {
            this["p" + v7] = v7;
        }
    }
    get f() {
        let v11;
        try { v11 = new this(v0, this, v1, v1, this); } catch (e) {}
        function F13(a15, a16) {
            if (!new.target) { throw 'must be called with new'; }
            function f17(a18, a19, a20) {
                return a18;
            }
            f17(v2, v1, f);
            this.a = f;
            this.d = a15;
        }
        const v25 = new F13(v11, v11);
        new F13(v25, v2);
        const v27 = new F13(f, v2);
        return v27;
    }
}
const v28 = new C3(v1, v2);
const v29 = new C3(v1, v1);
new C3(v0, v0);
let v33 = 0;
while (v33 < 2) {
    new Uint8ClampedArray(1024);
    new Int8Array(1603);
    new Uint16Array(3840);
    v33++;
}
const v50 = [-12,v29];
const v51 = [C3];
["v",v51,"v",v51,v51];
const v53 = [1024,-536870912,-7939];
const v54 = [127,-4294967296];
const v55 = [1262143293,15,46313,5,2147483649];
function f56() {
    return v55;
}
const v57 = [f56,f56,v54];
const v58 = [v57,v53,f56,v57];
[v58,v58];
const v62 = new Float64Array(v57);
const v65 = new Uint32Array(1);
new f56(2);
function f70(a71, a72, a73, a74) {
    a73.length = 3663922833;
    return v50;
}
f70(v33, "271530827", v62, v28);
const v79 = [65535n,0n,964329252n];
let v80 = [964329252n,964329252n,v79,v79];
const v81 = [v80,v80,v79,964329252n,0n];
const v82 = [65535n,v80];
[v81,0n];
const v84 = [v80];
const t61 = "fdNr";
t61[0] = 65535n;
let v91;
try {
const t0 = "localeCompare";
v91 = new t0(v79, v84, 964329252n, 58270);
} catch (e) {}
async function* f92(a93, a94, a95) {
    const v97 = [2,a95];
    Reflect.apply(("fdNr").padEnd, v57, v97);
    try { Reflect.preventExtensions(Reflect); } catch (e) {}
    ({"length":a93,...v80} = v65);
    await (yield v79);
    yield "fdNr";
    return a93;
}
f92(58270, v82, v91);
