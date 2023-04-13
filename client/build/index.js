var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 45,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 87,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => root_default,
  links: () => links
});
var import_react2 = require("@remix-run/react");

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-6K4IGWAW.css";

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [
  {
    rel: "preconnect",
    href: 'href="https://fonts.googleapis.com'
  },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous"
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Oxygen+Mono&display=swap"
  },
  {
    rel: "stylesheet",
    href: tailwind_default
  }
], App = () => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 37,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 40,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 36,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 43,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 44,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 45,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 46,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 42,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/root.tsx",
  lineNumber: 35,
  columnNumber: 5
}, this), root_default = App;

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => index_default,
  meta: () => meta
});
var import_react4 = require("react");

// app/components/nav/Header.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), Header = ({ accounts, handleAccounts }) => {
  let isConnected = Boolean(accounts);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("header", { className: "py-4 px-12 border-2 border-black rounded-sm flex justify-between mb-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "text-2xl", children: "This is Lottery" }, void 0, !1, {
      fileName: "app/components/nav/Header.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    isConnected && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-xl border-b-2 border-black font-bold", children: "Connected" }, void 0, !1, {
      fileName: "app/components/nav/Header.tsx",
      lineNumber: 28,
      columnNumber: 9
    }, this),
    !isConnected && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "button",
      {
        onClick: async () => {
          if (window.ethereum !== void 0) {
            let account = await window.ethereum.request({
              method: "eth_requestAccounts"
            });
            handleAccounts(account);
          }
        },
        className: "bg-black text-white py-2 px-4 hover:bg-gray-600",
        children: "Connect your wallet"
      },
      void 0,
      !1,
      {
        fileName: "app/components/nav/Header.tsx",
        lineNumber: 33,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/nav/Header.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}, Header_default = Header;

// app/components/main/Main.tsx
var import_react3 = require("react"), import_ethers = require("ethers");

// app/lib/Lottery.json
var address = "0xA3043F2122Fc0dF2A15Ac99d7293aCDe9EaD1dc0";
var abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [],
    name: "enter",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [],
    name: "getPlayers",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "manager",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "minimumAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "pickWinner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "players",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];

