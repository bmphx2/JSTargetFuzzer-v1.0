function f1() {
    const o4 = {
        [false]() {
            this.__proto__ = this;
            let v3;
            try {
            const t0 = false;
            v3 = t0(this, this, this);
            } catch (e) {}
            v3 >>>= this;
            return false;
        },
        "g": false,
        "d": false,
        "h": false,
        "c": false,
    };
    return o4;
}
const v5 = f1();
const v6 = f1();
const v7 = f1();
function f8() {
    return v5;
}
const v15 = new f8();
const v16 = [f8,v15,v15,v15];
[v16,false,v7];
[v6,false,f1,f1,0.12333901729786811];
new f8(0.12333901729786811, false, v7, ...v16);
[-1000000000000.0,1000000.0,2.220446049250313e-16,1000000000.0,0.7488765161493934,-3.4410776767654276,-52.996460303824165,-1e-15,-1e-15,-1.7976931348623157e+308];
[0.5054320280142438,-1.0];
[105.53101890717699,4.0];
