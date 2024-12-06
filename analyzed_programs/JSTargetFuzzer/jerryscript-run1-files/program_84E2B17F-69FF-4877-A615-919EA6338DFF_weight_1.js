const v3 = [-10571,-545868969,268435440,2147483648,-51666];
const v4 = [15,14,-13,51413,9007199254740990,-6,475504344,268435456,861715172,2147483649];
const v5 = [6,1,65535];
class C6 {
    get g() {
        try {
            super.p(65536, v3, this, v4);
        } catch(e9) {
        }
        for (let v10 = 0; v10 < 32; v10++) {
            C6["p" + v10] = v10;
        }
        const v13 = [v5,v4,this,65536];
        const v14 = [v13,v4,65536];
        const v15 = [65536,46084];
        const v16 = v14[5];
        let v17;
        try { v17 = v16(this, ...v15, v13, v16, v16, ...v13); } catch (e) {}
        new Int16Array(5);
        new Uint8ClampedArray(125);
        new BigUint64Array(1);
        return v17;
    }
}
new C6();
new C6();
new C6();
new Array(10);
try { ("description").padEnd(9007199254740992); } catch (e) {}
