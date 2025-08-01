"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [971],
  {
    43285: function (e, s, a) {
      var t = a(85893),
        l = a(60155),
        r = a(27326),
        n = a(22006);
      s.Z = (e) => {
        let { value: s, estimatedValue: a } = e,
          o = Number(s),
          i = Number(a);
        return (
          (0, r.hj)(s) &&
          (((0, r.hj)(a) && i > o) || o < 0.2 || o > 5) &&
          (0, t.jsxs)("div", {
            className: "flex items-start space-x-1.5 3xl:space-x-2.5",
            children: [
              (0, t.jsx)(l.OvZ, {
                size: 16,
                className:
                  "min-w-max 3xl:w-5 3xl:h-5 text-yellow-500 dark:text-yellow-400",
              }),
              (0, t.jsx)("div", {
                className:
                  "text-yellow-500 dark:text-yellow-400 text-xs 3xl:text-xl",
                children:
                  (0, r.hj)(a) && i > o
                    ? (0, t.jsxs)(t.Fragment, {
                        children: [
                          "Slippage tolerance is too low",
                          (0, t.jsx)("br", {}),
                          "Estimated: ",
                          (0, n.yd)(a, 2),
                          "%",
                          (0, t.jsx)("br", {}),
                          "(use a larger amount or set tolerance higher)",
                        ],
                      })
                    : o < 0.2
                    ? "Your transfer may not complete due to low slippage tolerance."
                    : "Your transfer may be frontrun due to high slippage tolerance.",
              }),
            ],
          })
        );
      };
    },
    92067: function (e, s, a) {
      a.d(s, {
        Z: function () {
          return asset;
        },
      });
      var t = a(85893),
        l = a(67294),
        r = a(41248),
        n = a(59335),
        o = a(53731),
        i = a(25935),
        c = a(86893),
        d = a(21815),
        m = a(96486),
        x = a.n(m),
        h = a(91172),
        p = a(97637),
        u = a(95223),
        v = a(87056),
        b = a(27326),
        j = a(22006);
      let { AddressZero: f } = { ...d };
      var assets = (e) => {
          let {
              value: s,
              inputSearch: a,
              onSelect: l,
              chain: n,
              destinationChain: o,
              isBridge: i = !1,
              isPool: c = !1,
              showNextAssets: d = !1,
              showNativeAssets: m = !1,
              showOnlyWrappable: g = !1,
              data: w,
            } = e,
            {
              chains: N,
              assets: y,
              pool_assets: k,
              pools: _,
              balances: q,
            } = (0, r.v9)(
              (e) => ({
                chains: e.chains,
                assets: e.assets,
                pool_assets: e.pool_assets,
                pools: e.pools,
                balances: e.balances,
              }),
              r.wU
            ),
            { chains_data: C } = { ...N },
            { assets_data: Z } = { ...y },
            { pool_assets_data: P } = { ...k },
            { pools_data: S } = { ..._ },
            { balances_data: A } = { ...q },
            V = (0, v.fr)(n, C),
            { chain_id: W, domain_id: G } = { ...V },
            B = (
              c
                ? (0, j.qo)(
                    x().concat(
                      P,
                      w &&
                        (0, j.qo)(S)
                          .filter((e) => (0, j.qq)(e.domainId, G))
                          .map((e) => {
                            let {
                                asset_data: s,
                                contract_data: a,
                                adopted: t,
                                local: l,
                              } = { ...e },
                              { contracts: r } = { ...s },
                              { contract_address: n, image: o } = { ...a },
                              i = x()
                                .cloneDeep(r)
                                .map((e) => {
                                  if ((0, v.Gr)(n, r)) {
                                    let e =
                                      (null == t ? void 0 : t.address) &&
                                      !(0, j.qq)(t.address, n)
                                        ? t
                                        : (null == l ? void 0 : l.address) &&
                                          !(0, j.qq)(l.address, n)
                                        ? l
                                        : null;
                                    if (e) {
                                      let {
                                          address: s,
                                          symbol: a,
                                          decimals: t,
                                        } = { ...e },
                                        l = (0, j.Vl)(o, "normal", "/", !1),
                                        r = x().last(l);
                                      return {
                                        contract_address: s,
                                        chain_id: W,
                                        decimals: t,
                                        symbol: a,
                                        image: o
                                          ? a
                                            ? a.startsWith(u.VP)
                                              ? r.startsWith(u.VP)
                                                ? o
                                                : l
                                                    .map((e, s) =>
                                                      s === l.length - 1
                                                        ? ""
                                                            .concat(u.VP)
                                                            .concat(e)
                                                        : e
                                                    )
                                                    .join("/")
                                              : r.startsWith(u.VP)
                                              ? l
                                                  .map((e, s) =>
                                                    s === l.length - 1
                                                      ? e.substring(u.VP.length)
                                                      : e
                                                  )
                                                  .join("/")
                                              : o
                                            : o
                                          : void 0,
                                      };
                                    }
                                  }
                                  return e;
                                });
                            return { ...s, contracts: i };
                          })
                    )
                  )
                : (0, j.qo)(Z).filter(
                    (e) =>
                      !i ||
                      ((0, j.qo)(e.contracts).findIndex(
                        (e) => e.chain_id === W && !1 !== e.is_bridge
                      ) > -1 &&
                        (!o ||
                          (!(0, j.qo)(e.exclude_destination_chains).includes(
                            o
                          ) &&
                            !(0, j.qo)(e.exclude_source_chains).includes(n))))
                  )
            ).filter((e) => !e.disabled),
            D = x().orderBy(
              (0, j.qo)(B)
                .filter((e) => !a || e)
                .flatMap((e) => {
                  let { symbol: s, image: t, contracts: l } = { ...e },
                    r = (0, v.Gr)(W, l),
                    { next_asset: n, wrappable: o } = { ...r },
                    c = (0, j.qo)(
                      x().concat(
                        o &&
                          i &&
                          (m || g) && {
                            ...r,
                            contract_address: f,
                            symbol: "DAI" === s ? "X".concat(s) : s,
                            image:
                              null == t ? void 0 : t.replace("/dai.", "/xdai."),
                          },
                        (!g || o) && { ...r },
                        n && i && d && { ...r, ...n, is_next_asset: !0 }
                      )
                    );
                  return c.map((s) => {
                    let { contract_address: t, is_next_asset: r } = { ...s },
                      n = x()
                        .cloneDeep(l)
                        .map((e) => ((0, v.Gr)(W, l) ? s : e));
                    return {
                      ...e,
                      is_next_asset: r,
                      contracts: n,
                      scores: (0, j.qo)(
                        x().concat(
                          ["id", "symbol", "name"].map((s) =>
                            (0, j.Vl)(e[s], "lower", " ")
                              .join(" ")
                              .startsWith(a.toLowerCase())
                              ? a.length > 1
                                ? a.length / e[s].length
                                : a.length > 0
                                ? 0.1
                                : 0.5
                              : -1
                          ),
                          s &&
                            (a.startsWith("0x") && t
                              ? (0, j.qq)(t, a)
                              : ["symbol", "name"].map((e) =>
                                  (0, j.Vl)(s[e], "lower", " ")
                                    .join(" ")
                                    .startsWith(a.toLowerCase())
                                    ? a.length > 1
                                      ? a.length / s[e].length
                                      : a.length > 0
                                      ? 0.1
                                      : 0.5
                                    : -1
                                ))
                        )
                      ),
                    };
                  });
                })
                .map((e) => {
                  let { is_next_asset: s, group: a, scores: t } = { ...e };
                  return {
                    ...e,
                    group: a || (s ? "NextAssets" : ""),
                    max_score: x().max(t),
                  };
                })
                .filter((e) => e.max_score > 0.1),
              ["group", "max_score"],
              ["asc", "desc"]
            ),
            z = x().uniqBy(
              (0, j.qo)(B).filter((e) => e.preset),
              "id"
            );
          return (0, t.jsxs)("div", {
            children: [
              z.length > 0 &&
                !g &&
                (0, t.jsx)("div", {
                  className: "flex flex-wrap items-center mt-1 mb-4",
                  children: z.map((e, a) => {
                    let {
                      id: r,
                      symbol: n,
                      name: o,
                      image: c,
                      contracts: d,
                    } = { ...e };
                    return (0, t.jsxs)(
                      "div",
                      {
                        onClick: () => {
                          let s = (0, v.Gr)(W, d, {
                              chain_id: W,
                              return_all: !0,
                            }).find((e) => e.wrappable || e.contract_address),
                            { wrappable: a } = { ...s },
                            { contract_address: t, symbol: n } = { ...s };
                          (t = a ? f : t),
                            (n = a ? e.symbol : n),
                            l(r, i ? n : t);
                        },
                        className:
                          "hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded cursor-pointer flex items-center hover:font-semibold space-x-1 mr-1.5 py-1 px-1.5",
                        children: [
                          c &&
                            (0, t.jsx)(p.Z, {
                              src: c,
                              width: 20,
                              height: 20,
                              className: "rounded-full",
                            }),
                          (0, t.jsx)("span", {
                            className: "whitespace-nowrap ".concat(
                              r === s ? "font-bold" : ""
                            ),
                            children: n || o,
                          }),
                        ],
                      },
                      a
                    );
                  }),
                }),
              (0, t.jsx)("div", {
                className: "max-h-96 overflow-y-scroll",
                children: D.map((e, a) => {
                  var r;
                  let {
                      id: n,
                      name: o,
                      contracts: c,
                      group: d,
                      disabled: m,
                    } = { ...e },
                    x = (0, v.Gr)(W, c),
                    { contract_address: u } = { ...x },
                    { symbol: f, image: g } = { ...x };
                  (f = f || e.symbol || o), (g = g || e.image);
                  let N = (null == w ? void 0 : w.contract_address)
                      ? (0, j.qq)(u, w.contract_address)
                      : n === s,
                    y =
                      d &&
                      !(0, j.qq)(
                        d,
                        null === (r = D[a - 1]) || void 0 === r
                          ? void 0
                          : r.group
                      ) &&
                      (0, t.jsx)("div", {
                        className:
                          "text-slate-400 dark:text-slate-500 text-xs mt-".concat(
                            0 === a ? 0.5 : 3,
                            " mb-2 ml-2"
                          ),
                        children: (0, j.YQ)(d),
                      }),
                    k = (0, t.jsxs)("div", {
                      className: "flex items-center space-x-2",
                      children: [
                        g &&
                          (0, t.jsx)(p.Z, {
                            src: g,
                            width: 32,
                            height: 32,
                            className: "rounded-full",
                          }),
                        (0, t.jsx)("span", {
                          className: "whitespace-nowrap text-base ".concat(
                            N ? "font-bold" : "font-medium"
                          ),
                          children: f,
                        }),
                      ],
                    }),
                    { amount: _ } = { ...(0, v.pm)(W, u, A) };
                  _ = (0, b.hj)(_) ? _ : null;
                  let q =
                      (null == A ? void 0 : A[W]) &&
                      (0, t.jsx)("div", {
                        className: ""
                          .concat(
                            W && !_ ? "text-slate-400 dark:text-slate-500" : "",
                            " "
                          )
                          .concat(
                            N ? "font-semibold" : "font-medium",
                            " ml-auto"
                          ),
                        children: (0, b.hj)(_)
                          ? (0, t.jsx)(h.Z, {
                              value: _,
                              className: "whitespace-nowrap",
                            })
                          : "n/a",
                      }),
                    C = "dropdown-item ".concat(
                      m || !x
                        ? "cursor-not-allowed text-slate-400 dark:text-slate-600"
                        : N
                        ? "bg-slate-100 dark:bg-slate-800 cursor-pointer"
                        : "hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer",
                      " rounded flex items-center justify-between space-x-2 my-1 p-2"
                    );
                  return (0, t.jsxs)(
                    "div",
                    {
                      children: [
                        y,
                        m || !x
                          ? (0, t.jsxs)("div", {
                              title: x ? "Disabled" : "Not Support",
                              className: C,
                              children: [k, q],
                            })
                          : (0, t.jsxs)("div", {
                              onClick: () => l(n, i ? f : u),
                              className: C,
                              children: [k, q],
                            }),
                      ],
                    },
                    a
                  );
                }),
              }),
            ],
          });
        },
        search = (e) => {
          let {
              value: s,
              onSelect: a,
              chain: r,
              destinationChain: n,
              isBridge: o = !1,
              isPool: i = !1,
              showNextAssets: d = !1,
              showNativeAssets: m = !1,
              showOnlyWrappable: x = !1,
              data: h,
            } = e,
            [p, u] = (0, l.useState)("");
          return (0, t.jsx)("div", {
            className: "navbar-search mt-1",
            children: (0, t.jsxs)("div", {
              className: "relative",
              children: [
                (0, t.jsx)("input", {
                  value: p,
                  onChange: (e) => u(e.target.value),
                  type: "search",
                  placeholder: "Search",
                  className:
                    "w-full h-10 bg-transparent appearance-none rounded border border-slate-200 dark:border-slate-800 text-sm pl-10 pr-5",
                }),
                (0, t.jsx)("div", {
                  className: "absolute top-0 left-0 mt-3 ml-4",
                  children: (0, t.jsx)(c.jRj, {
                    className: "w-4 h-4 stroke-current",
                  }),
                }),
                (0, t.jsx)("div", {
                  className: "w-full mx-auto pt-4 pb-2",
                  children: (0, t.jsx)(assets, {
                    value: s,
                    inputSearch: p,
                    onSelect: (e, s) => {
                      a && a(e, s);
                    },
                    chain: r,
                    destinationChain: n,
                    isBridge: o,
                    isPool: i,
                    showNextAssets: d,
                    showNativeAssets: m,
                    showOnlyWrappable: x,
                    data: h,
                  }),
                }),
              ],
            }),
          });
        },
        g = a(214),
        w = a(36126),
        asset = (e) => {
          let {
              disabled: s = !1,
              value: a,
              onSelect: c,
              chain: d,
              destinationChain: m,
              origin: x = "",
              isBridge: h = !1,
              isPool: u = !1,
              showNextAssets: b = !1,
              showNativeAssets: f = !1,
              showOnlyWrappable: N = !1,
              fixed: y = !1,
              data: k,
              className:
                _ = "flex items-center space-x-1.5 sm:space-x-2 sm:-ml-1",
            } = e,
            {
              chains: q,
              assets: C,
              pool_assets: Z,
            } = (0, r.v9)(
              (e) => ({
                chains: e.chains,
                assets: e.assets,
                pool_assets: e.pool_assets,
              }),
              r.wU
            ),
            { chains_data: P } = { ...q },
            { assets_data: S } = { ...C },
            { pool_assets_data: A } = { ...Z },
            [V, W] = (0, l.useState)(!0),
            [G, B] = (0, l.useState)(!1),
            D = { onMouseEnter: () => B(!0), onMouseLeave: () => B(!1) },
            onClick = (e, s) => {
              c && c(e, s), W(!V);
            },
            z = (0, v.fr)(d, P),
            { chain_id: E } = { ...z },
            I = u ? A : S,
            L = k || (0, v.j2)(a, I),
            { contracts: M } = { ...L },
            O = (0, v.Gr)(E, M),
            { symbol: Y, image: F, tooltip: T } = { ...O };
          (Y = u
            ? (null == k ? void 0 : k.symbol) ||
              (null == L ? void 0 : L.symbol) ||
              "Select token"
            : (null == k ? void 0 : k.symbol) ||
              Y ||
              (null == L ? void 0 : L.symbol) ||
              "Token"),
            (F =
              u && !k
                ? (null == L ? void 0 : L.image) || F
                : k
                ? (null == L ? void 0 : L.image) || F
                : F || (null == L ? void 0 : L.image)),
            "gnosis" === d &&
              ((Y = "DAI" === Y ? "X".concat(Y) : Y),
              (F = null == F ? void 0 : F.replace("/dai.", "/xdai.")));
          let U = (0, t.jsxs)("div", {
              className: y
                ? "cursor-default flex items-center space-x-1.5 sm:space-x-2 sm:-ml-1"
                : _ ||
                  "w-32 sm:w-48 min-w-max bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 rounded border dark:border-slate-700 flex items-center justify-between space-x-1.5 sm:space-x-2 py-1.5 sm:py-2 3xl:py-4 px-2 sm:px-3 3xl:px-5",
              children: [
                F &&
                  (0, t.jsxs)(t.Fragment, {
                    children: [
                      (0, t.jsx)("div", {
                        className: "flex sm:hidden",
                        children: (0, t.jsx)(p.Z, {
                          src: F,
                          width: 20,
                          height: 20,
                          className: "rounded-full",
                        }),
                      }),
                      (0, t.jsx)("div", {
                        className: "hidden sm:flex",
                        children: (0, t.jsx)(p.Z, {
                          src: F,
                          width: 24,
                          height: 24,
                          className: "rounded-full 3xl:w-8 3xl:h-8",
                        }),
                      }),
                    ],
                  }),
                (0, t.jsx)("span", {
                  className:
                    "whitespace-nowrap sm:text-md 3xl:text-2xl font-semibold ".concat(
                      F ? "" : "sm:ml-3"
                    ),
                  children: Y,
                }),
              ],
            }),
            X = (0, t.jsx)(w.Z, {
              id: "modal-assets",
              hidden: V,
              disabled: s || y,
              onClick: (e) => W(!e),
              buttonTitle: I ? U : (0, t.jsx)(g.Z, { name: "Puff" }),
              buttonClassName:
                _ ||
                "w-32 sm:w-48 min-w-max h-10 sm:h-12 ".concat(
                  s ? "cursor-not-allowed" : "",
                  " flex items-center justify-center"
                ),
              title: (0, t.jsxs)("div", {
                className:
                  "flex items-center justify-between pt-1 pb-2 space-x-2",
                children: [
                  (0, t.jsxs)("span", {
                    className: "flex items-center space-x-1",
                    children: [
                      (0, t.jsx)("span", {
                        className: "capitalize",
                        children: x || "select",
                      }),
                      (0, t.jsx)("span", {
                        className: "normal-case",
                        children: "token",
                      }),
                    ],
                  }),
                  z &&
                    (0, t.jsxs)("div", {
                      className: "flex items-center space-x-2",
                      children: [
                        z.image &&
                          (0, t.jsx)(p.Z, {
                            src: z.image,
                            width: 24,
                            height: 24,
                            className: "rounded-full",
                          }),
                        (0, t.jsx)("span", {
                          className: "font-semibold capitalize",
                          children: (0, v.pN)(z),
                        }),
                      ],
                    }),
                ],
              }),
              body: (0, t.jsx)(search, {
                value: a,
                onSelect: (e, s) => onClick(e, s),
                chain: d,
                destinationChain: m,
                isBridge: h,
                isPool: u,
                showNextAssets: b,
                showNativeAssets: f,
                showOnlyWrappable: N,
                data: k,
              }),
              noButtons: !0,
            });
          return T &&
            (0, j.qq)(
              null == L ? void 0 : L.contract_address,
              null == O ? void 0 : O.contract_address
            )
            ? (0, t.jsxs)(n.Popover, {
                open: G,
                handler: B,
                children: [
                  (0, t.jsx)(n.PopoverHandler, {
                    ...D,
                    children: (0, t.jsx)("div", { children: X }),
                  }),
                  (0, t.jsx)(n.PopoverContent, {
                    ...D,
                    className:
                      "z-50 text-xs text-white border-black linkify bg-dark",
                    children: (0, t.jsx)(o.Z, { children: (0, i.ZP)(T) }),
                  }),
                ],
              })
            : X;
        };
    },
  },
]);
