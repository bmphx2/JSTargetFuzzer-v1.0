function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a14;
}
const v15 = new F9(4294967296, 4294967296, 9, 9);
const v16 = new F9(F9, v15, 7, -99540444);
new F9(-2147483649, v16, 4294967297, -1412157790);
function f21() {
}
const v25 = [-1000000.0,f21,-807.6596022618603,-1000000.0];
const v26 = [v25,-1000000.0,0.014069366437978514,v25];
const v27 = [v26,f21,-807.6596022618603];
function f28() {
    const o34 = {
        "e": 1e-15,
        p(a32, a33) {
            return f28;
        },
        "f": 41151,
    };
    return o34;
}
let v35 = f28();
const v36 = f28();
let v37 = f28();
function F38(a40) {
    if (!new.target) { throw 'must be called with new'; }
}
const v41 = new F38(v35);
const o44 = {
    ...v36,
    set f(a43) {
        ({"a":v37,"b":v35,} = v41);
    },
};
function* f48(a49, a50, a51, a52) {
    try { a51.padStart(a49, "object"); } catch (e) {}
    const o54 = {
        "construct": f21,
        "ownKeys": f21,
        "preventExtensions": f21,
    };
    new Proxy(v27, o54);
    yield* "object";
    return a49;
}
f48(-807.6596022618603, "U7O", "U7O", v26);
