const v14 = [11,-4096,-128,-4294967296,-8089,7,-128];
const v15 = [v14];
const v16 = [268435441,,];
function f17(a18, a19) {
    const o20 = {
    };
    return o20;
}
const v21 = f17();
const v23 = [f17];
const v24 = v14.flatMap;
const v25 = Reflect.apply(v24, v16, v23);
for (let i = 0; i < 5; i++) {
    v21.__proto__ = v15;
    const v26 = [];
    Reflect.apply(v23.values, v24, v26);
}
function f29() {
}
const v33 = [-1000000.0,f29,-807.6596022618603,-1000000.0];
new Int32Array(1192, 960, 1192);
function F38(a40, a41) {
    if (!new.target) { throw 'must be called with new'; }
}
const v42 = new F38(F38, F38);
function f43() {
    return v42;
}
function F44(a46, a47, a48) {
    if (!new.target) { throw 'must be called with new'; }
    a48 - a48;
}
new F44(f43, v42, v25);
const v51 = [v33,-1000000.0,0.014069366437978514,v33];
const v52 = [v51,f29,-807.6596022618603];
function* f56(a57, a58, a59, a60) {
    try { a59.padStart(a57, "object"); } catch (e) {}
    const o62 = {
        "construct": f29,
        "ownKeys": f29,
        ...a59,
        "has": a60,
        "f": -2147483648,
        "preventExtensions": f29,
    };
    new Proxy(v52, o62);
    yield* "object";
    return a57;
}
f56(-807.6596022618603, "U7O", "U7O", v51);
