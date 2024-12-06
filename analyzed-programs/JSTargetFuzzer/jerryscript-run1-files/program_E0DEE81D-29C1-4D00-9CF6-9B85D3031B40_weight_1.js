function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = F1;
}
const v3 = new F1();
const v4 = new F1();
const v5 = new F1();
const v6 = [v5,f0];
const v8 = [[v3,f0]];
const v9 = [390866.25381525,0.0];
[3.0,0.9048011250045612,1000000000000.0,-1.3004202751608096e+308,2.2250738585072014e-308];
const v11 = [1000.0,0.668976507939429,0.14004528037561237];
function f13(a14, a15, a16) {
    const o29 = {
        ...a16,
        [a14](a18, a19) {
            new Int16Array(127);
            new Uint16Array(2);
            new Float64Array(0);
            return this;
        },
        "a": a14,
    };
    return o29;
}
f13(v3, v6, v8);
f13(v4, v9, v11);
f13(v5, v9, v8);
function f33(a34, a35, a36) {
    const v38 = arguments.callee;
    const v39 = [9007199254740990,255,44293,116771220,-9007199254740990,-65535,4294967296];
    const o41 = {
    };
    Object.defineProperty(o41, -822989910n, { configurable: true, value: v39 });
    arguments[1] = v38;
    return a34;
}
f33();
