const v1 = new Date();
function f2(a3) {
    const o14 = {
        "a": a3,
        __proto__: v1,
        "b": a3,
        [a3](a5, a6) {
            this[3] = this;
            let v7;
            try { v7 = new a6(); } catch (e) {}
            try { v7(a5, this); } catch (e) {}
            a5 instanceof a5;
            try { Date.parse(a3); } catch (e) {}
            [-128,-1506135647,14,0,0,1073741824,-7,65536,57653];
            [2,-9,-1361660643];
            [4096,9007199254740991,129,36264,268435456,373552224,268435440];
            return a3;
        },
    };
    return o14;
}
const v15 = f2(v1);
const v16 = f2(v1);
const v17 = f2(f2);
function F18(a20, a21, a22) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = v17;
}
new F18(v15, v15, F18);
new F18(v15, v16, F18);
new F18(v1, v15, v15);
new WeakSet();
function f29(a30, a31) {
    try { a30(a30); } catch (e) {}
    const v33 = [-9223372036854775807,2,268435439,0,0,55990];
    const o34 = {
    };
    const v36 = new Proxy(v33, o34);
    v36 % 1000000000000.0;
    return a31;
}
f29(f29);
