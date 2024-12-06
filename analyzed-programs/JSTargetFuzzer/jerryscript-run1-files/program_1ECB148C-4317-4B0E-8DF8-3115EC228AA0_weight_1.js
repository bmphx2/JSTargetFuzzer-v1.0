const v1 = [true,true,true,true];
const v2 = [true,v1,true,true,true];
const v3 = [v2,v1,v1,v2];
function f4(a5, a6) {
    const o13 = {
        ...v3,
        [a5]: a5,
        __proto__: a5,
        "f": a6,
        "a": v2,
        "e": a6,
        o(a8, a9) {
            a8.toString = a9;
            const v10 = v1.__proto__;
            try { v2["shift"](...a8, ...a9, ..."shift", ...v2, ...a5, ...v10); } catch (e) {}
            return v10;
        },
        2: a5,
    };
    return o13;
}
f4(v2, v2);
f4(f4(v3, v3), v3);
/a(?!bbb|bb)c[^123]S*/giu.exec();
