function f0() {
}
function f1() {
    const o7 = {
        "g": f1,
        [f0]: f0,
        228: f0,
        "h": f0,
        get a() {
            const v3 = new f1();
            return v3;
        },
    };
    return o7;
}
f1();
f1();
f1();
const v20 = new Int32Array(77);
function f21() {
    return -13;
}
v20.sort(f21);
