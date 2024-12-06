function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 2147483649;
    this.g = 2147483649;
    this.d = 2147483649;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v6 = [v5,v3,v4,v5];
let v8;
try { v8 = v3["toString"](); } catch (e) {}
const v9 = [v4,v3,..."toString",v8,v8];
const t13 = "toString";
t13.toString = v8;
function F10(a12, a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a13;
    this.f = "toString";
}
const v16 = new F10(v8, v4, v4, v3);
new F10(v4, v3, v3, v3);
new F10(v3, v8, v4, v8);
function F19(a21, a22) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = v4;
    this.g = v8;
    this.b = v5;
}
new F19(v3, v9);
new F19(v5, v9);
new F19(v8, v3);
const v26 = [v5,v5,v3,v6];
[v5,v6];
function F29(a31, a32) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a31;
    this.b = a32;
    this.c = a31;
}
new F29(v5, v16);
new F29(v4, F10);
const v35 = new F29(v4, v3);
class C39 extends F0 {
    static [16];
    toString(a41, a42, a43, a44) {
        -v26;
        let v46 = 0;
        while (v46 < 4) {
            continue;
            const v52 = 1e-15 << 65536;
            v52 >>> 1e-15;
            let v54 = F0 || 65536;
            --F0;
            v54++;
            Math.max(v52);
            v46++;
        }
        return v6;
    }
    constructor(a60, a61, a62, a63) {
        let v64 = 0;
        while (v64 < 7) {
            let v67;
            try { v67 = new a62(a60, a62, a61); } catch (e) {}
            v35[v67];
            v64++;
        }
        super();
        var b = -2147483647;
        return this;
        16 != F0;
    }
}
new C39();
new C39();
new C39();
let v74 = 409683548n;
let v75 = 41365n;
-2n ^ (v74 *= -(v75--));
