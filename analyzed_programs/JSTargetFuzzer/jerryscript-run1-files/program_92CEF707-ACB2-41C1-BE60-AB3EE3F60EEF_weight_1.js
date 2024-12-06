const v1 = [true,true,true];
const v2 = [v1,v1,true,v1];
const v3 = [v2,v1,v2,true];
function f7() {
    const v8 = f7(...v3, ...v2, f7, f7);
    function F9(a11, a12) {
        if (!new.target) { throw 'must be called with new'; }
        this.e = v8;
        this.a = v8;
        this.h = v8;
    }
    const v13 = new F9(f7, v2);
    new F9(v13, -1.7976931348623157e+308);
    new F9(-1.7976931348623157e+308, F9);
    return 8.659205237889303;
}
let v24 = (-2n) ** 63703n;
v24 += -12n;
