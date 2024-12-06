const v0 = [2,127,-9007199254740991,-9223372036854775807,-6,-65535];
const v1 = [9,57639,-61117,-5];
const v2 = [-15,268435440,-1846962859,7,512,-13,-2147483647,268435439];
function f3() {
    return v2;
}
function f4() {
    return v2;
}
class C8 {
    constructor(a10, a11) {
        this.e;
        super.g = v0;
        function F13(a15, a16, a17) {
            if (!new.target) { throw 'must be called with new'; }
            this.h = a17;
            this.d = v0;
            this.e = v0;
        }
        new F13(v0, a10, a11);
        new F13(-15552, a10, this);
        new F13(v2, 255, v1);
    }
}
const v21 = new C8(-15552, v1);
const v22 = new C8(-15552, v2);
const v23 = new C8(255, v0);
let v26 = -1992735215;
function f27(a28, a29) {
    const o37 = {
        "d": a28,
        set b(a31) {
            let v32;
            try { v32 = a31(a31, this); } catch (e) {}
            v26 = a29;
            v32.valueOf = a31;
        },
        get c() {
            const v34 = [this];
            const v35 = [545904634,a28,v34,this,v34];
            [v35,a28,v35];
            return a29;
        },
    };
    return o37;
}
const v38 = f27(638957980, v26);
const v39 = f27(v26, 545904634);
const v40 = f27(v26, v26);
v23[v38];
Object.defineProperty(v21, 6, { configurable: true, value: v38 });
v1.__proto__ = v22;
v39 !== v23;
v40.__proto__;
new Int32Array(249);
new Int32Array(2380);
const v52 = new Float32Array(3269);
v52[v52] = v52;
class C54 {
    [Int32Array] = 249;
    static [2380];
    a;
}
new C54();
new C54();
new C54();
