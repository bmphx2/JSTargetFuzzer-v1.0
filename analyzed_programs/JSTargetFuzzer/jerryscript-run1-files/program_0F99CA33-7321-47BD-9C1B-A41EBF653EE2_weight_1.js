const v0 = [];
function f1() {
    const o13 = {
        get a() {
            e = this;
            let v4;
            try {
            const t0 = null;
            v4 = t0(this, null, this, null);
            } catch (e) {}
            let v5;
            try { v5 = v4(null, v4, v0); } catch (e) {}
            function F6(a8, a9) {
                if (!new.target) { throw 'must be called with new'; }
                this.g = a8;
                this.c = v5;
            }
            new F6(v0, v0);
            new F6(null, null);
            new F6(F6, v0);
            return null;
        },
    };
    return o13;
}
f1();
f1();
f1();
new Float32Array(255);
new Uint16Array(3410);
new Uint32Array(2);
const v26 = [1024,-536870912,-7939];
const v27 = [127,-4294967296];
const v28 = [1262143293,15,46313,5,2147483649];
function f29() {
    return v28;
}
const v30 = [f29,f29,v27];
const v31 = [v30,v26,f29,v30];
[v31,v31];
new Float64Array(v30);
const v38 = new Uint32Array(1);
new f29(2);
const v45 = [65535n,0n,964329252n];
let v46 = [964329252n,964329252n,v45,v45];
const v47 = [v46,v46,v45,964329252n,0n];
const v48 = [65535n,v46];
[v47,0n];
const v50 = [v46];
const t47 = "fdNr";
t47[0] = 65535n;
let v57;
try {
const t0 = "localeCompare";
v57 = new t0(v45, v50, 964329252n, 58270);
} catch (e) {}
async function* f58(a59, a60, a61) {
    ({"length":a59,...v46} = v38);
    await (yield v45);
    yield "fdNr";
    return a59;
}
f58(58270, v48, v57);
