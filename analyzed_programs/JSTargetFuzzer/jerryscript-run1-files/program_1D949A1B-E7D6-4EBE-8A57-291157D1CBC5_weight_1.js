function f3(a4, a5) {
    const o6 = {
        "e": -7,
        "d": a5,
        ...a5,
        "g": a4,
        [a4]: a5,
        "a": a5,
        __proto__: a5,
        "f": 10,
        "h": a5,
        "c": 10,
    };
    return o6;
}
const v7 = f3(-7, f3);
const v8 = f3(-7, v7);
const v9 = f3(-13, 10);
function f10() {
    return v9;
}
function F12(a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = v7;
}
const v16 = new F12(v8, v8);
const v17 = new F12(v16, v9);
new F12(v7, v17);
async function f19(a20, a21, a22) {
    let v24 = 1000000.0;
    ++v24;
    ("description")["repeat"]();
    new Int32Array(a20);
    return f19;
}
f19();
