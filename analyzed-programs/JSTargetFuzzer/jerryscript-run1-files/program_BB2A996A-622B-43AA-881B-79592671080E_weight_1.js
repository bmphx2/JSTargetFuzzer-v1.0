const v0 = [857.591855360912,1000.0,-1000000.0];
const v1 = [NaN,-5.573027323539068e+307,1.9680256588106704e+307,0.14547542668187585];
const v2 = [0.1948405528617857,-2.0,1.369926319681003e+308,-2.2250738585072014e-308];
const v3 = [9223372036854775807,-1168044944,2147483648];
for (let v4 = 0; v4 < 32; v4++) {
    v1["p" + v4] = v4;
}
const v7 = [14,9483,16,2147483649];
const v8 = [9007199254740992,536870912,-2,7,-58507,61769,15009];
function f9(a10, a11) {
    const o30 = {
        n(a13, a14, a15, a16) {
            let v17;
            try { v17 = a16(); } catch (e) {}
            this[v1];
            v2.length = 1;
            return v17;
        },
        o(a21, a22) {
            const v27 = [a22];
            return Reflect.apply(a11.join, a10, v27);
        },
    };
    return a10;
}
const v31 = f9(v7, v1);
f9(v8, v0);
const v33 = f9(v3, v1);
class C34 extends f9 {
    valueOf(a36, a37) {
        const v38 = [v0,v0,a37,v3];
        [v38,v2,this,v0,v3];
        [this];
        const v41 = new f9(...v1, ...v0, v31, ...a37, v38);
        return v41;
    }
    5;
    constructor(a43, a44, a45) {
        -1679320101 === 0;
        super(a44, v7);
        ++a43;
        for (let i51 = 0; i51 < 3; i51++) {
            a44[4] = i51;
        }
    }
}
const v57 = new C34(v31, v1, v31);
const v58 = new C34(v57, v8, v33);
new C34(v33, v1, v58);
const v60 = [];
const v61 = [2,-1149901742,1030320580,6];
v61["unshift"]([v61,v61,v61], v60);
