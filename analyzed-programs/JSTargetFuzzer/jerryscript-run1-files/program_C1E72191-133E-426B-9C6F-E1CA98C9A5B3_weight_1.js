const v0 = [];
function f1() {
    const o21 = {
        [v0]() {
            const v5 = [-38216];
            const v6 = [v5,v5,v5];
            const v8 = new Int16Array(v5);
            function f9(a10, a11) {
                const v12 = v8[-1];
                Object.defineProperty(v12, v6, { writable: true, value: v12 });
                return v6;
            }
            try { v5.forEach(f9); } catch (e) {}
            let v14 = -18200;
            const v15 = v14++;
            Math.sinh(v15);
            Math.log1p(10000);
            Math.tan(10000);
            v15 >> v15;
            return Math.log(10000);
        },
        "a": f1,
        ...v0,
        [v0]: v0,
    };
    return o21;
}
const v22 = f1();
const v23 = f1();
const v24 = f1();
function f25(a26, a27) {
    const o31 = {
        "f": v24,
        "d": a26,
        __proto__: a27,
        [a27]: v22,
        [v23]: v22,
        ...a27,
        set g(a29) {
            Object.defineProperty(a29, a29, { set: f1 });
            v22.a /= a29;
            try { a29.toString(a27); } catch (e) {}
        },
        [v24]: v24,
        "a": f1,
        "b": f1,
        "d": v24,
    };
    return o31;
}
const v32 = f25(v23, v24);
const v33 = f25(v32, v32, v23, f1, v24, v22);
const v34 = f25(v33, v24);
function f38(a39, a40, a41) {
    const o45 = {
        set c(a43) {
            a43--;
        },
        __proto__: v34,
        "h": 54520,
        9: f25,
        ...v34,
        [v23]: v34,
        "e": v23,
        "c": v22,
        "b": v33,
        [f25]: v0,
        "f": -13,
        "a": v0,
        "g": a39,
    };
    return -13;
}
f38(-13, 0, f1);
f38(0, -13, 54520);
f38(54520, 0, v33);
typeof 65535n;
