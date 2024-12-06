class C3 {
    get e() {
        let v5 = [this,this,2.381230800776473];
        v5[240] = this;
        v5 = v5;
        for (let v6 = 0; v6 < 32; v6++) {
            const t6 = "exec";
            t6["p" + v6] = v6;
        }
        return v5;
    }
    a = 2147483647;
}
new C3();
new C3();
new C3();
let v18 = [-29049,-2147483647,2147483648,-261208865,0,-9,11];
const v19 = [6,17590];
[-658853788,-256];
let v25 = BigUint64Array;
const v26 = new v25(12);
const v29 = new Uint32Array(v19);
new Uint8Array(16);
let v34;
try { v34 = v18(-4294967295); } catch (e) {}
({"buffer":v18,"d":v25,"g":v34,...v34} = v26);
const o35 = {
};
new Proxy(v29, o35);
const v41 = Symbol.toPrimitive;
const o45 = {
    [v41]() {
        try {
            super.getUint16();
        } catch(e44) {
        }
        return this;
    },
};
function F52(a54, a55, a56, a57) {
    if (!new.target) { throw 'must be called with new'; }
    a56.d = a57;
    this.f = a54;
}
const v58 = new F52(-4294967296, 5n, "-16", "-16");
new F52(-1, -7n, "-16", "global");
const v60 = new F52(-4294967296, 5n, "global", "global");
Symbol == v60;
if (-1) {
} else {
    function F65(a67, a68, a69) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a69;
    }
    const v70 = new F65(F65, v58, "function");
    const t55 = -1;
    new t55(v70, v41, "function");
    new F65(v70, F65, "function");
}
