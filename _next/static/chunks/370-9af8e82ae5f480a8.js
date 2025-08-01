"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [370],
  {
    37179: function (e, l, a) {
      var t = a(85893),
        s = a(67294),
        n = a(41248),
        i = a(21815),
        r = a(64146),
        d = a(30381),
        c = a.n(d),
        o = a(47516),
        u = a(214),
        m = a(12119),
        x = a(50051),
        h = a(97637),
        p = a(32622),
        b = a(54597),
        v = a(87056),
        f = a(27326),
        w = a(22006),
        g = a(21180);
      let { AddressZero: j } = { ...i },
        y = [
          "function balanceOf(address owner) view returns (uint256)",
          "function decimals() view returns (uint8)",
          "function symbol() view returns (string)",
          "function transfer(address to, uint amount) returns (boolean)",
          "function mint(address account, uint256 amount)",
          "function deposit() payable",
          "function withdraw(uint256 amount)",
        ],
        getInputFields = (e) =>
          e
            ? [
                {
                  label: "Amount",
                  name: "amount",
                  type: "number",
                  placeholder: "Amount to wrap / unwrap",
                },
              ]
            : [
                {
                  label: "Chain",
                  name: "chain",
                  type: "select-chain",
                  placeholder: "Select chain to faucet",
                },
                {
                  label: "Recipient Address",
                  name: "address",
                  type: "text",
                  placeholder: "Faucet token to an address",
                },
              ];
      l.Z = (e) => {
        var l, a, i;
        let {
            tokenId: d = "test",
            faucetAmount: N = 1e3,
            contractData: k,
            titleClassName: _ = "",
            className: C = "",
          } = e,
          F = (0, n.I0)(),
          {
            chains: S,
            assets: Z,
            wallet: I,
            balances: A,
          } = (0, n.v9)(
            (e) => ({
              chains: e.chains,
              assets: e.assets,
              wallet: e.wallet,
              balances: e.balances,
            }),
            n.wU
          ),
          { chains_data: O } = { ...S },
          { assets_data: U } = { ...Z },
          { wallet_data: W } = { ...I },
          {
            chain_id: z,
            ethereum_provider: B,
            signer: E,
            address: R,
          } = { ...W },
          { balances_data: q } = { ...A },
          [G, H] = (0, s.useState)(null),
          [T, D] = (0, s.useState)(!0),
          [K, L] = (0, s.useState)(null),
          [P, V] = (0, s.useState)(null),
          [$, J] = (0, s.useState)(null),
          [M, Q] = (0, s.useState)(null),
          [X, Y] = (0, s.useState)(c()().valueOf());
        (0, s.useEffect)(() => {
          if (z && R) {
            let { chain: e } = { ...G },
              { id: l } = { ...(0, v.fr)(z, O) };
            H({ ...G, chain: l || e, address: G ? G.address : R });
          }
        }, [z, R]),
          (0, s.useEffect)(() => {
            V(null), Q(null);
          }, [G]);
        let { chain: ee } = { ...G },
          el = (0, v.j2)(d, U),
          { contracts: ea } = { ...el },
          { symbol: et } = { ...el },
          { wrapped: es, wrappable: en } = { ...k };
        et = (null == es ? void 0 : es.symbol) || et;
        let ei = es || en,
          er = (0, v.fr)(ei ? (null == k ? void 0 : k.chain_id) : ee, O),
          { native_token: ed, explorer: ec, image: eo } = { ...er },
          { url: eu, transaction_path: em } = { ...ec },
          mint = async () => {
            L(!0), V(null), ei && (J(!1), Q(null));
            try {
              let e = k || (0, v.Gr)(z, ea),
                { contract_address: l, decimals: a, wrapped: t } = { ...e },
                s = ei
                  ? (null == t ? void 0 : t.contract_address) || l
                  : (null == G ? void 0 : G.address) || R,
                n = (0, f.vz)(
                  ei ? (null == G ? void 0 : G.amount) : N,
                  ei ? 18 : a
                );
              console.log(
                ei ? "[wrap]" : "[mint]",
                ei ? { value: n } : { address: s, amount: n }
              );
              let i = new r.CH(l, y, E),
                d = ei
                  ? await i.deposit({ value: n, gasLimit: 5e5 })
                  : await i.mint(s, n),
                { hash: c } = { ...d },
                o = await E.provider.waitForTransaction(c),
                { status: u } = { ...o };
              V({
                status: u ? "success" : "failed",
                message: u
                  ? "".concat(ei ? "Wrap" : "Faucet", " Successful")
                  : "Failed to ".concat(ei ? "wrap" : "faucet"),
                ...d,
              }),
                u && getBalances(ee);
            } catch (t) {
              let e = (0, w.nU)(t);
              console.log("[".concat(ei ? "wrap" : "mint", " error]"), t);
              let { code: l } = { ...e },
                { message: a } = { ...e };
              (null == a ? void 0 : a.includes("gas required exceeds")) &&
                (a = "Insufficient balance when trying to wrap."),
                "user_rejected" === l ||
                  V({ status: "failed", ...e, message: a });
            }
            L(!1), ei && Y(c()().valueOf());
          },
          withdraw = async () => {
            J(!0), Q(null), L(!1), V(null);
            try {
              let e = k || (0, v.Gr)(z, ea),
                { wrapped: l } = { ...e },
                { contract_address: a, decimals: t } = { ...l };
              (a = a || (null == e ? void 0 : e.contract_address)),
                (t = t || (null == e ? void 0 : e.decimals) || 18);
              let s = (0, f.vz)(null == G ? void 0 : G.amount);
              console.log("[unwrap]", { amount: s });
              let n = new r.CH(a, y, E),
                i = await n.withdraw(s),
                { hash: d } = { ...i },
                c = await E.provider.waitForTransaction(d),
                { status: o } = { ...c };
              Q({
                status: o ? "success" : "failed",
                message: o ? "Unwrap Successful" : "Failed to unwrap",
                ...i,
              }),
                o && getBalances(ee);
            } catch (t) {
              let e = (0, w.nU)(t);
              console.log("[unwrap error]", t);
              let { code: l } = { ...e },
                { message: a } = { ...e };
              (null == a ? void 0 : a.includes("gas required exceeds")) &&
                (a = "Insufficient balance when trying to unwrap."),
                "user_rejected" === l ||
                  Q({ status: "failed", ...e, message: a });
            }
            J(!1), Y(c()().valueOf());
          },
          getBalances = (e) => F({ type: g.ZK, value: { chain: e } }),
          ex = getInputFields(ei),
          eh =
            ex.length ===
            ex.filter((e) => (null == G ? void 0 : G[e.name])).length,
          ep =
            null === (l = (0, v.pm)(null == er ? void 0 : er.chain_id, j, q)) ||
            void 0 === l
              ? void 0
              : l.amount,
          eb =
            null ===
              (a = (0, v.pm)(
                null == er ? void 0 : er.chain_id,
                (null == es ? void 0 : es.contract_address) ||
                  (null == k ? void 0 : k.contract_address),
                q
              )) || void 0 === a
              ? void 0
              : a.amount,
          ev = !!(
            ei &&
            (0, f.hj)(ep) &&
            (0, f.hj)(null == G ? void 0 : G.amount) &&
            (Number(ep) < Number(G.amount) || 0 >= Number(G.amount))
          ),
          ef = !!(
            ei &&
            (0, f.hj)(eb) &&
            (0, f.hj)(null == G ? void 0 : G.amount) &&
            (Number(eb) < Number(G.amount) || 0 >= Number(G.amount))
          ),
          ew = P || M,
          { status: eg, message: ej, hash: ey } = { ...ew },
          eN = K || $,
          ek =
            (null == B
              ? void 0
              : null === (i = B.constructor) || void 0 === i
              ? void 0
              : i.name) === "WalletConnectProvider";
        return (
          el &&
          (0, t.jsxs)("div", {
            className:
              C ||
              "w-full max-w-md 3xl:max-w-xl bg-white dark:bg-slate-900 rounded border dark:border-slate-800 flex flex-col items-center justify-center space-y-2 mx-auto p-3 sm:p-6 3xl:p-8",
            children: [
              (0, t.jsxs)("button", {
                onClick: () => D(!T),
                className:
                  "w-full flex items-center justify-center text-base font-semibold space-x-1.5 ".concat(
                    _
                  ),
                children: [
                  !E &&
                    (0, t.jsx)("span", {
                      className:
                        "whitespace-nowrap text-xs sm:text-base 3xl:text-2xl font-medium",
                      children: "Connect wallet to",
                    }),
                  (0, t.jsx)("span", {
                    className:
                      "whitespace-nowrap text-xs sm:text-base 3xl:text-2xl font-medium",
                    children: ei ? "Wrap or unwrap ".concat(et) : "Faucet",
                  }),
                  T
                    ? (0, t.jsx)(o.OrA, { size: 18 })
                    : (0, t.jsx)(o.jRD, { size: 18 }),
                ],
              }),
              !T &&
                (0, t.jsxs)("div", {
                  className: "w-full 3xl:space-y-8",
                  children: [
                    ei &&
                      E &&
                      (0, t.jsxs)("div", {
                        className: "form-element mt-2",
                        children: [
                          (0, t.jsx)("div", {
                            className:
                              "form-label text-slate-600 dark:text-slate-200 font-medium",
                            children: "Balance",
                          }),
                          (0, t.jsxs)("div", {
                            className:
                              "flex items-center justify-between space-x-2",
                            children: [
                              (0, t.jsx)(x.Z, {
                                chainId: (null == k ? void 0 : k.chain_id) || z,
                                asset: d,
                                contractAddress: j,
                                decimals:
                                  (null == ed ? void 0 : ed.decimals) || 18,
                                symbol:
                                  (null == ed ? void 0 : ed.symbol) ||
                                  el.symbol,
                                trigger: X,
                                className:
                                  "bg-slate-100 dark:bg-slate-800 rounded py-1.5 px-2.5",
                              }),
                              (0, t.jsx)(x.Z, {
                                chainId: (null == k ? void 0 : k.chain_id) || z,
                                asset: d,
                                contractAddress:
                                  (null == es ? void 0 : es.contract_address) ||
                                  (null == k ? void 0 : k.contract_address),
                                decimals:
                                  (null == es ? void 0 : es.decimals) ||
                                  (null == k ? void 0 : k.decimals) ||
                                  18,
                                symbol:
                                  (null == es ? void 0 : es.symbol) ||
                                  (null == k ? void 0 : k.symbol),
                                trigger: X,
                                className:
                                  "bg-slate-100 dark:bg-slate-800 rounded py-1.5 px-2.5",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ex.map((e, l) => {
                      let {
                        label: a,
                        name: s,
                        type: n,
                        placeholder: i,
                      } = { ...e };
                      return (0, t.jsxs)(
                        "div",
                        {
                          className: "form-element 3xl:space-y-2",
                          children: [
                            a &&
                              (0, t.jsx)("div", {
                                className:
                                  "form-label text-slate-600 dark:text-slate-200 3xl:text-xl font-medium",
                                children: a,
                              }),
                            "select-chain" === n
                              ? (0, t.jsx)("div", {
                                  children: (0, t.jsx)(b.Z, {
                                    disabled: eN,
                                    value: null == G ? void 0 : G[s],
                                    onSelect: (e) => H({ ...G, [s]: e }),
                                  }),
                                })
                              : (0, t.jsx)("input", {
                                  type: n,
                                  disabled: eN,
                                  placeholder: i,
                                  value: null == G ? void 0 : G[s],
                                  onChange: (l) => {
                                    let a;
                                    "number" === n
                                      ? (("" === l.target.value ||
                                          /^[0-9.\b]+$/.test(l.target.value)) &&
                                          (a = l.target.value),
                                        "string" == typeof a &&
                                          (a.startsWith(".") &&
                                            (a = "0".concat(a)),
                                          (a = (0, w.yd)(a))))
                                      : (a = l.target.value),
                                      H({ ...G, [e.name]: a });
                                  },
                                  className:
                                    "form-input rounded border-0 focus:ring-0 3xl:text-2xl",
                                }),
                          ],
                        },
                        l
                      );
                    }),
                    E &&
                      eh &&
                      (0, t.jsxs)("div", {
                        className: "flex justify-end space-x-2 mb-2",
                        children: [
                          (0, t.jsx)("button", {
                            disabled: eN,
                            onClick: () => {
                              let { id: e } = { ...(0, v.fr)(z, O) };
                              H({ ...G, chain: e, address: R }), D(!T);
                            },
                            className:
                              "bg-transparent hover:bg-slate-100 dark:hover:bg-slate-900 ".concat(
                                eN ? "cursor-not-allowed" : "",
                                " rounded font-medium py-2 px-3"
                              ),
                            children: "Cancel",
                          }),
                          (null == er ? void 0 : er.chain_id) !== z
                            ? (0, t.jsxs)(p.Z, {
                                connectChainId:
                                  null == er ? void 0 : er.chain_id,
                                className:
                                  "bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 ".concat(
                                    eN ? "cursor-not-allowed" : "",
                                    " rounded flex items-center text-white text-sm font-medium space-x-1.5 py-2 px-3"
                                  ),
                                children: [
                                  (0, t.jsxs)("span", {
                                    children: [
                                      ek ? "Reconnect" : "Switch",
                                      " to",
                                    ],
                                  }),
                                  eo &&
                                    (0, t.jsx)(h.Z, {
                                      src: eo,
                                      width: 24,
                                      height: 24,
                                      className: "rounded-full",
                                    }),
                                  (0, t.jsx)("span", {
                                    className: "font-medium",
                                    children: null == er ? void 0 : er.name,
                                  }),
                                ],
                              })
                            : (0, t.jsxs)(t.Fragment, {
                                children: [
                                  (0, t.jsxs)("button", {
                                    disabled: eN || ev,
                                    onClick: () => mint(),
                                    className: "".concat(
                                      eN || ev
                                        ? "bg-red-400 dark:bg-red-500 cursor-not-allowed"
                                        : "bg-red-600 hover:bg-red-700",
                                      " rounded flex items-center text-white font-semibold space-x-1.5 py-2 px-3"
                                    ),
                                    children: [
                                      K &&
                                        (0, t.jsx)("div", {
                                          children: (0, t.jsx)(u.Z, {
                                            width: 18,
                                            height: 18,
                                            color: "white",
                                          }),
                                        }),
                                      ei
                                        ? (0, t.jsx)("span", {
                                            children: "Wrap",
                                          })
                                        : (0, t.jsxs)(t.Fragment, {
                                            children: [
                                              (0, t.jsx)("span", {
                                                children: "Faucet",
                                              }),
                                              (0, t.jsx)("span", {
                                                className: "font-semibold",
                                                children: N,
                                              }),
                                              (0, t.jsx)("span", {
                                                children:
                                                  (null == k
                                                    ? void 0
                                                    : k.symbol) || et,
                                              }),
                                            ],
                                          }),
                                    ],
                                  }),
                                  ei &&
                                    (0, t.jsxs)("button", {
                                      disabled: eN || ef,
                                      onClick: () => withdraw(),
                                      className: "".concat(
                                        eN || ef
                                          ? "bg-red-400 dark:bg-red-500 cursor-not-allowed"
                                          : "bg-red-600 hover:bg-red-700",
                                        " rounded flex items-center text-white font-semibold space-x-1.5 py-2 px-3"
                                      ),
                                      children: [
                                        $ &&
                                          (0, t.jsx)("div", {
                                            children: (0, t.jsx)(u.Z, {
                                              width: 18,
                                              height: 18,
                                              color: "white",
                                            }),
                                          }),
                                        (0, t.jsx)("span", {
                                          children: "Unwrap",
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                        ],
                      }),
                  ],
                }),
              ew &&
                (0, t.jsx)("div", {
                  className: "w-full mx-2 sm:mx-4",
                  children: (0, t.jsx)(m.Z, {
                    status: eg,
                    className: "text-white mt-1 mb-2 mx-0",
                    children: (0, t.jsxs)("div", {
                      className: "flex flex-wrap items-center justify-between",
                      children: [
                        (0, t.jsx)("span", {
                          className:
                            "break-all leading-5 text-sm font-medium mr-1",
                          children: ej,
                        }),
                        "success" === eg &&
                          ey &&
                          eu &&
                          (0, t.jsx)("a", {
                            href: ""
                              .concat(eu)
                              .concat(
                                null == em ? void 0 : em.replace("{tx}", ey)
                              ),
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "pr-1.5",
                            children: (0, t.jsxs)("span", {
                              className: "whitespace-nowrap font-semibold",
                              children: ["View on ", ec.name],
                            }),
                          }),
                      ],
                    }),
                  }),
                }),
            ],
          })
        );
      };
    },
  },
]);
