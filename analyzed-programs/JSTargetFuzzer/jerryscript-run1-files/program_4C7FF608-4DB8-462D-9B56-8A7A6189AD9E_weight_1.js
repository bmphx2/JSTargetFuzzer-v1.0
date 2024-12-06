function f6() {
    return 10;
}
function F13() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 1024;
    this.a = 1024;
}
const v16 = new F13();
new F13();
const v18 = new F13();
[1801814284,v18,1801814284,v16];
[F13];
[v18,-2];
function f25() {
    const o26 = {
    };
    return o26;
}
const v27 = f25();
typeof f25 === "number";
v27 > f25();
[Infinity,228711.8701669043,1000.0,0.6549688747910699];
[0.7717665177211909,-838.3936909463185,-0.0];
const v35 = [Infinity,0.0,0.4397360972148665,1000.0,2.2250738585072014e-308,-1000000000.0];
const o36 = {
};
const v38 = new Proxy(v35, o36);
const o39 = {
};
new Proxy(v38, o39);
try { F13(); } catch (e) {}
o36.a = v16;
