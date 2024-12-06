function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a5;
}
const v6 = new F3(F3);
const v7 = new F3(-2.220446049250313e-16);
const v8 = new F3(-9.246426353108324e+307);
function f9(a10, a11) {
    const o39 = {
        "f": v7,
        ...a11,
        "h": v8,
        "d": F3,
        get c() {
            const v13 = a10 <= -2.220446049250313e-16;
            function F14(a16, a17, a18, a19) {
                if (!new.target) { throw 'must be called with new'; }
                this.d = a16;
                v13.h = v7;
                this.e = v13;
                class C21 {
                    [null];
                }
            }
            new F14(a11, v6, -2.220446049250313e-16, v7);
            new F14(8.453449315672916e+307, v6, -9.246426353108324e+307, a10);
            new F14(-9.246426353108324e+307, v8, 8.453449315672916e+307, a11);
            let {"b":v25,"d":v26,"f":v27,} = v8;
            new f9(-9.246426353108324e+307, a11, v25, v27);
            const v29 = f9(-2.220446049250313e-16, this);
            try { new v29(a10, v26, v29, v29, -9.246426353108324e+307); } catch (e) {}
            Math.exp(-2.0);
            Math.imul(-10 * -2.0, v27);
            a11 & -10;
            let v38;
            try { v38 = a11.n(v27, v7, v6, a10, a10); } catch (e) {}
            return v38;
        },
        "e": v6,
        ...v8,
        [a10]: 8.453449315672916e+307,
    };
    return o39;
}
f9(v7, v8);
f9(v8, v6);
f9(v6, v7);
const v43 = [v7];
[v43];
[-9.246426353108324e+307,v8,v43];
const v46 = [];
const o48 = {
    p() {
        this[v46] = this;
        return v46;
    },
};
