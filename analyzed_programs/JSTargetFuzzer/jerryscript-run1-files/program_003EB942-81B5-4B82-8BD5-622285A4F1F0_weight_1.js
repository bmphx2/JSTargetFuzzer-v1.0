[-2.220446049250313e-16,-379038.5925526187,Infinity,0.20929101958175456];
[1e-15,0.9110622692048621,0.6347444625370473,-1000.0,0.2775875315883064,1.0938510243224546e+308,0.014863502841050757,-1.001638773521627,0.0];
[0.06531871466211392,-2.0,1.435954652434538e+308,686318.0882851984,1e-15,0.38342547161424023,1.7976931348623157e+308];
const v12 = [];
const v13 = [v12,v12];
const v14 = [v13,v13];
const v15 = [v13,v14,v13,v14,v13];
function* f25(a26, a27) {
    function f28(a29, a30, a31, a32) {
        try { new a30(a26, a31, ...a31, a26, ...v15, a29); } catch (e) {}
        ("b").length;
        for (let v36 = 0; v36 < 32; v36++) {
            v13["p" + v36] = v36;
        }
        let v40 = 0;
        do {
            const o41 = {
                "apply": f28,
                "ownKeys": f28,
                "preventExtensions": f25,
            };
            new Proxy(a32, o41);
            const v44 = v40++;
            try { a31(Proxy, v44, h); } catch (e) {}
            a26 << a30;
            g = o41;
            const t26 = "catch";
            t26[2147483648] = a32;
            f25(o41, f28);
        } while (v40 < 0)
        Object.defineProperty(v13, 1, { enumerable: true, value: a26 });
        a32[8] |= 4.0;
        return arguments;
    }
    f28();
    yield 45279;
    return 39366;
}
f25(v14, 39366);
