function f0() {
}
function f1() {
    const o7 = {
        "a": f0,
        __proto__: f0,
        "d": f0,
        "f": f0,
        [f0]: f0,
        [f0]() {
            let v2 = this;
            const v3 = v2 ^ f0;
            v2 %= v2;
            [v3,[v2],v3,v3];
            [f0,v2,f0];
            return v2;
        },
        6: f0,
        "h": f0,
    };
    return o7;
}
f1();
f1();
f1();
function f20() {
    return -40730;
}
const v23 = new Int8Array(16);
function f24() {
    return 16;
}
v23.forEach(f24);
