function f0() {
}
class C1 extends f0 {
    static h = C1;
    valueOf() {
        const v4 = Symbol.iterator;
        const o13 = {
            [v4]() {
                let v6 = 0;
                const o12 = {
                    next() {
                        v6--;
                        const v10 = v6 == 0;
                        const o11 = {
                            "done": v10,
                            "value": v6,
                        };
                        return o11;
                    },
                };
                return o12;
            },
        };
        return f0;
    }
}
const v14 = new C1();
const v15 = new C1();
const v16 = new C1();
const v17 = [v16,f0,v14,v15,v15,v14];
const v18 = [v15,f0,C1,v17];
[f0,v14];
[[v14,v18,null,null],v17,[v14]];
class C27 {
    m(a29, a30) {
        function F31(a33, a34, a35) {
            if (!new.target) { throw 'must be called with new'; }
            this.c = a35;
            this.b = "mk";
            this.f = a33;
        }
        new F31(a29, 0.7819968330858019, this);
        const v37 = new F31(a29, this, a30);
        a29.__proto__ = C27;
        this[5] = C27;
        new C27(7);
        new Uint32Array(4096);
        new BigUint64Array(-9223372036854775808);
        const v47 = new F31(0.7819968330858019, "mk", v37);
        return v47;
    }
    a;
    h = 943.1398846416655;
}
const v48 = new f0();
const o53 = {
    valueOf() {
        return "mk";
    },
};
const v54 = new C27();
let v55 = new C27();
function F56(a58, a59, a60, a61) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a59;
}
v48.valueOf = "mk";
[3.774534267776463e+307,9.3286968496236,-5.09019147536695];
const v63 = [5.0,-6.453120030313442,2.220446049250313e-16,36710.818736602785,-Infinity,2.0,-567.2575997612171];
const v64 = [1e-15,786.1096948534125,-1.5734942521682175e+308,1.291635685171515e+308];
v64[2] = C27;
Math.max(-1e-15);
Math.cosh(v55);
Math.atan(v63);
const v71 = ++v55;
v48 % v55;
v48 | v71;
v71 | -27209;
let [] = v64;
new F56(v48, v55, v48, v54);
new F56(v54, v55, v54, v54);
new F56(v48, v55, v55, v54);
Math.trunc(0.9331973292538444);
