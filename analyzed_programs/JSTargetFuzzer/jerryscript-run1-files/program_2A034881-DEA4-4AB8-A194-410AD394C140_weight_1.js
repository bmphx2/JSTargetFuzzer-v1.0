const v1 = new Map();
function f2(a3) {
    const o11 = {
        1025971430: a3,
        ...a3,
        [a3](a5, a6) {
            let v7;
            try { v7 = a3.random(a6, this, a5, Map); } catch (e) {}
            try { a5(a3, a6, v7); } catch (e) {}
            let v10;
            try { v10 = a3.race(); } catch (e) {}
            return v10;
        },
        [a3]: Map,
        "f": a3,
        "b": a3,
        1: v1,
        5: a3,
    };
    return o11;
}
f2(f2(v1));
f2(f2);
const v18 = [257];
const v19 = [2.220446049250313e-16,-5.0,4.0,374.98958739447244,1000000000.0,855063.1763904884,Infinity,-Infinity,0.7608961253408736,-1.0];
const v20 = [1.7976931348623157e+308];
v20.fill(v19, 257, 257);
try { v18.find(v20); } catch (e) {}
const v31 = new Uint16Array();
const v32 = [-3.9420134706840244,1000000.0,0.33415843436813053,2.2250738585072014e-308,-9.57664291846752e+307,7.5080309400479095,-836439.2043889777];
function f33(a34, a35) {
    return a34;
}
for (let v36 = 0; v36 < 5; v36++) {
    let v37 = v32[v36];
    Object.defineProperty(v31, "d", { enumerable: true, value: v37 %= f33 });
}
