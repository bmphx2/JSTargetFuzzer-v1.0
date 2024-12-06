function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = f0;
}
const v3 = new F1();
new F1();
function f5(a6) {
    return v3;
}
class C7 extends f5 {
    static 9;
    static h;
}
const v8 = new F1();
function F12(a14, a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a17;
    this.b = f0;
    this.d = 268435440n;
}
const v18 = new F12(268435440n, -4n, -4n, v8);
new F12(-4n, 268435440n, -4n, v3);
new F12(-4n, 10000n, 268435440n, v8);
function F21() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 1024;
    this.a = 1024;
    for (let v24 = 0; v24 < 26; v24++) {
        F12 >> 1024;
    }
}
const v29 = new F21();
new F21();
const v31 = new F21();
const v35 = [1801814284,v31,1801814284,v29];
[F21];
[v31,-2];
[Infinity,228711.8701669043,1000.0,0.6549688747910699];
[0.7717665177211909,-838.3936909463185,-0.0];
const v40 = [Infinity,0.0,0.4397360972148665,1000.0,2.2250738585072014e-308,-1000000000.0];
const o41 = {
};
const v43 = new Proxy(v40, o41);
const o44 = {
};
function f45(a46, a47) {
    const o48 = {
        __proto__: v35,
        "h": f5,
    };
    return o48;
}
f45(o44, 268435440n);
f45(o41, 10000n);
f45(v3, -4n);
new Proxy(v43, v18);
try { Proxy(); } catch (e) {}
o41.a = v29;
