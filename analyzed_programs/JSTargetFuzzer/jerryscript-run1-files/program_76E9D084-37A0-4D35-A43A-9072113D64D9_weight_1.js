function f0() {
}
function f1() {
    return f0;
}
class C8 extends f0 {
    constructor(a10, a11, a12) {
        super();
        try {
            super.valueOf(16);
        } catch(e14) {
        }
        super.g = a12;
        const v16 = Symbol.iterator;
        const o34 = {
            [v16]() {
                let v18 = 10;
                const o33 = {
                    next() {
                        v18--;
                        const v22 = v18 == 0;
                        function f23() {
                            return f23;
                        }
                        const v25 = new Uint32Array(0);
                        for (const v26 of v25) {
                            function F27(a29, a30, a31) {
                                if (!new.target) { throw 'must be called with new'; }
                            }
                        }
                        const o32 = {
                            "done": v22,
                            "value": v18,
                        };
                        return o32;
                    },
                };
                return o33;
            },
        };
    }
}
const v35 = new C8(-57741, f1, f1);
new C8(-49208, -57741, v35);
new C8(-57741, -49208, "igXIy");
[576868.2868653708,2.220446049250313e-16,1.3458226518406032e+308,5.0,-269.3015201656739];
[3.0,-1000000000000.0,0.15663106850059694,1.7976931348623157e+308];
[-8.587636513653889,0.0,20.905983937228484,-0.0,1000000.0];
const v42 = [6,6,6,6];
v42[5] = 6;
function f43() {
    const v46 = new Uint32Array(858);
    return v46;
}
f43();
class C48 extends f43 {
}
v42[4];
