const v4 = new Array(10);
let v6 = 4096;
function f8(a9, a10, a11, a12) {
    const o22 = {
        "g": v6,
        ...a12,
        "e": a10,
        set b(a14) {
            function F15(a17, a18) {
                if (!new.target) { throw 'must be called with new'; }
                this.g = a17;
            }
            new F15(a12, 129);
            new F15(a11, a11);
            new F15(F15, 481111932);
        },
    };
    return o22;
}
let v23 = f8(v6, 481111932, 129, v4);
f8(10, 481111932, 10, f8);
f8(v23, v6, 481111932, v6);
v23.g;
try {
    let v27;
    try { v27 = v23.isSealed(); } catch (e) {}
    v23 = v27;
    v6 = v27;
} catch(e28) {
    e28[0] = e28;
    function f29(a30, a31, a32, a33) {
        const o36 = {
            set g(a35) {
            },
            ...a31,
        };
        return o36;
    }
    f29();
    try { e28(Array); } catch (e) {}
}
const v40 = new Map();
const v44 = [[["21216",Map,v40],v40]];
for (let v45 = 0; v45 < 5; v45++) {
    v44["p" + v45] = v45;
}
new Int32Array(1959);
new Int32Array(512);
new Int16Array(213);
new Int32Array(6);
let v71 = Int16Array;
new v71(184);
const v75 = new Float64Array(65);
[v71] = v75;
const v83 = Symbol.iterator;
const o92 = {
    [v83]() {
        let v85 = 10;
        const o91 = {
            next() {
                v85--;
                const v89 = v85 == 0;
                const o90 = {
                    "done": v89,
                    "value": v85,
                };
                return o90;
            },
        };
        return o91;
    },
};
new Map();
new WeakMap();
Symbol();
