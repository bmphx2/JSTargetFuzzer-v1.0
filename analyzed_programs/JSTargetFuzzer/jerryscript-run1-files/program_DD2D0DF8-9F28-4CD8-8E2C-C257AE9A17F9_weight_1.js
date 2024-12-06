const v1 = new WeakSet();
function f2() {
    return v1;
}
const v4 = f2();
v4[f2] ^= f2;
const v5 = v4[2147483648];
let v6 = 5;
let v12;
try { v12 = v5(); } catch (e) {}
try { new v12(v1, v6, v4, 268435439n, WeakSet); } catch (e) {}
const v19 = [v1,9007199254740990n,268435440n,v1,268435456n];
function f20() {
    return f20;
}
function f21(a22) {
    let v25 = 1000.0;
    Math.abs(v25);
    const v27 = --v25;
    +v6;
    v6++;
    Math.sin(v6);
    (v25 >>> v6) & v27;
    return a22;
}
class C33 extends f21 {
    [-2] = 9007199254740990n;
}
class C34 extends f20 {
}
[268435440n,1073741825n,f2,f2];
[1073741825n];
new WeakSet();
0 < 8;
[WeakSet,v19,[268435456n,WeakSet,"toPrimitive"]];
[65537];
v4.length = 4096;
const v52 = [65535n,0n,964329252n];
let v53 = [964329252n,964329252n,v52,v52];
const v54 = [v53,v53,v52,964329252n,0n];
const v55 = [65535n,v53];
[v54,0n];
const v57 = [v53];
class C62 {
    6 = 0;
}
const o63 = {
};
const t48 = "fdNr";
t48[0] = 65535n;
let v66;
try {
const t0 = "localeCompare";
v66 = new t0(v52, v57, v57, 58270);
} catch (e) {}
async function* f67(a68, a69, a70) {
    ({"length":a68,...v53} = a69);
    yield v52;
    await a68;
    yield "fdNr";
    return a68;
}
f67(58270, v55, v66);
function F75(a77, a78, a79) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a77;
    this.e = a79;
}
const v80 = new F75(4096, v12, 268435456n);
new F75(4096, v80, v12);
new F75(f67, v4, v5);
