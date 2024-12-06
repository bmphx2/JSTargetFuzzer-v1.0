[965.0227667536824,4.0,0.12504352969486976,0.0,0.01827573101566493,-4.337191523744364e+306,-183.96862180700953,1000000.0,545713.5545555069,-381658.1013070053];
[-Infinity,9.638407577542132,2.0,-474.0366361432559,-1.0922609059978778e+308,-3.8379534559982975,-515.858893131913,21863.632520425832,9.84835098155816,1.7976931348623157e+308];
const v5 = [-1000000000.0,-529487.7243877148,-1.0,6.227146858859843,1e-15,-9.606258169519302e+307];
const v6 = [v5,v5,v5,"getSeconds"];
const v7 = ["byteOffset",v6];
const v8 = [v5,v7,v6,v5,"byteOffset"];
function f9(a10, a11) {
    const o23 = {
        o(a13, a14) {
            let v15;
            try { v15 = new a13("getSeconds", this, a13, a14, "getSeconds"); } catch (e) {}
            const v17 = Symbol.toPrimitive;
            const o22 = {
                [v17]() {
                    const v19 = [v15,this,a10,v8,"getSeconds"];
                    [v19,Symbol,a14,v8];
                    [v19];
                    return a10;
                },
            };
            return "p";
        },
    };
    return o23;
}
f9("byteOffset", v7);
f9("p", v5);
f9("getSeconds", v6);
class C27 extends f9 {
    static d = v6;
    5;
    static #h;
    static 65537;
    d;
}
new C27();
new C27();
new C27();
