function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 9;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7) {
    const o14 = {
        __proto__: v4,
        p(a9, a10) {
            return v4;
        },
        "d": v5,
        [v5]: v5,
        "b": v5,
    };
    return o14;
}
const v15 = f6(v3);
f6(v4);
f6(v4);
const v21 = typeof f6;
v21 === "symbol";
const t23 = "getDay";
t23[v15] = v21;
const v27 = [f6,"boolean"];
const v28 = ["boolean","boolean"];
[v27,v28,v28,v28,v4];
