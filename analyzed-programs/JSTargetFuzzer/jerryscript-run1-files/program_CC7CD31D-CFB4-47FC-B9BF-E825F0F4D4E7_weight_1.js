const v7 = Symbol.toPrimitive;
const o13 = {
    [v7]() {
        return -2;
    },
};
const v18 = new Date();
function f19(a20, a21, a22) {
    const o34 = {
        __proto__: Date,
        get f() {
            this.valueOf = Date;
            a21 << a20;
            function f25() {
                return a21;
            }
            return a21;
        },
        set b(a27) {
            if (a27) {
                const v28 = delete v18[-2];
                Date.__proto__;
                switch (v28) {
                    case f19:
                        break;
                }
            } else {
                try { a21(a27, 3.0, this); } catch (e) {}
            }
        },
    };
    return o34;
}
f19(4.380441162529776, 4.380441162529776, 3.0);
f19(f19(4.380441162529776, 62555, -191421.14677246427), 62555, 4.380441162529776);
Math.round(f19);
let v41 = f19 << -279981864;
const v42 = v41 >> f19;
~Math;
v41++;
-v42;
const v46 = [5.409837218751631e+306,5.0,0.631320185332836,-1.0,-697.5426783793084,-235222.86486059672,0.06240438650725588,-2.0,0.3995307120555006,2.2250738585072014e-308];
let v47;
try { v47 = v46.filter(v46, v46); } catch (e) {}
Symbol(v47);
