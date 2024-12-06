function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = -549493294;
    this.f = -549493294;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6() {
    return v4;
}
const v7 = [1588793039];
const v8 = [1024,8,10000,1073741825,-10,-65537,8,-2147483648,-9223372036854775807,61347];
const v9 = [268435439,1073741825,6,-41594,-256];
function f10(a11, a12) {
    const o23 = {
        valueOf(a14, a15, a16) {
            const v17 = a12[a11];
            try { v17(); } catch (e) {}
            a12.__proto__ = a11;
            return f6;
        },
        get d() {
            const v20 = super.d;
            super.h;
            Object.defineProperty(v9, "b", { configurable: true, get: f6, set: f6 });
            return v20;
        },
    };
    return o23;
}
f10(v9, v9);
f10(v4, v8);
const v26 = f10(v8, v7);
[4294967297,10];
const v28 = [64,65537];
[-9223372036854775808,4294967296,129,23399];
v28[v26] = v5;
typeof v4 === "function";
v5.__proto__ = v9;
class C34 extends v3.constructor {
    1073741825 = v7;
    #c = "function";
}
new C34();
