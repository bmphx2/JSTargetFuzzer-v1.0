const v1 = new Set();
const v7 = new Uint32Array(246);
const v10 = new Int8Array(14);
const v13 = new Uint8Array(127);
function f14(a15, a16) {
    const o23 = {
        "d": 246,
        ...v13,
        __proto__: v1,
        "b": Uint32Array,
        get e() {
            const v18 = this[1];
            super.f = v18;
            v13.valueOf = v18;
            v7.__proto__;
            return 127;
        },
        ...v10,
    };
    return o23;
}
f14(246, -4096);
function f25(a26, a27, a28) {
    const o29 = {
        "apply": f14,
        "get": f14,
        "getOwnPropertyDescriptor": f14,
        "has": f14,
    };
    new Proxy(v13, o29);
    return a28;
}
f25(4096, 14, -4096);
let v33 = f14(14, 14);
const v34 = f14(14, 1073741824);
let v37 = -1992735215;
function f38(a39, a40) {
    const o48 = {
        "d": a39,
        set b(a42) {
            let v43;
            try { v43 = a42(a42, this); } catch (e) {}
            v37 = a40;
            v43.valueOf = a42;
        },
        get c() {
            const v45 = [this];
            const v46 = [545904634,a39,v45,this,v45];
            [v46,a39,v46];
            return a40;
        },
    };
    return o48;
}
f38(638957980, v37);
f38(v37, 545904634);
f38(v37, v37);
new Int32Array(249);
new Int32Array(2380);
const v60 = new Float32Array(3269);
v60[v60] = v60;
class C62 {
    [Int32Array] = 249;
    static m(a64, a65) {
        v33 = v34;
        return !this;
    }
    static [2380];
    a;
}
new C62();
new C62();
new C62();
