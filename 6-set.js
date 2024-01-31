// Set should maintain a list of unique values and support add, delete and inclusion
// It should also have the ability to get its size

class Set {
	constructor(arr) {
		this.arr = arr;
	}

	add(val) {
		if(!this.has(val)) this.arr.push(val);
	}

	delete(val) {
		this.arr = this.arr.filter(el => el !== val);
	}

	has(val) {
		return this.arr.includes(val)
	}
	
	get size(){
		return this.arr.length
	}
}

const s = new Set([1, 2, 3, 4, 5]);

// try to add the same value shouldn't work

s.add(1)
s.add(1)
s.add(1)

console.log("s should have 5 members and and actually has : ", s.size);
console.log("s should contain 5: ", s.size);

s.add(6);

console.log("s should contain 6: ", !s.has(6))
