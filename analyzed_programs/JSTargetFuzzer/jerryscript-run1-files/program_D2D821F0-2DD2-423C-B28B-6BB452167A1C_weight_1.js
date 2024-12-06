function f1() {
    const o9 = {
        "b": true,
        "g": true,
        [true]: true,
        "e": true,
        5: true,
        [true]() {
            [NaN,true,NaN];
            const v7 = [true,-2.220446049250313e-16,true];
            [true,v7,v7,v7];
            return v7;
        },
    };
    return o9;
}
f1();
f1();
f1();
new Set();
-4294967295n | 268435439n;
