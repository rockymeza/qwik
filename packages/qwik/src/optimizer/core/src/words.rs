use lazy_static::lazy_static;
use swc_atoms::JsWord;

pub const SIGNAL: char = '$';
pub const LONG_SUFFIX: &str = "Qrl";

lazy_static! {
    pub static ref CHILDREN: JsWord = JsWord::from("children");
    pub static ref HANDLE_WATCH: JsWord = JsWord::from("_hW");
    pub static ref _QRL: JsWord = JsWord::from("qrl");
    pub static ref _QRL_DEV: JsWord = JsWord::from("qrlDEV");
    pub static ref _INLINED_QRL: JsWord = JsWord::from("inlinedQrl");
    pub static ref _INLINED_QRL_DEV: JsWord = JsWord::from("inlinedQrlDEV");
    pub static ref _NOOP_QRL: JsWord = JsWord::from("_noopQrl");
    pub static ref _REST_PROPS: JsWord = JsWord::from("_restProps");
    pub static ref QHOOK: JsWord = JsWord::from("$");
    pub static ref QWIK_INTERNAL: JsWord = JsWord::from("qwik");
    pub static ref BUILDER_IO_QWIK: JsWord = JsWord::from("@builder.io/qwik");
    pub static ref BUILDER_IO_QWIK_BUILD: JsWord = JsWord::from("@builder.io/qwik/build");
    pub static ref BUILDER_IO_QWIK_JSX: JsWord = JsWord::from("@builder.io/qwik/jsx-runtime");
    pub static ref BUILDER_IO_QWIK_JSX_DEV: JsWord =
        JsWord::from("@builder.io/qwik/jsx-dev-runtime");
    pub static ref QCOMPONENT: JsWord = JsWord::from("component$");
    pub static ref USE_LEXICAL_SCOPE: JsWord = JsWord::from("useLexicalScope");
    pub static ref _IMMUTABLE: JsWord = JsWord::from("_IMMUTABLE");
    pub static ref _REFS: JsWord = JsWord::from("_REFS");
    pub static ref USE_SERVER_MOUNT: JsWord = JsWord::from("useServerMount$");
    pub static ref H: JsWord = JsWord::from("h");
    pub static ref FRAGMENT: JsWord = JsWord::from("Fragment");
    pub static ref IS_SERVER: JsWord = JsWord::from("isServer");
    pub static ref IS_BROWSER: JsWord = JsWord::from("isBrowser");
    pub static ref IS_DEV: JsWord = JsWord::from("isDev");
    pub static ref COMPONENT: JsWord = JsWord::from("component$");
    pub static ref _REG_SYMBOL: JsWord = JsWord::from("_regSymbol");
    pub static ref _JSX_BRANCH: JsWord = JsWord::from("_jsxBranch");
}
