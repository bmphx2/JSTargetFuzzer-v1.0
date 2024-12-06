new WeakMap();
let v17 = -1992735215;
function f18(a19, a20) {
    const o27 = {
        "d": a19,
        set b(a22) {
            let v23;
            try { v23 = a22(); } catch (e) {}
            v17 = a20;
            v23.valueOf = a22;
        },
        get c() {
            const v25 = [this];
            [545904634,a19,v25,this,v25];
            return 638957980;
        },
    };
    return o27;
}
f18(638957980, v17);
f18(v17, 545904634);
f18(v17, v17);
new Int32Array(249);
new Int32Array(2380);
const v38 = new Float32Array(3269);
v38[v38] = v38;
class C39 {
    [Int32Array] = 249;
    static [2380];
    a;
}
new C39();
function F52(a54, a55, a56, a57) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a57;
    this.f = -4294967296;
}
new F52(-4294967296, 5n, "global", "-16");
new F52(-4294967296, -7n, "-16", "global");
const v60 = new F52(-4294967296, 5n, "global", "global");
if ("function" == v60) {
} else {
    function F65(a67, a68, a69) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a69;
    }
    const v70 = new F65(F65, "global", "function");
    new F65(v70, "global", "function");
    new F65(v70, "global", "function");
}
