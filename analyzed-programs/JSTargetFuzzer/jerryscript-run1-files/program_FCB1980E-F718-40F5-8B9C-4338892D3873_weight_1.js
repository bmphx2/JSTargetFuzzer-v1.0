function F6(a8, a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a11;
    this.h = -128;
}
new F6(-256, 1, 129, 1);
new F6(-128, -256, 9007199254740991, -256);
new F6(1, 9007199254740991, 1, 129);
let v20 = -1992735215;
function f21(a22, a23) {
    const o31 = {
        "d": a22,
        set b(a25) {
            let v26;
            try { v26 = a25(a25, this); } catch (e) {}
            v20 = a23;
            v26.valueOf = a25;
        },
        get c() {
            const v28 = [this];
            const v29 = [545904634,a22,v28,this,v28];
            [v29,a22,v29];
            return a23;
        },
    };
    return o31;
}
f21(638957980, v20);
f21(v20, 545904634);
f21(v20, v20);
new Int32Array(249);
("p").lastIndexOf();
const v42 = new BigInt64Array();
with (v42) {
}
new Int32Array(2380);
const v47 = new Float32Array(3269);
v47[v47] = v47;
class C49 {
    [Int32Array] = 249;
    static [2380];
    a;
}
new C49();
new C49();
47553950n ^ -1072888550n;
try { (1000n).toString(255); } catch (e) {}
new C49();
