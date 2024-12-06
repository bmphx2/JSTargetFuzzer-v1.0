function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 16n;
    this.a = a5;
    this.g = 16n;
}
const v7 = new F3(25673n, 16n);
const v8 = new F3(1055086573n, 16n);
const v9 = new F3(1055086573n, 16n);
function f10(a11, a12, a13) {
    const o32 = {
        __proto__: a11,
        "d": a11,
        3: a13,
        "f": a12,
        1058533229: F3,
        set h(a15) {
            const v16 = (a17, a18, a19, a20) => {
                a11[8] = a17;
                const v22 = Symbol.iterator;
                const o31 = {
                    [v22]() {
                        let v24 = 10;
                        const o30 = {
                            next() {
                                v24--;
                                const v28 = v24 == 0;
                                const o29 = {
                                    "done": v28,
                                    "value": v24,
                                };
                                return o29;
                            },
                        };
                        return o30;
                    },
                };
                return a13;
            };
        },
    };
    return o32;
}
f10(v8, 1055086573n, 25673n);
const v34 = f10(v7, 25673n, 16n);
if (25673n <= F3) {
    for (let v36 = 0; v36 < 32; v36++) {
        v34["p" + v36] = v36;
    }
} else {
    v34[16n] = v7;
}
f10(v9, 25673n, 16n);
const v48 = new Uint8Array(512);
new Int16Array(447);
new Uint32Array(2438);
function f58() {
}
v48.description <<= 2006448021;
const v66 = [2.220446049250313e-16,-1.7976931348623157e+308,-3.4833326659982795,-1000000000000.0,0.0,2.220446049250313e-16,-4.191721618721404,1.4104645033139904e+308];
const v67 = v66.copyWithin(v66, v66);
("1073741824").match(v67);
new Uint8Array(0);
let v77 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
const v79 = new Int32Array(127);
v77 /= v79;
new WeakSet();
for (let i87 = 0; i87 < 6; i87++) {
    let v93;
    try { v93 = v67.flatMap(f58, i87); } catch (e) {}
    --v93;
}
const v96 = new BigInt64Array(2);
let v98;
try { v98 = v7.resize(-2147483649n, 2, 168.64153431052114, 16n); } catch (e) {}
v96[Symbol.match];
try { new v98(Uint8Array, 886.0009926550579, 512, ...Uint32Array, ...v79, ...1832725272); } catch (e) {}
([5]).reverse();
