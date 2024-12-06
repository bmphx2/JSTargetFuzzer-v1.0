const v3 = [-1714264111];
const v4 = [v3,-256];
const v5 = [v4,-1714264111,-1714264111,v3,-1714264111];
function f6(a7, a8, a9, a10) {
    const o19 = {
        3522: v5,
        2892223288: a10,
        [a8]: a8,
        ...v3,
        set g(a12) {
            const t10 = 2;
            t10.length = a12;
            Object.defineProperty(v5, 9, { get: f6 });
            f6(a12, a8, 2, a12);
            delete v4[a9];
        },
        1000: a8,
        ...v3,
        "d": 6,
        0: a10,
    };
    return o19;
}
f6(6, 6, -1714264111, f6);
const v21 = f6(-256, -256, -256, v3);
f6(-1714264111, -256, 6, -256);
const v26 = [8];
function f27(a28, a29) {
    const v30 = [1.1874236030596237e+308];
    a29.e = v21;
    v30.length = -1;
    let v33;
    try { v33 = a29(v30); } catch (e) {}
    v33 = v21;
    v30["lastIndexOf"]("lastIndexOf");
    return a29;
}
v26["forEach"](f6);
new Boolean();
