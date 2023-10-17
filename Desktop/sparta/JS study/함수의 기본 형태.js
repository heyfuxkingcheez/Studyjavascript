// 프로시저 형태의 함수
const f = function () {
    //점프
    console.log(`안녕하세요 + ${x}`)
    console.log(`안녕하세요 + ${x}`)
    console.log(`안녕하세요 + ${x}`)
}

const x = 10
f() // 호출

// 수학적 함수

const f = function (x /*매개변수*/) {
    // 점프!
    return x + 5 // 리턴값
}

console.log(f(1))
console.log(f(2))