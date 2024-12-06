function f3(a4) {
    const o11 = {
        "a": a4,
        toString(a6) {
            let v7;
            try {
            const t0 = 536870889;
            v7 = new t0(a4, 536870889, a6, this, 1024, a4);
            } catch (e) {}
            for (let v8 = 0; v8 < 32; v8++) {
                v7[v7 + v8] = v8;
            }
            return -1390922893;
        },
        [a4]: 1024,
    };
    return o11;
}
const v12 = f3(536870889);
f3(536870889);
f3(-1390922893);
function f22(a23) {
    const o24 = {
        "a": "setBigInt64",
    };
    return o24;
}
const v25 = f22(1024);
const o26 = {
    [-2]: v12,
    "e": v25,
    [-1390922893]: "-268435456",
    "b": "-268435456",
    "f": v12,
    "get": f22,
    "set": f22,
};
const v28 = new Proxy(v12, o26);
v28.a *= -1000000000000.0;
