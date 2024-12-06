const v0 = [15493,1073741824,-256,14402,257,10,65537,-65535];
const v1 = [1073741825,14];
const v2 = [-9,1024,-1359393030,9007199254740990];
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v2;
    this.b = v0;
    this.g = v2;
}
const v7 = new F3(v0, v2);
const v8 = new F3(v2, v1);
const v9 = new F3(v0, v0);
function f10(a11, a12) {
    const o20 = {
        "e": a11,
        1: a12,
        1073741823: v9,
        "a": a12,
        n(a14, a15) {
            let v16;
            try { v16 = v1(this, ...a11, ...v0, ...v8, this); } catch (e) {}
            [a12,,a14] = a15;
            const v18 = Symbol.iterator;
            this[v18] = a12;
            try { v18.setInt32(a12); } catch (e) {}
            a15[v0] /= v16;
            return a11;
        },
    };
    return o20;
}
const v21 = f10(v9, v8);
const v22 = f10(v0, v8);
const v23 = f10(v8, v8);
function f24(a25, a26, a27, a28) {
    const o41 = {
        get e() {
            v21.a;
            let v34 = !4;
            Math.hypot(f10);
            4 << v34;
            Math.floor(-65536);
            v34--;
            Math.log2((-65536) ** -65536);
            return v1;
        },
    };
    return o41;
}
f24(v2, v0, v2, v8);
f24(v1, v1, v1, v22);
f24(v2, v1, v1, v7);
const v48 = [65535n,0n,964329252n];
let v49 = [964329252n,964329252n,v48,v48];
const v50 = [v49,v49,v48,964329252n,0n];
const v51 = [65535n,v49];
[v50,0n];
const v53 = [v49];
const t58 = "fdNr";
t58[0] = 65535n;
let v60;
try {
const t0 = "localeCompare";
v60 = new t0(v48, v53, v53, 58270);
} catch (e) {}
async function* f61(a62, a63, a64) {
    ({"length":a62,...v49} = a63);
    yield v23;
    await a62;
    yield "fdNr";
    return a62;
}
f61(58270, v51, v60);
