function f0() {
    const o10 = {
        0: 1073741825,
        2423: "o",
        "d": "o",
        p(a5, a6) {
            const o7 = {
            };
            new Proxy(a5, o7);
            return "o";
        },
        ["o"]: "o",
        1073741824: Infinity,
        "f": Infinity,
        [1073741825]: 1073741825,
    };
    return o10;
}
const v11 = f0();
const v12 = f0();
const v13 = f0();
const v19 = new Int16Array(10);
const v22 = new Uint16Array(701);
const v25 = new Int8Array(1);
v12[v19];
const v27 = v19.byteOffset;
v22[250] = v11;
v27 & v25;
v25 % v27;
if (v12 !== 701) {
    Object.defineProperty(v13, "a", { writable: true, enumerable: true, set: f0 });
    let v33 = -156481209;
    let v34 = -9.612053191907958e+307;
    const v35 = --v33;
    const v36 = v34++;
    v34 % v35;
    const v38 = +v36;
    5 >> v35;
    Math.atan2(v38, v33);
} else {
    try { v12.p(v19); } catch (e) {}
}
