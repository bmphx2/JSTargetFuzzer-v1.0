new WeakMap();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = WeakMap;
    this.f = a4;
}
const v6 = new F2(F2, WeakMap);
const v7 = new F2(v6, v6);
new F2(v7, F2);
const t9 = "268435441";
t9[Symbol.species] = v7;
[-1.0,1000000.0,1.0,0.11826550083352261];
[2.220446049250313e-16,-270.8745567404725,478042.6604609585];
[-5.0,2.0,-2.720028873368303,143070.6290204057,-1000000000.0,439.2798673078769,-5.0];
const v23 = [];
const v24 = [v23,v23,v23];
const v25 = [v24,v24];
[v24,v25,v24,v25,v24];
function* f36(a37, a38) {
    function f39(a40, a41, a42, a43) {
        Object.defineProperty(v24, 1, { enumerable: true, value: a37 });
        a43[8] |= 4.0;
        return arguments;
    }
    f39();
    yield 45279;
    return 39366;
}
f36(v25, 39366);
