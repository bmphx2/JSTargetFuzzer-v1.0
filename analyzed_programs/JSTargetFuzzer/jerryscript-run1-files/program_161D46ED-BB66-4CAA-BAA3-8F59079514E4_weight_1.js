function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = -1385105972;
    this.e = 2147483648;
}
new F3(-1385105972, -1385105972);
const v8 = new F3(-1385105972, 13);
const v9 = new F3(-1385105972, -1385105972);
function F11(a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = F3;
}
const v15 = new F11(v9, -1385105972);
const v16 = new F11(v8, 2147483648);
new F11(v9, 2147483648);
function f18() {
    return 13;
}
function f19() {
    return v16;
}
let v25 = -1992735215;
function f26(a27, a28) {
    const o36 = {
        "d": a27,
        set b(a30) {
            let v31;
            try { v31 = a30(a30, this); } catch (e) {}
            v25 = a28;
            v31.valueOf = a30;
        },
        get EPSILON() {
            const v33 = [this];
            const v34 = [545904634,a27,v33,this,v33];
            [v34,a27,v34];
            return a28;
        },
    };
    return o36;
}
f26(256, v25);
f26(v25, 545904634);
f26(v25, v25);
new Int32Array(249);
new Int32Array(2380);
const v48 = new Float32Array(3269);
v48[v48] = v48;
for (let v50 = 0; v50 < 32; v50++) {
    v15["o" + v50] = v50;
}
class C53 {
    [Int32Array] = 249;
    static [2380];
    a;
}
new C53(Float32Array, true, 249);
new C53();
new C53();
