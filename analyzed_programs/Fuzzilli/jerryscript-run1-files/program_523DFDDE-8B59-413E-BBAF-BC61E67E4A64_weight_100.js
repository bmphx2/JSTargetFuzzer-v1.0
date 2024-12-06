function f0() {
    let v2 = -1.0;
    const o12 = {
        set c(a5) {
            v2 ^ 13;
            ({"d":v2,} = a5);
        },
        1073741823: 1e-15,
        set g(a8) {
            a8.e = 13;
            this[a8] >>>= a8;
        },
        [v2]: 13,
        [1e-15]: 1e-15,
        "f": v2,
    };
    return o12;
}
const v13 = f0();
const v14 = f0();
const v15 = f0();
function f19(a20, a21, a22) {
    const o36 = {
        "d": f0,
        1267: v14,
        set h(a24) {
            const v26 = Symbol.iterator;
            const o35 = {
                [v26]() {
                    let v28 = 10;
                    const o34 = {
                        next() {
                            v28--;
                            const v32 = v28 == 0;
                            const o33 = {
                                "done": v32,
                                "value": v28,
                            };
                            return o33;
                        },
                    };
                    return o34;
                },
            };
        },
    };
    return o36;
}
const v37 = f19("arguments", v14, "o");
let v38 = f19("arguments", v15, "o");
const v39 = f19("o", v13, "c");
function F40(a42, a43) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a42;
}
const v44 = new F40("c", v38);
const v45 = new F40("o", v37);
const v46 = new F40("o", v38);
v38 = v39;
try { ("o").trimLeft(); } catch (e) {}
[v44,v45,v46,"c"];
const v49 = [v15];
[v49];
const v53 = ("o")[Symbol.toStringTag];
try { v49.forEach(v53); } catch (e) {}
("arguments")["arguments"];
