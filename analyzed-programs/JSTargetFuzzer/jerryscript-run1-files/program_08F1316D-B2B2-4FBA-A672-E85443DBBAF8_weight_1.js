function f7(a8, a9, a10) {
    const o27 = {
        "c": a10,
        get h() {
            const v13 = Symbol.iterator;
            const o26 = {
                [v13]() {
                    let v15 = 10;
                    const o25 = {
                        next() {
                            v15--;
                            super.a = 0;
                            function f22() {
                                return 0;
                            }
                            const v23 = v15 == 0;
                            const o24 = {
                                "done": v23,
                                "value": v15,
                            };
                            return o24;
                        },
                    };
                    return o25;
                },
            };
            return this;
        },
    };
    return o27;
}
f7("valueOf", "unicode", "unicode");
f7(f7(3, "unicode", "f"), "unicode", "f");
class C31 {
}
const v32 = new C31();
const v34 = new Uint8Array(v32, C31, Uint8Array);
const o35 = {
};
const v37 = new Proxy(v34, o35);
const v38 = v32.__proto__;
v37.__proto__ = v38;
([[v38,v38,v38,v38]])["shift"]();
