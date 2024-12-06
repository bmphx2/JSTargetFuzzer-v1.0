function f3() {
    return -4;
}
let v4 = [f3,4];
const v6 = [-4,4,[v4,4,v4,-4,4],f3,v4];
function F7(a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a9;
    this.b = 4;
    this.e = a10;
}
const v11 = new F7(4, f3);
const v12 = new F7(708286139, v6);
new F7(708286139, v11);
new Set();
function f19() {
}
function f20() {
    const o26 = {
        get g() {
            new f19();
            return f19;
        },
        "h": f19,
        ...f19,
        "g": f19,
        "a": f19,
        ...f19,
    };
    return o26;
}
f20();
const v28 = f20();
f20();
let v32 = Int32Array;
let v33 = new v32(4096);
let v35 = 0;
while (v35 < 0) {
    const v38 = [f3];
    const v39 = [v38,v38,v35,v12,v4];
    [-523.7583208762486,v39,129,v39,v39];
    v35++;
}
const v43 = new Uint32Array(129);
let v46 = new Int16Array(512);
[,v32,v46,v33] = v46;
v28.g += 4096;
const v48 = Symbol.iterator;
const o68 = {
    [v48]() {
        let v50 = 10;
        const o67 = {
            next() {
                const v52 = v50--;
                const v54 = v50 == 0;
                const o55 = {
                    "done": v54,
                    "value": v50,
                };
                o55 < v43;
                const v57 = [239.60046828487998,v52];
                const v58 = [v57,v4,v4];
                [Uint32Array,v52,v58,v58];
                let v62 = 0.9502369697120533;
                v62--;
                Math.tan(v57);
                v4--;
                v62 && v4;
                return o55;
            },
        };
        return o67;
    },
};
