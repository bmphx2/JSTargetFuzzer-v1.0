function f0() {
}
function f1() {
    return f0;
}
const v4 = new Uint32Array(1000);
let v5 = 178;
const v6 = v4.byteOffset;
const v7 = v4.byteLength;
const v8 = new Uint32Array(v5);
v5 = 1000;
new f1();
for (const v11 of v8) {
    let v12 = v4[v11];
    [v12] = v8;
    function f13(a14, a15, a16) {
        const o17 = {
            "a": v4,
            ...v11,
            [a14]: a16,
        };
        return o17;
    }
    f13(v7, v7, v5);
    f13(v5, v5, 1000);
    f13(1000, v6, v7);
}
f0();
new BigInt64Array(v5);
new Int16Array(10);
[268435456,13,10,256,-1,-476160135,0,512];
[515014021];
[1419174004,11,256,-987572613,-169460418,268435439,4294967296];
function F29() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 1024;
    this.a = 1024;
}
const v32 = new F29();
new F29();
const v34 = new F29();
[1801814284,v34,1801814284,v32];
[F29];
[v34,-2];
[Infinity,228711.8701669043,1000.0,0.6549688747910699];
[0.7717665177211909,-838.3936909463185,-0.0];
const v43 = [Infinity,0.0,0.4397360972148665,1000.0,2.2250738585072014e-308,-1000000000.0];
const o44 = {
};
const v46 = new Proxy(v43, o44);
const o47 = {
};
new Proxy(v46, o47);
try { F29(); } catch (e) {}
o44.a = v32;
