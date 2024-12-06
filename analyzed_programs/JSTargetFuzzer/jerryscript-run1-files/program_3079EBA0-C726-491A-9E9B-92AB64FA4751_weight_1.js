class C3 {
    m(a5) {
        super.e = a5;
        const v7 = "k" != "k" ? "k" : "k";
        for (let v8 = 0; v8 < 32; v8++) {
            v7["p" + v8] = v8;
        }
        return v7.length;
    }
    g = -4294967296;
    d = -4294967296;
    [1] = "k";
}
const v12 = new C3();
const v13 = new C3();
const v14 = new C3();
function F15(a17, a18, a19) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a18;
    this.h = v14;
    this.g = a18;
    if (a17) {
    } else {
        var e = a19;
    }
}
new F15(v14, v12, v13);
new F15(v12, v14, v13);
new F15(v14, v12, v12);
function F24() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 1024;
    this.a = 1024;
}
const v27 = new F24();
new F24();
const v29 = new F24();
[1801814284,v29,1801814284,v27];
[F24];
[v29,-2];
[Infinity,228711.8701669043,1000.0,0.6549688747910699];
[0.7717665177211909,-838.3936909463185,-0.0];
const v38 = [Infinity,0.0,0.4397360972148665,1000.0,2.2250738585072014e-308,-1000000000.0];
const o39 = {
};
const v41 = new Proxy(v38, o39);
const o42 = {
    ...v27,
    "f": v12,
    ...v29,
    ...v41,
    9: v41,
};
new Proxy(v41, o42);
try { F24(); } catch (e) {}
o39.a = v27;
