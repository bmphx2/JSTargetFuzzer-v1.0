function f0() {
}
const v3 = new Array(12, 12);
class C7 extends Array {
    5 = v3;
    6;
    static p(a9, a10, a11) {
        Object.defineProperty(this, "c", { writable: true, enumerable: true, set: f0 });
        function F12(a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
            this.h = a14;
        }
        new F12(a10, a11);
        new F12(9, -4);
        new F12(-4, 9);
        return a9;
    }
}
const v19 = new C7();
const v20 = new C7(12, 12, v19);
const v21 = new C7();
function f22(a23, a24, a25, a26) {
    const o42 = {
        536870887: a26,
        ...v20,
        ...v3,
        [a26](a28, a29, a30) {
            a30 &= this;
            let v31;
            try { v31 = a23(a25, f0, this, a25, v21, a30); } catch (e) {}
            v31 && 9;
            new Float64Array(-40392751);
            const v38 = new Int16Array(2);
            new Float64Array(0);
            return v38;
        },
    };
    return o42;
}
f22(-4, v3, 5, v3);
f22(f22, f0, 12, v19);
f22(v3, f0, 9, v20);
const v47 = [-1000000000.0];
[-975.0602097765409,-Infinity,9.699797813365418,-Infinity,-1000000000.0,294351.53279141407,3.0,130.9988299927345];
[211785.21706734993,0.3447535977729572,760786.0026187547,5.166360361083486,43.46633344208158,4.0,1000.0,-0.5795680481678716];
[-1568511156,1216794623,1171846676,20482,-2,512];
[2147483649,50271,10,1451812645,-8,268435456,-1,7,5];
const v54 = new BigUint64Array(3);
3 in v54;
[257,9,4,-375712526];
for (let i59 = 0, i60 = 10; i59 < i60; i59++, i60--) {
    function* f68(a69, a70) {
        return yield "delete";
    }
    f68(v47, 512);
}
