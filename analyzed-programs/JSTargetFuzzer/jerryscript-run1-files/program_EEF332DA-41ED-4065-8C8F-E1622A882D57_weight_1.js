function f0() {
}
function f1() {
    return f0;
}
class C2 extends f1 {
    m(a4, a5) {
        for (let v6 = 0; v6 < 32; v6++) {
            a5["p" + v6] = v6;
        }
        try { a5(f0); } catch (e) {}
        super.e;
        return this;
    }
    f;
    static a = f0;
    [f0];
}
const v11 = new C2();
const v12 = new C2();
const v13 = new C2();
[v11,v13,C2,f0,v13];
[[f1,v13],v11,v12];
new Date();
function F22() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 1024;
    this.a = 1024;
}
const v25 = new F22();
new F22();
const v27 = new F22();
[1801814284,v27,1801814284,v25];
[F22];
[v27,-2];
[Infinity,228711.8701669043,1000.0,0.6549688747910699];
[0.7717665177211909,-838.3936909463185,-0.0];
const v36 = [Infinity,0.0,0.4397360972148665,1000.0,2.2250738585072014e-308,-1000000000.0];
const o37 = {
};
const v39 = new Proxy(v36, o37);
const o40 = {
};
new Proxy(v39, o40);
try { F22(); } catch (e) {}
o37.a = v25;
