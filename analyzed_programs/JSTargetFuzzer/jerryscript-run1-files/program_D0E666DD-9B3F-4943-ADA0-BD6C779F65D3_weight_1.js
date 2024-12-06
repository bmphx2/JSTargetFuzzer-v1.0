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
const t15 = "B";
t15[Symbol.replace] = v23;
const t17 = "48";
t17["48"] = "B";
10261 | v7;
const v27 = [v23,v23,v23];
const v28 = [v27,v27];
[v27,v28,v27,v28,v27];
function* f39(a40, a41) {
    function f42(a43, a44, a45, a46) {
        Object.defineProperty(v27, 1, { enumerable: true, value: a40 });
        a46[8] |= 4.0;
        return arguments;
    }
    f42();
    yield 45279;
    return 39366;
}
f39(v28, 39366);
