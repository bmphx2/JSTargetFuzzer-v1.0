const v1 = new WeakMap();
const v2 = [v1,WeakMap,v1,v1];
const v3 = [v2,v2,WeakMap,v1,WeakMap];
[v1];
class C8 {
    #g = v3;
    static {
        try { this.copyWithin(-1073741824n); } catch (e) {}
        new Uint16Array(4);
        new Int32Array(4096);
        new Int32Array(3953);
    }
}
const v20 = new C8();
new C8();
const v22 = new C8();
new C8();
v20[5] = 2n;
7n in v22;
v3.valueOf = v20;
/(?:foo)[\xe2\x81\xa3]/umid;
/(a)\1/uy;
/7o\8/gms;
