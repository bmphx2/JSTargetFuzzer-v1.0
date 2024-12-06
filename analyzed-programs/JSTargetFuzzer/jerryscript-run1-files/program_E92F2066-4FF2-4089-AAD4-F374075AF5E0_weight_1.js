const v1 = new Map();
function f2(a3) {
    const o4 = {
        "e": a3,
        128: v1,
        [v1]: a3,
        "a": Map,
        ...v1,
        84: Map,
        ...v1,
        [v1]: a3,
        [Map]: v1,
        ...f2,
        "g": a3,
        __proto__: v1,
    };
    return o4;
}
f2(Map);
f2(Map);
f2(Map);
function F14() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 1024;
    this.a = 1024;
}
const v17 = new F14();
new F14();
const v19 = new F14();
function f20() {
    return f20;
}
const v21 = [-9.987506702221067,-2.0,NaN];
for (let i = 0; i < 5; i++) {
    Object.defineProperty(v21, "g", { get: f20, set: f20 });
}
const v25 = [1801814284,v19,1801814284,v17];
[F14];
[v25,-2];
[Infinity,228711.8701669043,1000.0,0.6549688747910699];
[0.7717665177211909,-838.3936909463185,-0.0];
const v30 = [Infinity,0.0,0.4397360972148665,1000.0,2.2250738585072014e-308,-1000000000.0];
const o31 = {
};
const v33 = new Proxy(v30, o31);
const o34 = {
};
new Proxy(v33, o34);
try { F14(); } catch (e) {}
o31.a = v17;