// app/components/main/Main.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), getContract = async () => {
  let provider = new import_ethers.ethers.BrowserProvider(window.ethereum), signer = await provider.getSigner(), contract = new import_ethers.ethers.Contract(address, abi, signer);
  return {
    provider,
    signer,
    contract
  };
}, Main = ({ accounts }) => {
  let isConnected = Boolean(accounts), [isLoading, setIsLoading] = (0, import_react3.useState)(!1), [manager, setManager] = (0, import_react3.useState)(""), [balance, setBalance] = (0, import_react3.useState)(0), [players, setPlayers] = (0, import_react3.useState)(0), [ether, setEther] = (0, import_react3.useState)(0.1), [isEntering, setIsEntering] = (0, import_react3.useState)(!1), [isPicking, setIsPicking] = (0, import_react3.useState)(!1);
  (0, import_react3.useEffect)(() => {
    isConnected && (async () => {
      if (setIsLoading(!0), window.ethereum !== void 0) {
        let { provider, contract: lottery } = await getContract(), proOne = lottery.manager(), proTwo = lottery.getPlayers(), proThree = provider.getBalance(await lottery.getAddress()), [manager2, players2, balance2] = await Promise.all([
          proOne,
          proTwo,
          proThree
        ]);
        setManager(manager2), setPlayers(players2.length), setBalance(parseFloat(import_ethers.ethers.formatEther(balance2)));
      }
      setIsLoading(!1);
    })();
  }, [isConnected]);
  let handleEtherChange = (e) => setEther(parseFloat(e.target.value)), handleEnter = async (e) => {
    e.preventDefault(), setIsEntering(!0);
    let { contract: lottery } = await getContract();
    lottery.enter({
      value: import_ethers.ethers.parseEther(ether.toString())
    }).catch((err) => console.log("Error", err)).finally(() => setIsEntering(!1));
  }, handlePickWinner = async (e) => {
    setIsPicking(!0);
    let { contract: lottery } = await getContract();
    lottery.pickWinner().catch((err) => console.log("Error", err)).finally(() => setIsPicking(!1));
  };
  return isConnected ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("main", { className: "border-2 border-black rounded-sm p-8 text-center min-h-[85vh]", children: [
    isLoading && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-xl", children: "Loading..." }, void 0, !1, {
      fileName: "app/components/main/Main.tsx",
      lineNumber: 103,
      columnNumber: 21
    }, this),
    !isLoading && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "[&>*]:mb-8 mb-40", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-md", children: [
          "Welcome to the lottery, the manager is:",
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "font-bold m-2", children: manager }, void 0, !1, {
            fileName: "app/components/main/Main.tsx",
            lineNumber: 110,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/main/Main.tsx",
          lineNumber: 108,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-md", children: [
          "Current balance is:",
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "font-bold m-2", children: balance }, void 0, !1, {
            fileName: "app/components/main/Main.tsx",
            lineNumber: 114,
            columnNumber: 15
          }, this),
          "ether"
        ] }, void 0, !0, {
          fileName: "app/components/main/Main.tsx",
          lineNumber: 112,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-md", children: [
          "Players in the lottery:",
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "font-bold m-2", children: players }, void 0, !1, {
            fileName: "app/components/main/Main.tsx",
            lineNumber: 119,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/main/Main.tsx",
          lineNumber: 117,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/main/Main.tsx",
        lineNumber: 107,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mb-28", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          "form",
          {
            id: "ether-form",
            className: "w-max mx-auto flex flex-col",
            onSubmit: handleEnter,
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                  "input",
                  {
                    type: "number",
                    step: 0.1,
                    min: 0.1,
                    id: "ether-value",
                    className: "border-2 border-black mr-4 py-1 px-3",
                    onChange: handleEtherChange,
                    value: ether
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/main/Main.tsx",
                    lineNumber: 131,
                    columnNumber: 17
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { htmlFor: "ether-value", children: "Ether" }, void 0, !1, {
                  fileName: "app/components/main/Main.tsx",
                  lineNumber: 140,
                  columnNumber: 17
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/main/Main.tsx",
                lineNumber: 130,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                "button",
                {
                  form: "ether-form",
                  className: "bg-black text-white my-2 py-1 font-bold uppercase",
                  children: "Enter"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/main/Main.tsx",
                  lineNumber: 142,
                  columnNumber: 15
                },
                this
              )
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/main/Main.tsx",
            lineNumber: 125,
            columnNumber: 13
          },
          this
        ),
        isEntering && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "Entering you into the lottery..." }, void 0, !1, {
          fileName: "app/components/main/Main.tsx",
          lineNumber: 149,
          columnNumber: 28
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/main/Main.tsx",
        lineNumber: 124,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          "button",
          {
            className: "bg-black text-white font-bold uppercase py-2 px-6",
            onClick: handlePickWinner,
            children: "Pick a winner"
          },
          void 0,
          !1,
          {
            fileName: "app/components/main/Main.tsx",
            lineNumber: 155,
            columnNumber: 15
          },
          this
        ),
        isPicking && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "Picking a winner..." }, void 0, !1, {
          fileName: "app/components/main/Main.tsx",
          lineNumber: 161,
          columnNumber: 29
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/main/Main.tsx",
        lineNumber: 154,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/main/Main.tsx",
      lineNumber: 105,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/main/Main.tsx",
    lineNumber: 102,
    columnNumber: 5
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("main", { className: "border-2 border-black rounded-sm p-8 min-h-[85vh] flex justify-center items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-xl", children: "Please connect your wallet first" }, void 0, !1, {
    fileName: "app/components/main/Main.tsx",
    lineNumber: 97,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/main/Main.tsx",
    lineNumber: 96,
    columnNumber: 7
  }, this);
}, Main_default = Main;

// app/routes/_index.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), meta = () => [{ title: "Lottery" }], Index = () => {
  let [accounts, setAccount] = (0, import_react4.useState)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Header_default, { accounts, handleAccounts: (accounts2) => setAccount(accounts2) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Main_default, { accounts }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}, index_default = Index;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "42fd3430", entry: { module: "/build/entry.client-ZV7UUKUI.js", imports: ["/build/_shared/chunk-WRK3KOZC.js", "/build/_shared/chunk-T6XYLGM3.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-ZQ3553NZ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-RLJJWPII.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, hmr: void 0, url: "/build/manifest-42FD3430.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { unstable_cssModules: !1, unstable_cssSideEffectImports: !1, unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !0, unstable_vanillaExtract: !1, v2_errorBoundary: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
