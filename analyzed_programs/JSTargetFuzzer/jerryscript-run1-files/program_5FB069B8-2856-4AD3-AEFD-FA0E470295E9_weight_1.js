const v3 = [4.829599060724409e+307,-1e-15,-1000000.0,1.5138876497950253e+308,-0.0,2.0];
const v4 = [2.0,7.06296707206883];
const v5 = [0.16771317561915056,-751.4488970739251,-189614.9539523318,1.1549848854883378e+308,800130.5374000997,640.304482795603,-0.5969334571448677,-395492.8528869839,-1000000000000.0,-3.0];
function f6(a7, a8, a9) {
    const o26 = {
        ...a7,
        "b": v3,
        m(a11, a12, a13, a14) {
            a12 = a7;
            let [] = v5;
            const v16 = Symbol.iterator;
            const o25 = {
                [v16]() {
                    let v18 = 10;
                    const o24 = {
                        next() {
                            v18--;
                            v18 == a12;
                            const o23 = {
                                "done": v18,
                                "value": a8,
                            };
                            return o23;
                        },
                    };
                    return o24;
                },
            };
            return a8;
        },
    };
    return o26;
}
const v27 = f6(v4, v3, v3);
const v28 = f6(v3, v3, v5);
const v29 = f6(v3, v3, v5);
new Date();
function f32(a33, a34, a35) {
    const o42 = {
        __proto__: Date,
        ...a34,
        2: a34,
        ...v27,
        268435439: -11,
        ...v29,
        "e": -65536,
        ...v4,
        "a": -1331200285,
        "f": -65536,
        4: a33,
        "h": a33,
        "c": a33,
        p(a37, a38, a39) {
            try {
                super.all(a34);
            } catch(e41) {
            }
            return a34;
        },
    };
    return o42;
}
f32(v28, v4, v27);
f32(-11, v4, v28);
f32(-1331200285, v4, v27);
const v48 = new BigInt64Array(64);
const v49 = [v48];
try { v49.toLocaleString(v48, v49); } catch (e) {}
