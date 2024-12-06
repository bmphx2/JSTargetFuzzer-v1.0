let v0 = [1.4521774224258101e+308,-4.0,-3.0,-843.3088020061057,-3.0,219988.15860614483];
const v1 = [-5.920518341337527,-3.0,0.6829838354924896,4.0,1e-15,1.3296176750662981e+308,2.220446049250313e-16];
const v2 = [-2.120158297773754e+306,-846.9116918758983,5.0];
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = v2;
    this.d = v2;
    this.g = v1;
}
const v7 = new F3(v2, v0);
const v8 = new F3(v7, v1);
const v9 = new F3(F3, v2);
function f10(a11, a12) {
    v8.length = 1;
    v1[2147483649] = v7;
    const o25 = {
        valueOf(a19, a20, a21, a22) {
            a19.valueOf = a21;
            v0 = a12;
            try { v7.all(v0, a22, this); } catch (e) {}
            let v24;
            try { v24 = a22(); } catch (e) {}
            return v24;
        },
        ...a11,
        "a": v7,
        "c": v7,
    };
    return o25;
}
f10(v9, v0);
f10(v9, v1);
f10(v9, v1);
const v29 = [9007199254740990,255,44293,116771220,-9007199254740990,-65535,4294967296];
const o31 = {
};
Object.defineProperty(o31, -822989910n, { configurable: true, value: v29 });
