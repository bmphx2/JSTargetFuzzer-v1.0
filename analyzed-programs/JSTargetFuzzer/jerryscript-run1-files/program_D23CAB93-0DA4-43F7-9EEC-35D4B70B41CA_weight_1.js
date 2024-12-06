function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a5;
}
const v7 = new F3(-39456n, -35601n);
const v8 = new F3(F3, -35601n);
let v9 = new F3(-39456n, 64n);
let v10 = 0;
while (v10 < 8) {
    v9[1073741823] = v10;
    break;
    v10++;
}
function f14(a15, a16, a17, a18) {
    const o25 = {
        "b": v9,
        "c": -39456n,
        "f": -35601n,
        __proto__: a18,
        [-35601n]: F3,
        [v9](a20, a21) {
            try { new a15(this, a17, a20, a16, a20, 64n); } catch (e) {}
            const v23 = a20.b;
            super.h = F3;
            a20 === v23;
            super.c = v23;
            return a17;
        },
    };
    return o25;
}
const v26 = f14(v9, v7, v8, v8);
const v27 = f14(f14, v9, v26, v8);
v9 = f14(v8, v8, v8, v26);
function f29() {
    return v8;
}
const v31 = [-807222.1295254863,-0.38273613600899914,2.220446049250313e-16,-4.572514672146979,-2.2250738585072014e-308,2.2250738585072014e-308,-1.7976931348623157e+308,-5.0,Infinity];
v27[v31] = -39456n;
f29 = f14;
new Uint32Array(v31);
