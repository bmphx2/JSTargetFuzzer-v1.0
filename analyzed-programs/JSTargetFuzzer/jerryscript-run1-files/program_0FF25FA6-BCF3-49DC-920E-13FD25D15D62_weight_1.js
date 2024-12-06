function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = -9223372036854775807;
}
new F0();
const v4 = new F0();
const v5 = new F0();
[v4,1000.0,v5,v5,1000.0];
[9007199254740991];
[-65536,-2,v4,F0];
function F15() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 1024;
    this.a = 1024;
}
const v18 = new F15();
new F15();
const v20 = new F15();
[1801814284,v20,1801814284,v18];
[F15];
[v20,-2];
[Infinity,228711.8701669043,1000.0,0.6549688747910699];
[0.7717665177211909,-838.3936909463185,-0.0];
const v29 = [Infinity,0.0,0.4397360972148665,1000.0,2.2250738585072014e-308,-1000000000.0];
const o30 = {
};
const v32 = new Proxy(v29, o30);
const o33 = {
};
new Uint32Array(v32, o33);
try { F15(); } catch (e) {}
o30.a = v18;
