const v2 = new Uint16Array(736);
const v5 = new Int16Array(3867);
const v8 = new BigUint64Array(2);
const v9 = [BigUint64Array,v8,v2,2,736];
const v10 = [v2,v8];
const v11 = [Int16Array,v5,v9];
v11.f = v11;
v11[2] = v10;
function f12() {
    return v2;
}
{
    function f13(a14, a15, a16, a17) {
        const o18 = {
            __proto__: v11,
            "a": 2,
        };
        return o18;
    }
    f13(f13, 3867, 736, 3867);
    f13(f12, 3867, 3867, 3867);
    f13(v10, 3867, 3867, 736);
}
