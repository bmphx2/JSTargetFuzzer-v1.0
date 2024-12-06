const v1 = new Map();
function f2(a3) {
    const o20 = {
        set f(a5) {
            new a3(3633);
            new a5(64);
            const v14 = new Uint16Array();
            const v15 = v14.toLocaleString();
            for (let v16 = 0; v16 < 5; v16++) {
                v15 ** v16;
            }
            new Uint16Array(1000);
        },
    };
    return o20;
}
const v21 = f2(f2);
const v22 = f2(v1);
const v23 = f2(v22);
function f24(a25, a26) {
    const o27 = {
        [Map]: Map,
        "f": v21,
        [a26]: v23,
        __proto__: v23,
        "e": v1,
        "h": Map,
        ...a26,
        "f": a26,
        3: a26,
        [a26]: v21,
        "g": a26,
        /*
        __proto__: a26,
        */
        [v23]: v22,
        [v22]: f2,
        [f2]: a25,
    };
    return o27;
}
const v29 = f24(v23, f24(v22, v23));
v23.__proto__;
v21.length = 0;
const v32 = new f2(v1);
try { v21["valueOf"](v32, v32, "valueOf"); } catch (e) {}
f24(v29, v23);
Date["now"]();
