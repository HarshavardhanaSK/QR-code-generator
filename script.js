let imgBox = document.getElementById("imgbox");
        let qrimage = document.getElementById("qrImage");
        let qrText = document.getElementById("qrtext");


        function genrateQR(){
            if(qrText.value.length > 0){
             qrImage.src ="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrText.value;

             imgbox.classList.add("show-img");
        }}
        function downloadQR() {
            const qrImageSrc = document.getElementById("qrImage").src;
            const link = document.createElement("a");
            link.href = qrImageSrc;
            link.download = "qrcode.png";
            link.click();
        }

        Example