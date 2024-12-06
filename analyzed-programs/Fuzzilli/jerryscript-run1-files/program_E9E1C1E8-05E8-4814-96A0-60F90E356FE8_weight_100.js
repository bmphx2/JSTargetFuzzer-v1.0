function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -2005925096;
    this.e = -2005925096;
}
new F0();
new F0();
new F0();
const o18 = {
};
const t10 = o18.__proto__;
t10[8] = 3;
for (const v20 in "construct") {
    new Uint8ClampedArray(6);
    new Float64Array(9);
    new Float64Array(1024);
    new Date();
    /.a{,}[Ufoo(?=bar)baz]?/;
    /a|bc1/uygs;
    /2\x60/u;
    const v50 = [];
    const v54 = new Float32Array(741);
    v54.c = 4096;
    new Map(v50);
    const t24 = "7T";
    t24.f = 4294967297;
    try { g.p(); } catch (e) {}
    new Uint8Array(Int16Array);
    Math.max(0.0);
    function f66() {
        return -1000.0;
    }
    function f71() {
        return 150763861;
    }
    const v73 = [[-1000000.0]];
    const v74 = [v73,v73];
    v73.findIndex(f71);
    v74["pop"]();
}
