function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -1;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v8 = new Int8Array(162);
new Int32Array(2);
new BigUint64Array(596);
const v15 = [v4];
const v16 = [v5,v15,v15,162,v8];
[596,v16,v16,2];
switch (F0) {
    case 2:
        const v18 = v3.h;
        for (let v19 = 0; v19 < 32; v19++) {
            v18["p" + v19] = v19;
        }
        break;
}
