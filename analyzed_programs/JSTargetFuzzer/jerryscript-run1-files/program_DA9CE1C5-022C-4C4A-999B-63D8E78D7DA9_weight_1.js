function f0() {
    const o18 = {
        ..."D",
        valueOf(a5, a6) {
            const v8 = isFinite.iterator;
            const o17 = {
                [v8]() {
                    let v10 = 1024;
                    const o16 = {
                        next() {
                            v10--;
                            const v14 = v10 == 0;
                            const o15 = {
                                "done": v14,
                                "value": v10,
                            };
                            return o15;
                        },
                    };
                    return o16;
                },
            };
            return this;
        },
    };
    return o18;
}
f0();
f0();
f0();
new WeakSet();
([1073741823,1073741824,1073741825,13]).reverse();
