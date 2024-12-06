const v1 = new Set();
function f2() {
    return v1;
}
const v3 = [Set,Set,Set,f2,Set];
const v4 = [f2];
const v5 = [v1,v1,Set,Set,Set];
function F6(a8, a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a8;
}
const v12 = new F6(v5, v3, v4, v4);
const v13 = /\x60+/isu;
v13.compile();
const v15 = new F6(v4, v4, v4, v3);
const v16 = new F6(v5, v4, v4, F6);
function f17(a18, a19, a20, a21) {
    const o28 = {
        set g(a23) {
            try { new a23(a20, Set, a19, this); } catch (e) {}
            const v25 = a23 / a20;
            try {
                super.m(this, a23, a20, v25);
            } catch(e27) {
            }
        },
        "c": v5,
        __proto__: v12,
        "a": v5,
        "b": a19,
        [v15]: v13,
    };
    return v1;
}
f17(f17, v15, v16, v5);
f17(v4, v15, v15, v4);
f17(v3, F6, v15, v12);
const o37 = {
    set e(a33) {
        /\w|\d[\ca]/gisum;
        /foo(?=bar)baz/is;
        /M(x)(x)(x)\4*/yis;
    },
};
