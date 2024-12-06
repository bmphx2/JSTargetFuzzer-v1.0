function f0() {
    const o8 = {
        __proto__: 977.1112882352518,
        "e": -2117371407,
        [977.1112882352518](a5, a6) {
            function f7() {
                return 977.1112882352518;
            }
            return a6;
        },
        "g": 2.0,
        4: 977.1112882352518,
        15: 977.1112882352518,
        "b": f0,
        "a": f0,
        "c": 2.0,
        "d": 2.0,
        2: f0,
        ...2.0,
    };
    return o8;
}
const v9 = f0();
const v10 = f0();
const v11 = f0();
function F12(a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v9;
    this.g = a15;
}
const v16 = new F12(v11, v10);
const v17 = new F12(v9, v9);
new F12(v9, v9);
function F19(a21, a22) {
    if (!new.target) { throw 'must be called with new'; }
    let v23 = [v9,F19,F19,v10];
    const v25 = [a21,a22,[a21,F19]];
    try { a22(v10); } catch (e) {}
    v23 = v25;
    this.g = a22;
    this.b = v16;
    this.d = a22;
}
new F19(v17, v10);
new F19(v16, v9);
new F19(v16, v9);
const v33 = [65535n,0n,964329252n];
let v34 = [964329252n,964329252n,v33,v33];
const v35 = [v34,v34,v33,964329252n,0n];
const v36 = [65535n,v34];
[v35,0n];
const v38 = [v34];
const t52 = "fdNr";
t52[0] = 65535n;
let v45;
try {
const t0 = "localeCompare";
v45 = new t0(v33, v38, v38, 58270);
} catch (e) {}
async function* f46(a47, a48, a49) {
    ({"length":a47,...v34} = a48);
    yield v33;
    await a47;
    yield "fdNr";
    return a47;
}
f46(58270, v36, v45);
