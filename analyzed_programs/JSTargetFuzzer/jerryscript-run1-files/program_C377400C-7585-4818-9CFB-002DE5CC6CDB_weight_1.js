function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = -9;
}
new F0();
const v4 = new F0();
new F0();
new Float32Array(8);
new Int32Array(257);
const v14 = new Float64Array(16);
const v19 = eval(eval);
function f20(a21, a22) {
    const o55 = {
        ...v19,
        get b() {
            const v25 = Symbol.iterator;
            const o54 = {
                [v25]() {
                    let v27 = 10;
                    const o50 = {
                        next() {
                            v27--;
                            const v31 = v27 == 0;
                            const o49 = {
                                "done": v31,
                                set a(a33) {
                                    Math.atan2(a22, v4);
                                    let v39 = +a22 || 1;
                                    1 - 1;
                                    ("451")[1439];
                                    -65537 % -65537;
                                    [6.587821035819711e+307,4294967297n];
                                    --v39;
                                },
                                "value": v27,
                            };
                            return o49;
                        },
                    };
                    class C52 extends o50.constructor {
                        [v14] = F0;
                        [a22] = o50;
                        static [f20] = F0;
                    }
                    new C52();
                    return o50;
                },
            };
            return this;
        },
    };
    return o55;
}
const v56 = f20();
function f57(a58) {
    return 8;
}
class C59 extends f57 {
    b;
}
f20(v19, v56);
