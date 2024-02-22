const myObject = {
	a: 1,
	b: 2,
	c: 3,
};

const objectKeys = <Obj extends Record<string, unknown>>(obj: Obj): (keyof Obj)[] => {
	return Object.keys(obj) as (keyof Obj)[];
};

export function typingObjectKeys() {
	objectKeys(myObject).forEach((key) => {
		console.log(myObject[key]);
	});
}
