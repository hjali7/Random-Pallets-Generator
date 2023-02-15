const Container = document.querySelector(".container")
const RefreshButton = document.querySelector(".refresh-btn")

let MaxPalletsBoxes = 32

function PalletGenerator () {
    Container.innerHTML = ""
    for(let i = 0 ; i  < MaxPalletsBoxes ; i++) {
        let Color = document.createElement("li")
        let RandomHex = Math.floor( Math.random() * 0xffffff).toString( 16 )
        RandomHex = `#${ RandomHex.padStart( 6 , "0" ) }`
        Color.classList.add( "color" )
        Color.innerHTML = `<div class="rect-box" style="background: ${ RandomHex }"></div>
        <span class="hex-value">${ RandomHex }</span>`
        Color.addEventListener( "click" , () => CopyColor ( Color , RandomHex ) )
        Container.appendChild(Color)
    }
}

PalletGenerator()

function CopyColor ( elem , hexVal) {
    let elemColor = elem.querySelector(".hex-value")
    navigator.clipboard.writeText(hexVal)
    elemColor.innerHTML = "Copied"
    setTimeout(() => {
        elemColor.innerHTML = hexVal
    }, 1000);
}

RefreshButton.addEventListener("click" , PalletGenerator )