const Inbtn = document.querySelector('.btn-1')
const Outbtn = document.querySelector('.btn-2')

// inDate
// inAmount
// inDescription

const inDate = document.querySelector('.inDate')
const inAmount = document.querySelector('.inAmount')
const inDescription = document.querySelector('.inDescription')

// outDate
// outAmount
// outDescription

const outDate = document.querySelector('.outDate')
const outAmount = document.querySelector('.outAmount')
const outDescription = document.querySelector('.outDescription')

const TotalIn = document.querySelector('.TotalIn')
const TotalOut = document.querySelector('.TotalOut')
const Profit = document.querySelector('.Profit')

let AmountInObj = []
Inbtn.addEventListener('click', () => {
    AmountInObj.push({
        date: inDate.value,
        amount: inAmount.value,
        description: inDescription.value
    })
    TotalIn.style.background = 'green'
    TotalIn.style.setProperty("--pl", "white")
    TotalIn.setAttribute('placeholder', `${inAmount.value}`)
    console.log(AmountInObj)
})

let AmountOutObj = []
Outbtn.addEventListener('click', () => {
    AmountOutObj.push({
        date: outDate.value,
        amount: outAmount.value,
        description: outDescription.value
    })
    console.log(AmountOutObj)
})

    // let AllAmount = [AmountInObj, AmountOutObj]
    // console.log(AllAmount)