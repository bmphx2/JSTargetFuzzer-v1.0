const v19 = new WeakMap();
function f20(a21, a22, a23) {
    const o56 = {
        __proto__: v19,
        "c": 536870888,
        ..."-15",
        ..."-23511",
        ...a23,
        "c": a23,
        set b(a25) {
            const v26 = super.a;
            try { v26(62082, v26, 62082, a22, ...a23); } catch (e) {}
            const v30 = Symbol.iterator;
            const o39 = {
                [v30]() {
                    let v32 = 10;
                    const o38 = {
                        next() {
                            v32--;
                            const v36 = v32 == 0;
                            const o37 = {
                                "done": v36,
                                "value": v32,
                            };
                            return o37;
                        },
                    };
                    return o38;
                },
            };
            const v42 = super.c;
            class C43 extends f20 {
                f;
                e = v42;
            }
            new C43();
            new C43();
            new C43();
        },
        valueOf(a48, a49, a50, a51) {
            v19.b;
            return a23;
        },
    };
    return o56;
}
const v57 = f20(-926151.8718242004, 536870888, 129n);
f20(-285.65628668231204, 536870888, -9007199254740991);
f20(-285.65628668231204, -9007199254740991, v57);
const t48 = [984.7570557031324,753.2926727964834,0.39688783054001986,-8.237382095766073,1000.0,-5.758930251585255,-117.45500972457319,-4.0,1.0];
delete t48[5];
