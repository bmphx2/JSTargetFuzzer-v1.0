let v2 = 65537;
class C3 {
    static o(a5, a6) {
        let v8 = 1000;
        v2++;
        ~(v8--);
        v2 / -13;
        !v2;
        +v2;
        return a6;
    }
}
new C3();
const v17 = new C3();
const v18 = new C3();
const v19 = [-9223372036854775807];
[-12,3,-37498,-2,256,1073741823];
const v21 = [1,5];
function F22(a24, a25, a26, a27) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a26;
}
new F22(v17, v21, v19, v21);
new F22(v18, v19, C3, v21);
Math.tanh(8);
Math.sqrt(2147483647);
Math.round(2147483647);
new F22(v19, v19, C3, C3);
function f36() {
}
function f37() {
    const o43 = {
        get g() {
            new f36();
            return f36;
        },
        "h": f36,
        ...f36,
        "g": f36,
        "a": f36,
        ...f36,
    };
    return o43;
}
f37();
const v45 = f37();
f37();
let v49 = Int32Array;
let v50 = new v49(4096);
let v52 = Uint32Array;
new v52(129);
let v56 = new Int16Array(512);
[,v49,v56,v50] = v56;
v45.g += 4096;
const v58 = Symbol.iterator;
const o69 = {
    [v58]() {
        let v60 = 10;
        const o68 = {
            next() {
                super.f;
                v52 >>>= v49;
                let {"a":v63,} = this;
                v45[v63] = this;
                v63 = F22;
                v60--;
                const v66 = v60 == 0;
                const o67 = {
                    "d": v50,
                    "f": v60,
                    "b": v60,
                    ...C3,
                    "g": true,
                    "done": v66,
                    "value": v60,
                };
                return o67;
            },
        };
        return o68;
    },
};
