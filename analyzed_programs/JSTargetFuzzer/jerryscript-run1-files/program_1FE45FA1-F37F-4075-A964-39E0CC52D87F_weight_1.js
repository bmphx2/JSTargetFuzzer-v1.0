function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 11;
    this.b = 1073741823;
    this.g = a6;
}
const v7 = new F3(F3, 11);
const v8 = new F3(F3, 1073741823);
const v9 = new F3(v8, 1073741823);
const v10 = [11,v9,v9,F3];
const v11 = [v8,11,F3,2147483649];
const v12 = [v10,v9];
const v21 = new Array(10);
let v23 = 4096;
function f25(a26, a27, a28, a29) {
    const o45 = {
        "g": v23,
        ...a29,
        "e": a27,
        set b(a31) {
            function F32(a34, a35) {
                if (!new.target) { throw 'must be called with new'; }
                this.g = a34;
                delete this[8];
                a34[v11] = v10;
                new Set();
                for (let v39 = 0; v39 < 32; v39++) {
                    v12["p" + v39] = v39;
                }
            }
            new F32(a29, 129);
            new F32(a28, a28);
            new F32(F32, 481111932);
        },
    };
    return o45;
}
v11.__proto__;
new Array(10, v9, 2147483649, 1073741823, 2147483649, F3);
const o48 = {
    "apply": f25,
    "call": f25,
    "deleteProperty": Array,
    "getPrototypeOf": Array,
    "set": Array,
};
new Proxy(v7, o48);
let v51 = f25(v23, 481111932, 129, v21);
f25(10, 481111932, 10, f25);
f25(v51, v23, 481111932, v23);
v51.g;
try {
    let v55;
    try { v55 = v51.isSealed(); } catch (e) {}
    v51 = v55;
    v23 = v55;
} catch(e56) {
    e56[0] = e56;
    try { e56(Array); } catch (e) {}
}
new Int32Array(1959);
new Int32Array(512);
const v66 = new Int16Array(213);
function f67() {
    return v66;
}
const v69 = Symbol.iterator;
const o78 = {
    [v69]() {
        let v71 = 10;
        const o77 = {
            next() {
                v71--;
                const v75 = v71 == 0;
                const o76 = {
                    "done": v75,
                    "value": v71,
                };
                return o76;
            },
        };
        return o77;
    },
};
