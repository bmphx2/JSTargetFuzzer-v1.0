const v2 = new Array(76);
function f3(a4) {
    const o17 = {
        __proto__: v2,
        "d": Array,
        get g() {
            a4 = this;
            const v7 = Symbol.iterator;
            const o16 = {
                [v7]() {
                    let v9 = 10;
                    const o15 = {
                        next() {
                            v9--;
                            const v13 = v9 == 0;
                            const o14 = {
                                "done": v13,
                                "value": v9,
                            };
                            return o14;
                        },
                    };
                    return o15;
                },
            };
            return v2;
        },
    };
    return o17;
}
f3(Array);
f3(v2);
f3(76);
const v23 = new BigInt64Array(202);
new Float32Array(1024);
new Float32Array(256);
1024 in Array;
v2.length = 1024;
let {"byteOffset":v31,...v32} = v23;
new f3(v31);
function f34(a35, a36) {
    const v39 = Symbol.iterator;
    const o48 = {
        [v39]() {
            let v41 = 10;
            const o47 = {
                next() {
                    v41--;
                    const v45 = v41 == 0;
                    const o46 = {
                        "done": v45,
                        "value": v41,
                    };
                    return o46;
                },
            };
            return o47;
        },
    };
    return a35;
}
f34(202, Float32Array);
