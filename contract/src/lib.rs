use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
use near_sdk::near_bindgen;

#[near_bindgen]
#[derive(Default, BorshSerialize, BorshDeserialize)]
pub struct Contract {
    count: i32,
}

#[near_bindgen]
impl Contract {
    pub fn get(&self) -> i32 {
        self.count
    }

    pub fn increment(&mut self) {
        self.count += 1;
    }
}
