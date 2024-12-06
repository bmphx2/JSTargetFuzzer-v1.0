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
const v19 = new F15();
const v20 = new F15();
function F22() {
    if (!new.target) { throw 'must be called with new'; }
}
new F15();
for (let i = 0; i < 5; i++) {
    Object.defineProperty(v19, 220, { writable: true, enumerable: true, value: -256 });
}
[1801814284,v20,1801814284,v18];
[F22];
[v20,-2];
[Infinity,228711.8701669043,1000.0,0.6549688747910699];
[0.7717665177211909,-838.3936909463185,-0.0];
const v33 = [Infinity,0.0,0.4397360972148665,1000.0,2.2250738585072014e-308,-1000000000.0];
const o34 = {
};
const v36 = new F15(v33, o34);
const o37 = {
};
new Uint32Array(v36, o37);
try { F15(); } catch (e) {}
o34.a = v36;
