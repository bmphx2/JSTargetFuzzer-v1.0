class C3 {
    toString(a5) {
        a5.__proto__;
        const v9 = Symbol.iterator;
        const o18 = {
            [v9]() {
                let v11 = 10;
                const o17 = {
                    next() {
                        v11--;
                        const v15 = v11 >= 0;
                        const o16 = {
                            "done": v15,
                            "value": v11,
                        };
                        return o16;
                    },
                };
                return o17;
            },
        };
        return -612622.8945978951;
    }
}
new C3();
const v20 = new C3();
new C3(v20, -612622.8945978951);
[1000.0,2.220446049250313e-16,-62.83840490424336,3.8309125255907954,-64.17485053656287,47274.92358873773,2.220446049250313e-16];
const v23 = [128801.015026076,448.0789300867507];
[-4.0,-802.3992359145493,-Infinity,0.211984327072555,-7.400631898496893e+307];
function F28(a30, a31, a32) {
    if (!new.target) { throw 'must be called with new'; }
}
const v33 = new F28();
let v34;
try { v34 = v33.seal(v33, -612622.8945978951, v23); } catch (e) {}
try { v34["toString"](); } catch (e) {}
