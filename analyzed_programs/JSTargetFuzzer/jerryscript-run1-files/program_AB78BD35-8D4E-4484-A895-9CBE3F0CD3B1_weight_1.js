const v0 = [];
const v1 = [v0,v0,v0];
let v2 = [v0,v0,v1];
const v3 = [v2,v2];
class C4 {
    get g() {
        [this];
        const v7 = [v2,this];
        [this,v7,v7,v0];
        v2 >>>= v1;
        return v7;
    }
    static set a(a10) {
        this[v2] ||= a10;
        typeof a10 === "string";
    }
}
const v14 = new C4();
const v15 = new C4();
const v16 = new C4();
class C17 {
    p(a19, a20) {
        const o21 = {
        };
        const v23 = new Proxy(v15, o21);
        return v23;
    }
    constructor(a25, a26, a27) {
        const v28 = a26.g;
        const o29 = {
            __proto__: a27,
            "h": a26,
            [v28]: a26,
        };
        for (let v30 = 0; v30 < 32; v30++) {
            this["p" + v30] = v30;
        }
    }
}
const v33 = new C17(C17, v2, C17);
const v34 = new C17(v16, v14, v14);
const v35 = new C17(v16, v34, v2);
class C36 extends C4 {
    static #n(a38, a39, a40) {
        return v33;
    }
    static get b() {
        const o45 = {
            [v16]: v0,
            "g": v34,
            "a": v15,
        };
        try { o45(C4, o45); } catch (e) {}
        return v35;
    }
}
new C36();
new C36();
new C36();
const v50 = v3.constructor;
class C51 extends v50 {
    e = v35;
    #c;
    static 10;
}
new C51();
try { v50(); } catch (e) {}
v15[9];
[v2,C17];
[v35];
[v1,v33];
