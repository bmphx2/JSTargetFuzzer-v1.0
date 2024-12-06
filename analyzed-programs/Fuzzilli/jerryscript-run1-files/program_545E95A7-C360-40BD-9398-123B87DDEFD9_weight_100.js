let v0 = "size";
let v2 = -22232;
class C3 {
    static #h = "m";
    o(a5) {
        let v4 = this;
        ({"d":v4,"e":v2,"g":v0,} = v4);
        const v6 = a5?.b;
        try {
            v4.#h;
        } catch(e9) {
        }
        return v6;
    }
    #g;
    g;
    #f = v0;
}
const v10 = new C3();
const v11 = new C3();
const v12 = new C3();
class C13 extends C3 {
    constructor(a15, a16, a17, a18) {
        let v14 = this;
        super();
        for (const v19 in a18) {
            const v20 = v10 << v2;
            let v21;
            try { v21 = v11.o(v12, v20, "m", v14); } catch (e) {}
            a15.__proto__;
            v21.__proto__ = v14;
        }
        v14 = v11;
    }
    1073741824;
    10;
    [-2];
    #f;
}
const v23 = new C13(C13, v12, C3, v2);
const v24 = new C13(v23, v11, v12, v11);
new C13(v0, v12, C3, v23);
class C26 extends C13 {
    valueOf(a28, a29, a30, a31) {
        function f32(a33, a34, a35) {
            const o36 = {
                "h": a34,
            };
            return o36;
        }
        f32(a29, f32(v24, v2, f32), v24);
        f32(v10, v2, v2);
        return v11;
    }
    b = v24;
    static #g = v23;
}
new C26();
const v41 = new C26();
const v42 = new C26();
const v43 = v10 && C3;
function F44(a46, a47, a48) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = "m";
}
new F44(v42, v43, v41);
const v50 = new F44(v23, v11, v12);
const v51 = new F44(v50, v10, v41);
function f52() {
    return v51;
}
