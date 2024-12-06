function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 3;
    this.e = 3;
    this.b = 3;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a9;
    this.a = a8;
}
const v10 = new F6(v5, F6);
const v11 = new F6(v3, v10);
new F6(v5, v11);
const v13 = [0.6929091326611511,-675398.9285814217,1000000.0,-7.143070781077984e+307,347118.5377027269,0.7199047884655221,-0.0,-2.220446049250313e-16];
const v14 = [-1e-15,Infinity,-7.5568046853434e+307,-1000000000.0,-7.226504873344392e+306,-5.0,0.08786082430767939];
const v15 = [0.16892586734298876,3.9973333308025687,875489.2623419603,-1e-15,3.0];
class C16 {
    constructor(a18, a19, a20, a21) {
        try { v4.n(F6, a19, v14, v14); } catch (e) {}
        const v27 = [a20];
        const v28 = ("m").charCodeAt;
        function f30() {
            for (let i32 = 0;
                (() => {
                    const o33 = {
                    };
                    return i32 < 7;
                })();
                ) {
            }
            return 10;
        }
        Reflect.apply(v28, v5, v27);
    }
    268435441 = v3;
    static [F6] = v10;
    e = F6;
}
const v39 = new C16(v14, v14, v5, v15);
new C16(v13, v3, v10, v13);
new C16(v13, v3, v39, v15);
`string${Uint16Array}2147483647${[]}isSafeInteger${Uint16Array}bigint`;
for (let [v46,v47] of "resizable") {
}
