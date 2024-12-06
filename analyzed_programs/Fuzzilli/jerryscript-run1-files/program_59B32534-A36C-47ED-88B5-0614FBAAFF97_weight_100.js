let v1 = 1595895321;
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = v1;
    this.b = a5;
}
const v7 = new F3(v1, v1);
const v8 = new F3(v1, v7);
const v9 = new F3(-12, -12);
function f13(a14, a15, a16) {
    const o27 = {
        set e(a18) {
            function F19(a21, a22, a23) {
                if (!new.target) { throw 'must be called with new'; }
                this.g = F3;
                this.b = a23;
            }
            new F19(a18, -12, -3.3247357747706385e+307);
            new F19(a16, a14, a18);
            new F19(-12, v8, a18);
        },
        __proto__: v9,
        "g": a15,
        "b": v8,
        9: 456.36518901936233,
        [F3]: 456.36518901936233,
    };
    return o27;
}
const v28 = f13(v7, 456.36518901936233, -12);
const v29 = f13(v9, 1.4481413124880191, v28);
const v30 = f13(v9, 456.36518901936233, v29);
const v31 = new f13(v8, -3.3247357747706385e+307, f13);
for (const v32 of v29) {
    ({"b":v1,} = v31);
    v31[v32] += 9007199254740990;
}
v28.f = 1.4481413124880191;
v8[v7] = v29;
v8.d = v29;
try { f13(-12, ...F3, v30, 9007199254740990); } catch (e) {}
const v34 = [v29,v30];
[9007199254740990];
[v34,v1,F3];
