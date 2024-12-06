class C3 {
    o(a5, a6) {
        a6 - a5;
        let v8;
        try { v8 = a6("n", a5); } catch (e) {}
        this.toString = v8;
        Symbol.iterator;
        const o19 = {
            [a5]() {
                let v12 = 10;
                const o18 = {
                    next() {
                        const v16 = v12 == v12--;
                        const o17 = {
                            "done": v16,
                            "value": v12,
                        };
                        return o17;
                    },
                };
                return v12;
            },
        };
        return "unscopables";
    }
}
const v20 = new C3();
const v21 = new C3();
const v22 = new C3();
function F29(a31, a32, a33) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a32;
    this.f = a33;
    this.h = "n";
}
new F29("unscopables", "number", v20);
new F29("number", "n", v21);
new F29(C3, "1414285742", v22);
const v42 = new Uint8Array(512);
new Int16Array(447);
new Uint32Array(2438);
function f52() {
}
v42.description <<= 2006448021;
const v60 = [2.220446049250313e-16,-1.7976931348623157e+308,-3.4833326659982795,-1000000000000.0,0.0,2.220446049250313e-16,-4.191721618721404,1.4104645033139904e+308];
const v61 = v60.copyWithin(v60, v60);
const v62 = `
    [-2.220446049250313e-16,-436.0343166790291];
    const v64 = \`
    \`;
`;
("1073741824").match(v61);
new Uint8Array(0);
let v74 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
const v76 = new Int32Array(127);
v74 /= v76;
new WeakSet();
new BigInt64Array(2);
([5]).reverse();
