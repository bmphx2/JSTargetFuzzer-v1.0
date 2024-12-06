function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 65536;
    this.c = 65536;
}
new F0();
const v4 = new F0();
const v5 = new F0();
function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a12;
    this.f = a11;
}
new F9(-268435456, 138378241, 138378241);
new F9(138378241, -268435456, 138378241);
new F9(-268435456, 138378241, v5);
function f20() {
}
[-1024,-12];
[-13,-1073741824,16,255,2147483647,4096,255,-2147483647,-16];
const v23 = [-1024,-2147483648,16,-1024,36693];
function F24(a26, a27) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v23;
    this.f = this;
    this.a = f20;
}
const v28 = new F24(v23, v23);
const v29 = new F24(F24, v23);
const v30 = new F24(v23, v23);
const v33 = new Float32Array(3750);
new Uint16Array(1);
new Uint32Array(1512);
let v42 = -1992735215;
function f43(a44, a45) {
    const o68 = {
        "d": a44,
        set b(a47) {
            let v48;
            try { v48 = a47(a47, this); } catch (e) {}
            v42 = a45;
            v48.valueOf = a47;
            [1073741824,1376563511,1648068270,4];
            [65537,257,-2147483648,-9223372036854775808,1978958659,1350827393];
            [8,-14,9223372036854775807,-29365,-378817509,9007199254740992,-9007199254740990,536870912,129];
            function F52(a54, a55, a56, a57) {
                if (!new.target) { throw 'must be called with new'; }
                this.h = a54;
            }
            const v58 = new F52(v48, a47, this, this);
            new F52(v58, v28, v29, F52);
            new F52(Float32Array, v29, a47, a44);
        },
        "f": 138378241,
        "h": v4,
        "b": Uint16Array,
        [v30]: F24,
        268435440: 3750,
        ...a44,
        get a() {
            a45 = this();
            return super.n();
        },
        get c() {
            const v65 = [this];
            const v66 = [545904634,a44,v65,this,v65];
            [v66,638957980,v66];
            return a45;
        },
        "a": 545904634,
        "f": f20,
        [a45]: a45,
        ...v28,
        [v33]: a44,
    };
    return o68;
}
f43(638957980, v42);
const v70 = f43(v42, 545904634);
f43(v42, v42);
new Int32Array(249);
new Int32Array(2380);
v70[8] = v28;
const v86 = new Float32Array(3269);
v86[v86] = 545904634;
try { null.set(); } catch (e) {}
const v91 = new BigInt64Array();
function f92() {
    return f92;
}
v91.lastIndexOf(f92);
class C94 {
    [Int32Array] = Float32Array;
    static [2380];
    a;
}
new C94();
let v96 = 2110820557n;
v96 /= 11n;
Reflect.apply(("e").endsWith, v33);
new C94();
new C94();
