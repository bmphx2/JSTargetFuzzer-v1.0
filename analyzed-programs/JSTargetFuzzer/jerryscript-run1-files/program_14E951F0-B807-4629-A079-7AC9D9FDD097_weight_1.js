const v1 = [true,true,true];
const v2 = [v1,v1,true,v1];
const v3 = [v2,v1,v2,true];
function f7() {
    const v8 = f7(...v3, ...f7, f7, f7);
    const v9 = v8 && v3;
    try { v3.copyWithin(v8, v9, v9); } catch (e) {}
    const o11 = {
        "get": f7,
    };
    new Proxy(v2, o11);
    function F14(a16, a17) {
        if (!new.target) { throw 'must be called with new'; }
        this.e = v8;
        this.a = v8;
        const o18 = {
        };
        new Proxy(F14, o18);
        v1.toString = f7;
        this.h = v8;
    }
    const v21 = new F14(f7, v2);
    new F14(v21, -1.7976931348623157e+308);
    new F14(-1.7976931348623157e+308, F14);
    return 8.659205237889303;
}
let v37 = -65536;
Math.hypot(v1);
!v37;
--v37;
--v37;
let v43 = (-2n) ** 63703n;
v43 += -12n;
