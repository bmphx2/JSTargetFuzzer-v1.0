function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -9007199254740990;
    this.b = -9007199254740990;
    this.g = -9007199254740990;
}
const v3 = new F0();
new F0();
new F0();
new Uint8Array(3);
new Int8Array(2);
new BigUint64Array(1024);
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
const v37 = new Int32Array(249);
new Int32Array(2380);
with ("U7q") {
    length = 2;
    delete v37[6];
    v3[536870889] = 638957980;
}
const v44 = new Float32Array(3269);
v44[v44] = v44;
class C46 {
    [Int32Array] = 249;
    static [2380];
    a;
}
new C46();
new C46();
new C46();
