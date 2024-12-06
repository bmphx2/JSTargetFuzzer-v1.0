function f1() {
    const o7 = {
        __proto__: "-536870912",
        ..."-536870912",
        get f() {
            let [v5,v6] = this.n();
            return v5;
        },
    };
    return o7;
}
const v8 = f1();
const v9 = f1();
class C11 extends f1 {
    constructor(a13, a14, a15, a16) {
        super();
        const o17 = {
            "construct": f1,
        };
        new Proxy(this, o17);
    }
}
const v20 = new C11();
if (!(v9 <= v20)) {
    let {"b":v22,"d":v23,} = C11;
}
9007199254740990 <= v8;
function F25() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = undefined;
}
const v27 = new F25();
const v28 = new F25();
new F25(undefined);
[-7,65536,1073741823];
[-1377052284,1016707077,14,9007199254740990,255,-41513];
[129,1063432732,13,1073741825,-13,65537,-16151];
function f36() {
    return f36;
}
const v40 = new Uint32Array(512, -65536, v27, v28);
v40.reduceRight(f36, 53217);
