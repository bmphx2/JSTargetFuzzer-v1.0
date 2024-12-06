[-1000000000000.0,1.0,-1000000000000.0,-1.5189243864928053e+308];
[3.5306040846253453,-1000000000000.0,NaN,705.5414607417451,3.0,498.7795276821528,-3.0,34585.128638419556];
const v2 = [-2.0,887.8391161714865,-3.225875096076212,3.8842140954396065,2.5592346362431206e+307,0.07733908987283655,1000000.0,2.220446049250313e-16];
new Map();
const v9 = Symbol.iterator;
const o18 = {
    [v9]() {
        let v11 = 10;
        const o17 = {
            next() {
                v11--;
                const v15 = v11 == 0;
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
let v22 = Array;
const v24 = new v22(10);
function f28(a29, a30, a31, a32) {
    const o42 = {
        "g": 4096,
        ...a29,
        "e": a30,
        set b(a34) {
            function F35(a37, a38) {
                if (!new.target) { throw 'must be called with new'; }
                v22.g = a37;
            }
            new F35(a32, 129);
            new F35(a31, a31);
            new F35(F35, 481111932);
        },
    };
    return o42;
}
const v43 = f28(4096, 481111932, 129, v24);
f28(10, 481111932, 10, f28);
f28(v43, 4096, 481111932, 4096);
const v46 = v43.g;
try {
    let v47;
    try { v47 = v43.isSealed(); } catch (e) {}
    const v48 = v47;
    v43.length = 2;
    try { new v46(v47, 2, v43, 1268086054); } catch (e) {}
    o18[129] = v2;
    v47 = v47;
    v22 = v47;
} catch(e51) {
    e51[0] = e51;
    try { e51(v22); } catch (e) {}
}
new Int32Array(1959);
new Int32Array(512);
new Int16Array(213);
