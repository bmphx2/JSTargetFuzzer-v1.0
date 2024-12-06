function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = "-13";
    this.a = a6;
}
const v7 = new F3(F3, "b45");
const v8 = new F3(v7, "-65536");
const v9 = new F3(v8, "-13");
[v9,v7];
const v11 = ["b45","b45"];
function F12() {
    if (!new.target) { throw 'must be called with new'; }
}
class C14 extends F12 {
    constructor(a16, a17, a18) {
        super();
        this.__proto__ = F12;
    }
}
new C14(F12, F12, C14);
["-13",v11];
function f24() {
    const o30 = {
        __proto__: "-536870912",
        ..."-536870912",
        get f() {
            let [v28,v29] = this.n();
            return v28;
        },
    };
    return o30;
}
const v31 = f24();
const v32 = f24();
class C34 extends f24 {
    constructor(a36, a37, a38, a39) {
        super();
        const o40 = {
            "construct": f24,
        };
        new Proxy(this, o40);
    }
}
const v43 = new C34();
if (!(v32 <= v43)) {
    let {"b":v45,"d":v46,} = C34;
}
9007199254740990 <= v31;
