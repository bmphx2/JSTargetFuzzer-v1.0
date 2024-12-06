function F5() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -51901;
}
const v8 = new F5();
const v9 = new F5();
function f10(a11, a12) {
    const o18 = {
        ...v9,
        __proto__: v8,
        m(a14, a15, a16, a17) {
            return this;
        },
    };
    return o18;
}
for (const v20 in f10()) {
    f10().d;
    v9[Symbol.unscopables] = v9;
}
[0.35352177575125343,-7.428415555018837,949.7711391217697,-3.0,-54.48356368995769,NaN,1.0,-1000000000000.0,2.0,-585618.8074168764];
[2.2250738585072014e-308];
[-1.7206378713024997e+308,5.0,1.0,-509.6744551626757];
const v33 = (a34, a35, a36, a37) => {
    return a36 == a36;
};
