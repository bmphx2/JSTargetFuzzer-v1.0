class C3 {
    constructor(a5) {
        const o10 = {
            valueOf() {
                return "9007199254740990";
            },
        };
    }
    static d;
}
const v11 = new C3(-1.122227115430364e+308);
const v12 = new C3("9007199254740990");
new C3(v11);
const v17 = [2,v12,-1.122227115430364e+308,256];
const v19 = [-128,256,-128,[-128,2,"9007199254740990",-128,-4],-1.122227115430364e+308];
try { v12.return(C3, v19, "9007199254740990", -1.122227115430364e+308); } catch (e) {}
const v21 = new C3(v17);
for (let v22 = 0; v22 < 32; v22++) {
    v21["p" + v22] = v22;
}
const v27 = new Int32Array(2083);
new Uint8Array(255);
const v33 = new Int16Array(7);
function f34(a35, a36, a37) {
    const o44 = {
        "h": Int32Array,
        set e(a39) {
            e = a36;
            [a37,a36];
            [v27];
            [Int16Array,Uint8Array];
            this.h;
        },
        __proto__: v33,
        "b": Uint8Array,
        "c": 255,
        ...a35,
        1053877365: a36,
    };
    return o44;
}
const v45 = f34(2083, 255, 7);
const v46 = f34(v45, 7, 2083);
f34(f34, 255, 7);
v45[-2] &= 2083;
v33[-1] -= 7;
let v48 = 10;
for (; v48--;) {
    v46.h;
    v46[Symbol.toPrimitive] = 7;
}
