// В результате я хочу, чтоб вы написали функцию, которая будет возвращать объект,
// где будет свойство result - и это будет палиндром и свойство steps - это
// число вызовов до нахождения палиндрома.

const palindrom = {};
let steps = 1;
let res = null;

palindromFanc = ((num) => {
	res = num + +String(num).split('').reverse().join('');
	if (+String(res) !== +String(res).split('').reverse().join('')) {
		steps++
		return palindromFanc(res)
	} else {
		palindrom.result = res
		palindrom.steps = steps
		return palindrom
	}
})
console.log(palindromFanc(96));

