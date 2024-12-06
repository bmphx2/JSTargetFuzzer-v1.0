function f0() {
    const o19 = {
        set h(a5) {
            const t3 = "resolve";
            delete t3[f0];
        },
        __proto__: "exec",
        "c": "resolve",
        "f": 1000000.0,
        257: "exec",
        135: 1000000.0,
        "b": "exec",
        ..."resolve",
        ..."exec",
        "a": "exec",
        ["exec"](a8, a9) {
            let v10;
            try { v10 = new a8("resolve", a9, 1000000.0, 1000000.0); } catch (e) {}
            this[v10];
            for (let v12 = 0; v12 < 32; v12++) {
                const v13 = ("exec")[3285];
                this.__proto__ = a9;
                try { new a9(v13, f0, "resolve", ..."resolve", ...v10); } catch (e) {}
                let v15 = a8.__proto__;
                v15--;
                const t24 = "exec";
                t24["p" + v12] = v12;
            }
            return v10;
        },
    };
    return o19;
}
f0();
f0();
f0();
RegExp.bind("2147483647", [-8,4294967295,148900462]);
