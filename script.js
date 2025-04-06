
    document.addEventListener('DOMContentLoaded', function() {
        const qrInput = document.getElementById('qr-input');
        const generateBtn = document.getElementById('generate-btn');
        const downloadBtn = document.getElementById('download-btn');
        const qrcodeDiv = document.getElementById('qrcode');
        
        let qrcode = null;
        
        generateBtn.addEventListener('click', generateQRCode);
        qrInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                generateQRCode();
            }
        });
        
        downloadBtn.addEventListener('click', downloadQRCode);
        
        function generateQRCode() {
            const inputValue = qrInput.value.trim();
            
            if (!inputValue) {
                alert('Por favor, digite algum texto ou URL');
                return;
            }
            
            
            qrcodeDiv.innerHTML = '';
            
                qrcode = new QRCode(qrcodeDiv, {
                text: inputValue,
                width: 200,
                height: 200,
                colorDark: "#000000",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.H
            });
            
            
            downloadBtn.style.display = 'inline-block';
        }
        
        function downloadQRCode() {
            if (!qrcode) {
                alert('Gere um QR Code primeiro');
                return;
            }
            
            const canvas = qrcodeDiv.querySelector('canvas');
            if (!canvas) {
                alert('Não foi possível gerar a imagem para download');
                return;
            }
            
            const link = document.createElement('a');
            link.download = 'qrcode.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        }
    });

   