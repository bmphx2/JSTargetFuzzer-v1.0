function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -572621020;
}
const v3 = new F0();
const v4 = new F0();
new F0();
function f7(a8) {
    const o9 = {
        "e": a8,
        [a8]: a8,
    };
    return o9;
}
f7(v4, f7(v3), f7(v4));
function f21() {
}
function f22() {
    const o28 = {
        get g() {
            new f21();
            return f21;
        },
        "h": f21,
        ...f21,
        "search": f21,
        "a": f21,
        ...f21,
    };
    return o28;
}
f22();
const v30 = f22();
f22();
let v34 = Int32Array;
let v35 = new v34(4096);
class C39 {
}
async function f40(a41, a42) {
    await 512;
    return C39;
}
new Uint32Array(129);
let v47 = new Int16Array(512);
[,v34,v47,v35] = v47;
v30.g += 4096;
const v49 = Symbol.iterator;
const o72 = {
    [v49]() {
        let v51 = 10;
        536870888 !== 1071332886;
        const v56 = new v47();
        const v58 = new Int32Array(v56, 129, 129);
        const v61 = new Uint8ClampedArray(3598);
        const v63 = new Int16Array(v61);
        v63["indexOf"](v58);
        const o71 = {
            next() {
                v51--;
                const v69 = v51 == 0;
                const o70 = {
                    "done": v69,
                    "value": v51,
                };
                return o70;
            },
        };
        return o71;
    },
};
