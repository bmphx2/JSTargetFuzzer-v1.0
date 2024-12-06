function f0() {
    const o4 = {
        "a": -5,
        "f": Infinity,
        "b": Infinity,
        ...Infinity,
        ...-5,
        "h": Infinity,
        __proto__: 10000,
        "g": -5,
        "d": 10000,
        [10000]: 10000,
    };
    return o4;
}
const v5 = f0();
f0();
const v7 = f0();
class C8 {
    o(a10, a11) {
        let v13;
        try { v13 = a11["n"]("n", a10); } catch (e) {}
        [v13];
        [v7,[v7,a11,v5,a10],a10];
        return v13;
    }
    [v7] = v5;
    [f0] = v5;
}
new C8();
new C8();
new C8();
[52502,1976565089,-44346829,-9007199254740992,4,9007199254740991];
[58024,52480,255,660979629,60341,9223372036854775807,-9223372036854775807,128,2022347434,10000];
[-1463436026,-9007199254740991,4294967296,-1,40889,536870888];
with (Symbol.isConcatSpreadable) {
    function F26(a28, a29, a30) {
        if (!new.target) { throw 'must be called with new'; }
    }
    new F26(description);
}
