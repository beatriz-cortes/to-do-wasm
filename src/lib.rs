extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn hello(name: &str) -> String {
    format!("{} here is your list of to-do's:", name)
}
