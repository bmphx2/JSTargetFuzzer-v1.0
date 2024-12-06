const v1 = [false,false,false,false];
[v1];
const v3 = [false,false];
const v7 = [v1,23331n,1073741825n,v1];
const v9 = [1073741825n,[-256n],v3];
function f10(a11, a12, a13, a14) {
    const o25 = {
        [v7]: v1,
        get f() {
            const o16 = {
                __proto__: this,
                ...this,
                "e": 1073741825n,
            };
            return o16;
        },
        [a11](a18, a19) {
            super.b = a14;
            super.f;
            try { new a18(a18); } catch (e) {}
            return v1;
        },
    };
    return o25;
}
f10(1073741825n, -256n, -256n, v7);
f10(-256n, 23331n, 1073741825n, v3);
f10(-256n, 23331n, 23331n, v3);
class C30 {
    [null];
    constructor(a32, a33) {
        try { v3.flatMap(a32, false); } catch (e) {}
    }
    static [v7] = v9;
    65536;
}
