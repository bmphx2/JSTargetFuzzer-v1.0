function f3() {
    return 599034.1746209355;
}
const v8 = new WeakSet();
function f10(a11, a12, a13) {
    const o26 = {
        ...a13,
        ...v8,
        "h": 4.0,
        get e() {
            const v16 = Symbol.iterator;
            const o25 = {
                [v16]() {
                    let v18 = 10;
                    const o24 = {
                        next() {
                            v18--;
                            const v22 = v18 == 0;
                            const o23 = {
                                "done": v22,
                                "value": v18,
                            };
                            return o23;
                        },
                        __proto__: a12,
                        "defineProperty": a13,
                    };
                    return o24;
                },
            };
            return o25;
        },
    };
    ("-21827")["charCodeAt"]();
    5 - 4294967297;
    return o26;
}
f10(-1024, 4.0, true);
f10(4096, 1.0, v8);
f10(-1024, 4.0, f10);
("p")["replace"]("2147483648");
