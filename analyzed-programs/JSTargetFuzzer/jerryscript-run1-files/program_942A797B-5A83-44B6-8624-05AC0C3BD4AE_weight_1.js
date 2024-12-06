function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = -2147483649;
    this.g = -2147483649;
    this.a = -2147483649;
}
new F0();
new F0();
new F0();
new BigInt64Array(4);
new Int16Array(1024);
new BigInt64Array(1024);
function F18() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 1024;
    this.a = 1024;
}
const v21 = new F18();
const v22 = new F18();
const v23 = new F18();
[1801814284,v23,1801814284,v22];
[F18];
[v23,-2];
[Infinity,228711.8701669043,1000.0,0.6549688747910699];
[0.7717665177211909,-838.3936909463185,-0.0];
const v32 = [Infinity,0.0,0.4397360972148665,1000.0,2.2250738585072014e-308,-1000000000.0];
const o33 = {
};
const v35 = new Proxy(v32, o33);
const o36 = {
};
new Proxy(v35, o36);
try { F18(); } catch (e) {}
o33.a = v21;
