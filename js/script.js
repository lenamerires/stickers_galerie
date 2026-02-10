let nbrPage = 9; 
let url = '';

function onScanSuccess(decodedText, decodedResult) {
    console.log(`Scan result: ${decodedText}`, decodedResult);

    url = decodedText;

 

    // créer l'iframe
    let  iframe = document.createElement("iframe");
    iframe.src = url;

    iframe.addEventListener("load", () => {
    const finalUrl = iframe.contentWindow.location.href;
    console.log("URL finale :", finalUrl);

   for (let i = 1; i <nbrPage; i++) {
       console.log("page"+i+".html")
        if(finalUrl.includes("page"+i+".html")){
            console.log(i)
            let picto = document.getElementById('img'+i+'');
            picto.style.visibility = 'visible'
        }
        
    }
});

    // l'ajouter au body
    document.body.appendChild(iframe);

    // arrêter le scanner
    html5QrcodeScanner.clear();
}

const html5QrcodeScanner = new Html5QrcodeScanner(
    "reader",
    { fps: 10, qrbox: 250 }
);

// html5QrcodeScanner.render(onScanSuccess);

let button = document.getElementById('button')
button.addEventListener("click", function(){
html5QrcodeScanner.render(onScanSuccess);
let iframe = document.querySelector('iframe');
if (iframe) {
    iframe.remove();
}

});