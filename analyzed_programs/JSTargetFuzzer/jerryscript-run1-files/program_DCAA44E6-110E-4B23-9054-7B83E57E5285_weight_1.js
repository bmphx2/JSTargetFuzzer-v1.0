const v1 = new WeakSet();
function f2() {
    return v1;
}
const v4 = f2();
v4[f2] ^= f2;
const v5 = v4[2147483648];
let v12;
try { v12 = v5(); } catch (e) {}
try { new v12(v1, 5, v4, 268435439n, WeakSet); } catch (e) {}
const v19 = [v1,9007199254740990n,268435440n,v1,268435456n];
function f20() {
    return f20;
}
function f21(a22) {
    return a22;
}
class C23 extends f21 {
    [-2] = 9007199254740990n;
}
class C24 extends f20 {
}
[268435440n,1073741825n,f2,f2];
[1073741825n];
new WeakSet();
0 < 8;
[WeakSet,v19,[268435456n,WeakSet,"toPrimitive"]];
[65537];
v4.length = 4096;
const v42 = [65535n,0n,964329252n];
let v43 = [964329252n,964329252n,v42,v42];
const v44 = [v43,v43,v42,964329252n,0n];
const v45 = [65535n,v43];
[v44,0n];
const v47 = [v43];
class C52 {
    6 = 0;
}
const o53 = {
};
const t40 = "fdNr";
t40[0] = 65535n;
let v56;
try {
const t0 = "localeCompare";
v56 = new t0(v42, v47, v47, 58270);
} catch (e) {}
async function* f57(a58, a59, a60) {
    ({"length":a58,...v43} = a59);
    yield v42;
    await a58;
    yield "fdNr";
    return a58;
}
f57(58270, v45, v56);
