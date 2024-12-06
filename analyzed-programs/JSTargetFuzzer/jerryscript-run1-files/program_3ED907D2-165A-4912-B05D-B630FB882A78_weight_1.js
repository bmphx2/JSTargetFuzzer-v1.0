[-64267,1000,-1024,-12,2147483649,57109,-41034,-211399883,63448];
const v1 = [-9007199254740991,1446,256,0,-4096,-24621,4294967296,2147483649,-9007199254740992];
const v2 = [-536870912,9007199254740991,51];
const v3 = [-65537,13486,16,1638803140,1024,5,7,449462757,14,256];
const v4 = [-18049,-2147483649,58591,257,-65536,127,41796,52866,-1073741824,212784810];
const v5 = [2.5870964546644305e+306];
for (let v6 = 0; v6 < 32; v6++) {
    v5["p" + v6] = v6;
}
const v9 = [28558,61168,64,-559598506,65535];
const v10 = [127,64,536870887,129,2147483649];
const v11 = [-618565059];
const v12 = [39389];
class C13 {
    constructor(a15, a16) {
        v1[a16] = a15;
        try { a16.valueOf(v4); } catch (e) {}
    }
    static 10 = v10;
    static set a(a22) {
        v12[a22] = v10;
        let v23;
        try { v23 = a22(v12, a22, v9); } catch (e) {}
        function F24(a26, a27, a28) {
            if (!new.target) { throw 'must be called with new'; }
            this.e = a28;
            this.b = a26;
            this.c = v3;
        }
        let v29;
        try { v29 = v10.splice(C13, a22, v3); } catch (e) {}
        try {
            super.setUTCFullYear(C13, v10, a22, v29);
        } catch(e31) {
        }
        const v32 = new v11(v12, v4, v23);
        new F24(v32, a22, v23);
        new F24(v12, v12, a22);
    }
    static valueOf(a36, a37, a38, a39) {
        function F40(a42, a43) {
            if (!new.target) { throw 'must be called with new'; }
            this.g = v1;
            this.b = a42;
            this.f = a38;
        }
        new F40(a39, a36);
        new F40(C13, v2);
        const v46 = new F40(a36, a37);
        const v48 = new BigUint64Array();
        try { v48.set(); } catch (e) {}
        return v46;
    }
}
new C13(v3, v4);
const v51 = new C13(v12, v10);
new C13(v51, v51);
([54783,-268435456,46487,11,-1059659455,16,65537]).fill();
