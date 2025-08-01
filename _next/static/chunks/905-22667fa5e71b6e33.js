"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [905],
  {
    12119: function (e, s, t) {
      var a = t(85893),
        l = t(67294),
        n = t(47516);
      s.Z = (e) => {
        let {
            size: s = "default",
            status: t,
            color: c,
            outlined: r = !1,
            raised: i = !1,
            rounded: o = !0,
            borderLeft: d = !1,
            icon: m = null,
            closeDisabled: h = !1,
            children: x,
            className: u = "text-white text-sm 3xl:text-base font-medium",
          } = e,
          [p, f] = (0, l.useState)(!1),
          b = "w-4 sm:w-6 h-4 sm:h-6 ".concat(
            (null == u ? void 0 : u.includes("p-3")) ? "mr-2.5" : "mr-3"
          );
        switch (t) {
          case "success":
            (c = c || "bg-red-400 dark:bg-red-500"),
              (m = m || (0, a.jsx)(n.TJu, { className: b }));
            break;
          case "failed":
            (c = c || "bg-red-400 dark:bg-red-500"),
              (m = m || (0, a.jsx)(n.OzA, { className: b }));
            break;
          default:
            (c = c || "bg-red-400 dark:bg-red-500"),
              (m = m || (0, a.jsx)(n.avz, { className: b }));
        }
        let j = [c];
        return (
          r && j.push("border border-current"),
          i && j.push("shadow"),
          o && j.push("rounded"),
          p && j.push("hidden"),
          d && j.push("border-l-4 border-current"),
          "sm" === s ? j.push("p-2") : j.push("p-4"),
          u && j.push(u),
          (j = j.join(" ")),
          (0, a.jsxs)("div", {
            className: "w-full flex "
              .concat(
                j.includes("items-") ? "" : "items-center",
                " justify-start "
              )
              .concat(j),
            children: [
              (0, a.jsx)("div", { className: "flex-shrink", children: m }),
              (0, a.jsx)("div", { className: "flex-grow", children: x }),
              !h &&
                (0, a.jsx)("div", {
                  className: "flex-shrink",
                  children: (0, a.jsx)("button", {
                    onClick: () => f(!p),
                    className: "flex items-center justify-center ml-auto",
                    children: (0, a.jsx)(n.czh, { className: "w-4 h-4" }),
                  }),
                }),
            ],
          })
        );
      };
    },
    50051: function (e, s, t) {
      var a = t(85893),
        l = t(67294),
        n = t(41248),
        c = t(30381),
        r = t.n(c),
        i = t(214),
        o = t(91172),
        d = t(87056),
        m = t(27326),
        h = t(21180);
      s.Z = (e) => {
        let {
            chainId: s,
            asset: t,
            contractAddress: c,
            decimals: x = 18,
            symbol: u,
            hideSymbol: p = !1,
            trigger: f,
            className: b = "",
          } = e,
          j = (0, n.I0)(),
          {
            assets: v,
            wallet: g,
            balances: w,
          } = (0, n.v9)(
            (e) => ({
              assets: e.assets,
              wallet: e.wallet,
              balances: e.balances,
            }),
            n.wU
          ),
          { assets_data: N } = { ...v },
          { wallet_data: k } = { ...g },
          { signer: y } = { ...k },
          { balances_data: S } = { ...w },
          [Z, _] = (0, l.useState)(null),
          [C, W] = (0, l.useState)(null);
        (0, l.useEffect)(() => {
          let getData = () => {
            if (s && c && (f || C)) {
              let e = {
                contract_address: c,
                chain_id: s,
                decimals: x,
                symbol: u,
              };
              j({ type: h.ZK, value: { chain: s, contract_data: e } });
            }
          };
          getData();
          let e = setInterval(() => getData(), 3e4);
          return () => clearInterval(e);
        }, [f, C]),
          (0, l.useEffect)(() => {
            let e = (0, d.pm)(s, c, S);
            if (e) {
              let { amount: s } = { ...e };
              _(s);
            }
          }, [S]),
          (0, l.useEffect)(() => {
            (0, m.hj)(Z) && (_(null), W(r()().valueOf()));
          }, [s, c]);
        let q = (0, d.j2)(t, N),
          { contracts: z } = { ...q },
          D = (0, d.Gr)(s, z),
          { contract_address: E } = { ...D };
        u =
          u ||
          (null == D ? void 0 : D.symbol) ||
          (null == q ? void 0 : q.symbol);
        let { amount: B } = { ...(0, d.pm)(s, c || E, S) };
        return (
          (B = f ? Z : (0, m.hj)(B) ? B : null),
          s &&
            t &&
            (0, a.jsx)("div", {
              className:
                "flex items-center justify-center text-slate-600 dark:text-slate-50 text-xs 3xl:text-xl space-x-1 3xl:space-x-2 ".concat(
                  b
                ),
              children: (0, m.hj)(B)
                ? (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)(o.Z, {
                        value: B,
                        format: "0,0.000000",
                        maxDecimals: 6,
                        className: "font-medium text-sm",
                      }),
                      !p &&
                        (0, a.jsx)("span", {
                          className: "hidden font-medium sm:block text-sm",
                          children: u,
                        }),
                    ],
                  })
                : "string" == typeof B
                ? (0, a.jsx)("span", { children: "n/a" })
                : y &&
                  (0, a.jsx)(i.Z, {
                    name: "RotatingSquare",
                    width: 16,
                    height: 16,
                  }),
            })
        );
      };
    },
    91172: function (e, s, t) {
      var a = t(85893),
        l = t(59335),
        n = t(96486),
        c = t.n(n),
        r = t(22006);
      s.Z = (e) => {
        let {
            value: s,
            format: t = "0,0.00",
            delimiter: n = ".",
            maxDecimals: i,
            prefix: o = "",
            suffix: d = "",
            noTooltip: m = !1,
            placement: h = "top",
            tooltipContent: x = "",
            className:
              u = "whitespace-nowrap text-sm 3xl:text-xl font-semibold",
          } = e,
          p = !isNaN(s),
          f = ["string", "number"].includes(typeof s) ? s.toString() : void 0;
        if ("string" == typeof f && f.includes(n) && !f.endsWith(n)) {
          let e = Number((0, r.Vl)(f).join("")),
            s = c().last(f.split(n));
          for (
            i = "number" != typeof i ? (e >= 1e3 ? 0 : e >= 1 ? 2 : 6) : i,
              f =
                Math.abs(e) >= Math.pow(10, -i)
                  ? s.length > i
                    ? e.toFixed(i)
                    : void 0
                  : s.length > i
                  ? "<".concat(
                      i > 0
                        ? "0".concat(n).concat(
                            c()
                              .range(i - 1)
                              .map((e) => "0")
                              .join("")
                          )
                        : "",
                      "1"
                    )
                  : void 0;
            (null == f ? void 0 : f.includes(n)) &&
            f.endsWith("0") &&
            !f.endsWith("".concat(n, "00"));

          )
            f = f.substring(0, f.length - 1);
          ((null == f ? void 0 : f.endsWith("".concat(n, "0"))) ||
            (null == f ? void 0 : f.endsWith(n))) &&
            (f = c().head(f.split(n)));
        } else f = void 0;
        return (
          "string" == typeof s &&
            s.endsWith("".concat(n, "0")) &&
            (s = c().head(s.split(n))),
          f && Number(f) >= 1e3
            ? (f = (0, r.Y4)(f, t, !0))
            : s && Number(s) >= 1e3 && (s = (0, r.Y4)(s, t, !0)),
          p &&
            ("string" == typeof f
              ? !m || x
                ? (0, a.jsx)(l.Tooltip, {
                    placement: h,
                    content: x || "".concat(o).concat(s.toString()).concat(d),
                    children: (0, a.jsx)("span", {
                      className: u,
                      children: "".concat(o).concat(f).concat(d),
                    }),
                  })
                : (0, a.jsx)("span", {
                    className: u,
                    children: "".concat(o).concat(f).concat(d),
                  })
              : x
              ? (0, a.jsx)(l.Tooltip, {
                  placement: h,
                  content: x,
                  children: (0, a.jsx)("span", {
                    className: u,
                    children: [void 0, null].includes(s)
                      ? "-"
                      : "".concat(o).concat(s).concat(d),
                  }),
                })
              : (0, a.jsx)("span", {
                  className: u,
                  children: [void 0, null].includes(s)
                    ? "-"
                    : "".concat(o).concat(s).concat(d),
                }))
        );
      };
    },
    54597: function (e, s, t) {
      t.d(s, {
        Z: function () {
          return chain;
        },
      });
      var a = t(85893),
        l = t(67294),
        n = t(41248),
        c = t(47516),
        r = t(86893),
        i = t(96486),
        o = t.n(i),
        d = t(97637),
        m = t(22006),
        chains = (e) => {
          let {
              value: s,
              inputSearch: t,
              onSelect: l,
              source: c,
              destination: r,
              isPool: i = !1,
              include: h,
            } = e,
            { chains: x } = (0, n.v9)((e) => ({ chains: e.chains }), n.wU),
            { chains_data: u } = { ...x },
            p = o().orderBy(
              (0, m.qo)(u)
                .filter(
                  (e) =>
                    (!i || !e.no_pool) &&
                    (!t || e) &&
                    (!e.disabled_bridge || i) &&
                    ((0, m.qo)(h).length < 1 || (0, m.qo)(h).includes(e.id))
                )
                .map((e) => ({
                  ...e,
                  scores: ["short_name", "name", "id"].map((s) =>
                    (0, m.Vl)(e[s], "lower", " ")
                      .join(" ")
                      .startsWith(t.toLowerCase())
                      ? t.length > 1
                        ? t.length / e[s].length
                        : t.length > 0
                        ? 0.1
                        : 0.5
                      : -1
                  ),
                }))
                .map((e) => {
                  let { scores: s } = { ...e };
                  return { ...e, max_score: o().max(s) };
                })
                .filter((e) => e.max_score > 0.1),
              ["group", "max_score"],
              ["asc", "desc"]
            );
          return (0, a.jsx)("div", {
            className: "max-h-96 overflow-y-scroll disable-scrollbars",
            children: p.map((e, t) => {
              var n;
              let {
                  id: c,
                  name: r,
                  image: o,
                  group: h,
                  disabled_bridge: x,
                } = { ...e },
                { disabled: u } = { ...e };
              u = u || (x && !i);
              let f = c === s,
                b =
                  h &&
                  !(0, m.qq)(
                    h,
                    null === (n = p[t - 1]) || void 0 === n ? void 0 : n.group
                  ) &&
                  (0, a.jsx)("div", {
                    className:
                      "text-slate-400 dark:text-slate-500 text-xs mt-".concat(
                        0 === t ? 0.5 : 3,
                        " mb-2 ml-2"
                      ),
                    children: (0, m.YQ)(h),
                  }),
                j = (0, a.jsxs)("div", {
                  className: "flex items-center space-x-2",
                  children: [
                    o &&
                      (0, a.jsx)(d.Z, {
                        src: o,
                        width: 32,
                        height: 32,
                        className: "rounded-full",
                      }),
                    (0, a.jsx)("span", {
                      className: "whitespace-nowrap text-base ".concat(
                        f ? "font-bold" : "font-medium"
                      ),
                      children: r,
                    }),
                  ],
                }),
                v = "dropdown-item ".concat(
                  u
                    ? "cursor-not-allowed"
                    : f
                    ? "bg-slate-100 dark:bg-slate-800 cursor-pointer"
                    : "hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer",
                  " rounded flex items-center justify-between space-x-2 my-1 p-2"
                );
              return (0, a.jsxs)(
                "div",
                {
                  children: [
                    b,
                    u
                      ? (0, a.jsx)("div", {
                          title: "Disabled",
                          className: v,
                          children: j,
                        })
                      : (0, a.jsx)("div", {
                          onClick: () => l(c),
                          className: v,
                          children: j,
                        }),
                  ],
                },
                t
              );
            }),
          });
        },
        search = (e) => {
          let {
              value: s,
              onSelect: t,
              source: n,
              destination: c,
              isPool: i = !1,
              include: o,
            } = e,
            [d, m] = (0, l.useState)("");
          return (0, a.jsx)("div", {
            className: "navbar-search mt-1",
            children: (0, a.jsxs)("div", {
              className: "relative",
              children: [
                (0, a.jsx)("input", {
                  value: d,
                  onChange: (e) => m(e.target.value),
                  type: "search",
                  placeholder: "Search",
                  className:
                    "w-full h-10 bg-transparent appearance-none rounded border border-slate-200 dark:border-slate-800 text-sm pl-10 pr-5",
                }),
                (0, a.jsx)("div", {
                  className: "absolute top-0 left-0 mt-3 ml-4",
                  children: (0, a.jsx)(r.jRj, {
                    className: "w-4 h-4 stroke-current",
                  }),
                }),
                (0, a.jsx)("div", {
                  className: "w-full mx-auto pt-4 pb-2",
                  children: (0, a.jsx)(chains, {
                    value: s,
                    inputSearch: d,
                    onSelect: (e) => {
                      t && t(e);
                    },
                    source: n,
                    destination: c,
                    isPool: i,
                    include: o,
                  }),
                }),
              ],
            }),
          });
        },
        h = t(214),
        x = t(36126),
        u = t(87056),
        chain = (e) => {
          let {
              disabled: s = !1,
              value: t,
              onSelect: r,
              source: i,
              destination: o,
              origin: m = "",
              isPool: p = !1,
              noShadow: f = !0,
              fixed: b = !1,
              include: j,
              className: v = "",
            } = e,
            { preferences: g, chains: w } = (0, n.v9)(
              (e) => ({ preferences: e.preferences, chains: e.chains }),
              n.wU
            ),
            { theme: N } = { ...g },
            { chains_data: k } = { ...w },
            [y, S] = (0, l.useState)(!0),
            onClick = (e) => {
              r && r(e), S(!y);
            },
            Z = (0, u.fr)(t, k),
            { image: _, color: C } = { ...Z },
            W =
              C &&
              !f &&
              ""
                .concat(C)
                .concat("light" === N ? "44" : "33", " 0px 4px 16px 8px");
          return (0, a.jsx)(x.Z, {
            id: "modal-chains",
            hidden: y,
            disabled: s || b,
            onClick: (e) => S(!e),
            buttonTitle: k
              ? (0, a.jsxs)("div", {
                  className: b
                    ? "w-32 sm:w-40 min-w-max bg-slate-100 dark:bg-slate-900 cursor-default rounded border dark:border-slate-800 flex items-center justify-between space-x-0.5 sm:space-x-2 py-1.5 sm:py-2 px-2 sm:px-1.5"
                    : v ||
                      "w-32 sm:w-40 min-w-max bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 rounded border dark:border-slate-700 flex items-center justify-between space-x-0.5 sm:space-x-2 py-1.5 sm:py-2 pl-2 pr-1 sm:px-1.5",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "flex items-center space-x-2 3xl:space-x-3",
                      children: [
                        _ &&
                          (0, a.jsxs)(a.Fragment, {
                            children: [
                              (0, a.jsx)("div", {
                                className: "flex sm:hidden",
                                children: (0, a.jsx)(d.Z, {
                                  src: _,
                                  width: 18,
                                  height: 18,
                                  className: "rounded-full",
                                }),
                              }),
                              (0, a.jsx)("div", {
                                className: "hidden sm:flex",
                                children: (0, a.jsx)(d.Z, {
                                  src: _,
                                  width: 20,
                                  height: 20,
                                  className: "rounded-full 3xl:w-6 3xl:h-6",
                                }),
                              }),
                            ],
                          }),
                        (0, a.jsx)("span", {
                          className:
                            "font-semibold whitespace-nowrap sm:text-md 3xl:text-xl",
                          children:
                            (0, u.pN)(Z) || (m ? "Chain" : "Select chain"),
                        }),
                      ],
                    }),
                    !b &&
                      (0, a.jsx)(c.OrA, {
                        size: 18,
                        className:
                          "3xl:w-6 3xl:h-6 text-slate-400 dark:text-slate-200",
                      }),
                  ],
                })
              : (0, a.jsx)(h.Z, { name: "Puff" }),
            buttonClassName:
              v ||
              "w-32 sm:w-40 min-w-max h-8 sm:h-10 ".concat(
                s ? "cursor-not-allowed" : "",
                " flex items-center justify-center"
              ),
            buttonStyle: { boxShadow: W, WebkitBoxShadow: W, MozBoxShadow: W },
            title: (0, a.jsxs)("span", {
              className: "flex items-center pt-1 pb-2 space-x-1",
              children: [
                (0, a.jsx)("span", {
                  className: "capitalize",
                  children: m || "select",
                }),
                (0, a.jsx)("span", {
                  className: "normal-case",
                  children: "chain",
                }),
              ],
            }),
            body: (0, a.jsx)(search, {
              value: t,
              onSelect: (e) => onClick(e),
              source: i,
              destination: o,
              isPool: p,
              include: j,
            }),
            noButtons: !0,
          });
        };
    },
  },
]);
