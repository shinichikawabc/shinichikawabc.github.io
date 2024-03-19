import React from 'react';

function Contacts() {
    return (
        <section id="contacts">
            <h2>Contact Information</h2>
            <ul style={{ listStyleType: 'none', padding: '0' }}>
                <li>Email: <span onclick="copyClipboard()" id = "emal"> shinichikawabc@gmail.com</span></li>
                <li>Phone: +1 (778) 323-0975</li>
                <li>LinkedIn: <a href="https://www.linkedin.com/in/shinichi-ishikawa-a38735197/">John Doe</a></li>
                <li>GitHub: <a href="https://github.com/johndoe">johndoe</a></li>
            </ul>
        </section>
    );
}
function copyClipboard() {
    var copyText = document.getElementById("email");  
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
  
    alert("Copied the text: " + copyText.value);
  }

export default Contacts;