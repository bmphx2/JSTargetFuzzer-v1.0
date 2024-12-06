const v0 = [];
class C2 {
    static n(a4, a5) {
        return v0[Symbol.unscopables];
    }
    static a = v0;
    static [v0] = v0;
    static p(a10, a11) {
        let v12 = 10;
        for (; v12--;) {
            this[a10] &= v12;
        }
        return this;
    }
}
new C2();
const v18 = new C2();
new C2();
function F23(a25, a26, a27) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = F23;
    this.f = a27;
    this.g = 13;
}
new F23(65228, 65228, v18);
const v29 = new F23(5, 65228, v0);
new F23(65228, 65228, v29);
function f31() {
    return 65228;
}
let v34 = -1992735215;
function f35(a36, a37) {
    const o45 = {
        "d": a36,
        set b(a39) {
            try { a39(a39, this); } catch (e) {}
            v34 = a37;
            a36.valueOf = a39;
        },
        get c() {
            const v42 = [this];
            const v43 = [545904634,a36,v42,this,v42];
            [v43,a36,v43];
            return a37;
        },
    };
    return o45;
}
f35(638957980, v34);
f35(v34, 545904634);
f35(v34, v34);
new Int32Array(249);
new Int32Array(2380);
const v57 = new Float32Array(3269);
v57[v57] = v57;
class C59 {
    [Int32Array] = 249;
    static [2380];
    a;
}
new C59();
new C59();
new C59();
