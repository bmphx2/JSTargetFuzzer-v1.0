function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -50642;
    function f3() {
    }
    class C4 extends f3 {
        static h = C4;
        valueOf() {
            const v7 = Symbol.iterator;
            const o16 = {
                [v7]() {
                    let v9 = 10;
                    const o15 = {
                        next() {
                            v9--;
                            const v13 = v9 == 0;
                            const o14 = {
                                "done": v13,
                                "value": v9,
                            };
                            return o14;
                        },
                    };
                    return o15;
                },
            };
            return f3;
        }
    }
    const v17 = new C4();
    const v18 = new C4();
    const v19 = new C4();
    const v20 = [v19,f3,v17,v18,v18];
    const v21 = [v18,f3,C4,v20];
    [f3,v17];
    [[v17,v21,null,null],v20,[v17]];
    class C30 {
        m(a32, a33) {
            function F34(a36, a37, a38) {
                if (!new.target) { throw 'must be called with new'; }
                this.c = a38;
                this.b = "mk";
                this.f = a36;
            }
            new F34(a32, 0.7819968330858019, this);
            const v40 = new F34(a32, this, a33);
            a32.__proto__ = C30;
            this[5] = C30;
            new C30(7);
            new Uint32Array(4096);
            new BigUint64Array(1314);
            const v50 = new F34(0.7819968330858019, "mk", v40);
            return v50;
        }
        a;
        h = 943.1398846416655;
    }
    const v51 = new f3();
    const o56 = {
        valueOf() {
            return "mk";
        },
    };
    const v57 = new C30();
    let v58 = new C30();
    function F59(a61, a62, a63, a64) {
        if (!new.target) { throw 'must be called with new'; }
        this.d = a62;
    }
    v51.valueOf = "mk";
    [3.774534267776463e+307,9.3286968496236,-5.09019147536695];
    const v66 = [5.0,-6.453120030313442,2.220446049250313e-16,36710.818736602785,-Infinity,2.0,-567.2575997612171];
    const v67 = [1e-15,786.1096948534125,-1.5734942521682175e+308,1.291635685171515e+308];
    v67[2] = C30;
    Math.max(-1e-15);
    Math.cosh(v58);
    Math.atan(v66);
    const v74 = ++v58;
    v51 % v58;
    v51 | v74;
    v74 + -27209;
    let [] = v67;
    new F59(v51, v58, v51, v57);
    new F59(v57, v58, v57, v57);
    new F59(v51, v58, v58, v57);
    Math.trunc(0.9331973292538444);
    this.a = -50642;
    this.c = -50642;
}
new F0();
new F0();
new F0();
([true]).toLocaleString(true);
